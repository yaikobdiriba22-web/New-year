// Interactive Web Audio API Ethiopian Pentatonic Synthesizer
// Generates authentic acoustic Krar plucks and ambient celebration melodies

// Ethiopian Pentatonic Scales (Frequencies in Hz)
const SCALES = {
  // Tizita Major Pentatonic (Root C4 ~ 261.63Hz)
  tizita: [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25],
  // Bati (Root C4 ~ C, E, F, G, B, C)
  bati: [261.63, 329.63, 349.23, 392.00, 493.88, 523.25, 659.25, 698.46],
  // Anchihoye (Diminished / characteristic intervals)
  anchihoye: [261.63, 277.18, 349.23, 392.00, 415.30, 523.25, 554.37, 698.46],
  // Ambassel
  ambassel: [261.63, 277.18, 349.23, 392.00, 466.16, 523.25, 554.37, 698.46],
};

// Traditional Ethiopian celebration melody note index sequence (Krar riff)
const MELODY_PATTERNS: Record<string, number[]> = {
  tizita: [0, 2, 4, 3, 2, 0, 1, 2, 4, 5, 4, 2, 3, 1, 0, 0],
  bati: [0, 1, 3, 4, 5, 4, 3, 1, 0, 3, 4, 5, 6, 5, 4, 3],
  anchihoye: [0, 2, 3, 5, 4, 3, 2, 1, 0, 2, 4, 5, 3, 2, 0, 0],
  ambassel: [0, 1, 3, 4, 3, 1, 0, 2, 3, 5, 4, 3, 1, 0, 0, 0],
};

export class EthiopianSoundSynthesizer {
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private masterGain: GainNode | null = null;
  private isPlaying = false;
  private currentScale: 'tizita' | 'bati' | 'anchihoye' | 'ambassel' = 'tizita';
  private tempo = 96; // BPM
  private timerId: number | null = null;
  private step = 0;
  private volume = 0.65;
  private onNoteCallback?: (noteFreq: number, step: number) => void;

  constructor() {
    // Lazy initialized on user interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  public setScale(scale: 'tizita' | 'bati' | 'anchihoye' | 'ambassel', tempo?: number) {
    this.currentScale = scale;
    if (tempo) {
      this.tempo = tempo;
    }
    this.step = 0;
  }

  public setTempo(bpm: number) {
    this.tempo = Math.max(60, Math.min(180, bpm));
  }

  public setOnNote(callback: (noteFreq: number, step: number) => void) {
    this.onNoteCallback = callback;
  }

  // Play a synthesized pluck mimicking a traditional Ethiopian Krar / harp string
  private pluckKrarString(freq: number, time: number) {
    if (!this.ctx || !this.masterGain) return;

    // Dual oscillator: fundamental triangle + harmonic sine for woody resonance
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();
    const pluckGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(freq, time);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, time);

    // Warm wooden body sub-resonance
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq * 0.5, time);

    // Dynamic lowpass filter to mimic acoustic string damping
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(freq * 4, time);
    filter.frequency.exponentialRampToValueAtTime(freq * 1.2, time + 0.35);

    // Envelope: Fast attack, acoustic exponential decay
    pluckGain.gain.setValueAtTime(0.0001, time);
    pluckGain.gain.exponentialRampToValueAtTime(0.8, time + 0.015);
    pluckGain.gain.exponentialRampToValueAtTime(0.001, time + 0.45);

    osc1.connect(filter);
    osc2.connect(filter);
    subOsc.connect(filter);
    filter.connect(pluckGain);
    pluckGain.connect(this.masterGain);

    osc1.start(time);
    osc2.start(time);
    subOsc.start(time);

    osc1.stop(time + 0.5);
    osc2.stop(time + 0.5);
    subOsc.stop(time + 0.5);
  }

  // Add occasional Kebero soft drum pulse for celebration heartbeat
  private playKeberoPulse(time: number, isAccent: boolean) {
    if (!this.ctx || !this.masterGain) return;

    const drumOsc = this.ctx.createOscillator();
    const drumGain = this.ctx.createGain();

    drumOsc.type = 'sine';
    const startFreq = isAccent ? 140 : 90;
    drumOsc.frequency.setValueAtTime(startFreq, time);
    drumOsc.frequency.exponentialRampToValueAtTime(45, time + 0.15);

    drumGain.gain.setValueAtTime(isAccent ? 0.35 : 0.15, time);
    drumGain.gain.exponentialRampToValueAtTime(0.001, time + 0.18);

    drumOsc.connect(drumGain);
    drumGain.connect(this.masterGain);

    drumOsc.start(time);
    drumOsc.stop(time + 0.2);
  }

  public play() {
    this.initContext();
    if (this.isPlaying) return;

    this.isPlaying = true;
    const intervalMs = (60 / this.tempo) * 1000 * 0.5; // Eighth-note pulses

    const loop = () => {
      if (!this.isPlaying || !this.ctx) return;

      const pattern = MELODY_PATTERNS[this.currentScale] || MELODY_PATTERNS.tizita;
      const scaleNotes = SCALES[this.currentScale] || SCALES.tizita;
      const noteIdx = pattern[this.step % pattern.length];
      const freq = scaleNotes[noteIdx % scaleNotes.length];

      const now = this.ctx.currentTime;
      this.pluckKrarString(freq, now);

      // Kebero pulse on beats 1 & 3
      if (this.step % 4 === 0) {
        this.playKeberoPulse(now, true);
      } else if (this.step % 4 === 2) {
        this.playKeberoPulse(now, false);
      }

      if (this.onNoteCallback) {
        this.onNoteCallback(freq, this.step);
      }

      this.step++;
      this.timerId = window.setTimeout(loop, intervalMs);
    };

    loop();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getWaveformData(): Uint8Array {
    if (!this.analyser) {
      return new Uint8Array(32).fill(12);
    }
    const data = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(data);
    return data;
  }

  // Play a celebratory chime when countdown ends or button clicked
  public playCelebrationChime() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const chimeNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    chimeNotes.forEach((freq, idx) => {
      const time = this.ctx!.currentTime + idx * 0.1;
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.exponentialRampToValueAtTime(0.5 / (idx + 1), time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(time);
      osc.stop(time + 1.3);
    });
  }
}

// Global singleton instance for shared audio playback across components
export const soundSynthesizer = new EthiopianSoundSynthesizer();
