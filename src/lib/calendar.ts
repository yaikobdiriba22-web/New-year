import { EthiopianDate } from '../types';

export const ETHIOPIAN_MONTHS = [
  { id: 1, en: 'Meskerem', am: 'መስከረም', om: 'Fuulbaana', days: 30 },
  { id: 2, en: 'Tikimt', am: 'ጥቅምት', om: 'Onkololeessa', days: 30 },
  { id: 3, en: 'Hidar', am: 'ኅዳር', om: 'Sadaasa', days: 30 },
  { id: 4, en: 'Tahsas', am: 'ታኅሣሥ', om: 'Muddee', days: 30 },
  { id: 5, en: 'Tir', am: 'ጥር', om: 'Amajjii', days: 30 },
  { id: 6, en: 'Yakatit', am: 'የካቲት', om: 'Guraandhala', days: 30 },
  { id: 7, en: 'Megabit', am: 'መጋቢት', om: 'Bitootessa', days: 30 },
  { id: 8, en: 'Miazia', am: 'ሚያዝያ', om: 'Ebla', days: 30 },
  { id: 9, en: 'Ginbot', am: 'ግንቦት', om: 'Caamsaa', days: 30 },
  { id: 10, en: 'Sene', am: 'ሰኔ', om: 'Waxabajjii', days: 30 },
  { id: 11, en: 'Hamle', am: 'ሐምሌ', om: 'Adooleessa', days: 30 },
  { id: 12, en: 'Nehase', am: 'ነሐሴ', om: 'Hagayya', days: 30 },
  { id: 13, en: 'Pagume', am: 'ጳጉሜ', om: 'Qaammee', days: 5 }, // 6 on leap year
];

// Target Ethiopian New Year 2019 E.C. is September 11, 2026 00:00:00
export const ENKUTATASH_2019_GREGORIAN = new Date('2026-09-11T00:00:00+03:00');

// Check if an Ethiopian year is a leap year (Year mod 4 === 3)
export function isEthiopianLeapYear(year: number): boolean {
  return (year % 4) === 3;
}

// Convert Gregorian Date to Ethiopian Date
export function gregorianToEthiopian(date: Date): EthiopianDate {
  const gYear = date.getFullYear();
  const gMonth = date.getMonth(); // 0-11
  const gDay = date.getDate();

  // Julian day number calculation
  const a = Math.floor((14 - (gMonth + 1)) / 12);
  const y = gYear + 4800 - a;
  const m = (gMonth + 1) + 12 * a - 3;
  const jdn = gDay + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

  // Ethiopian JD offset
  const ethiopicEpochJdn = 1723856; // Meskerem 1, 1 E.C.
  const r = (jdn - ethiopicEpochJdn) % 1461;
  const n = (r % 365) + 365 * Math.floor(r / 1460);
  
  const ethYear = 4 * Math.floor((jdn - ethiopicEpochJdn) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460);
  const ethMonth = Math.floor(n / 30) + 1;
  const ethDay = (n % 30) + 1;

  const monthObj = ETHIOPIAN_MONTHS[Math.min(ethMonth - 1, 12)];

  return {
    year: ethYear,
    month: ethMonth,
    monthNameEn: monthObj.en,
    monthNameAm: monthObj.am,
    monthNameOm: monthObj.om,
    day: ethDay,
  };
}

// Convert Ethiopian Date to Gregorian Date
export function ethiopianToGregorian(year: number, month: number, day: number): Date {
  const ethiopicEpochJdn = 1723856;
  const jdn = ethiopicEpochJdn + 365 * (year - 1) + Math.floor(year / 4) + 30 * (month - 1) + day - 1;

  // Convert JDN back to Gregorian
  const l = jdn + 68569;
  const n = Math.floor((4 * l) / 146097);
  const l2 = l - Math.floor((146097 * n + 3) / 4);
  const i = Math.floor((4000 * (l2 + 1)) / 1461001);
  const l3 = l2 - Math.floor((1461 * i) / 4) + 31;
  const j = Math.floor((80 * l3) / 2447);
  const d = l3 - Math.floor((2447 * j) / 80);
  const l4 = Math.floor(j / 11);
  const m = j + 2 - 12 * l4;
  const y = 100 * (n - 49) + i + l4;

  return new Date(y, m - 1, d);
}

// Calculate countdown diff to target date
export function calculateCountdown(target: Date = ENKUTATASH_2019_GREGORIAN, now: Date = new Date()) {
  const diffMs = target.getTime() - now.getTime();
  if (diffMs <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      totalSeconds: 0,
      isPassed: true,
    };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    days,
    hours,
    minutes,
    seconds,
    totalSeconds,
    isPassed: false,
  };
}

export const GEEZ_NUMERALS: Record<number, string> = {
  1: '፩', 2: '፪', 3: '፫', 4: '፬', 5: '፭',
  6: '፮', 7: '፯', 8: '፰', 9: '፱', 10: '፲',
  20: '፳', 30: '፴', 40: '፵', 50: '፶',
  60: '፷', 70: '፸', 80: '፹', 90: '፺',
  100: '፻', 1000: '፲፻'
};

// Convert number to Ge'ez numeral string
export function toGeez(num: number): string {
  if (num <= 0) return '0';
  if (num === 2019) return '፳፻፲፱'; // 2019 in Ge'ez (20 * 100 + 19)
  if (num === 2018) return '፳፻፲፰';
  if (num === 1) return '፩';

  // Basic representation for days up to 30
  if (num <= 10) return GEEZ_NUMERALS[num] || String(num);
  if (num < 20) return '፲' + (num % 10 !== 0 ? GEEZ_NUMERALS[num % 10] : '');
  if (num < 30) return '፳' + (num % 10 !== 0 ? GEEZ_NUMERALS[num % 10] : '');
  if (num === 30) return '፴';

  return String(num);
}
