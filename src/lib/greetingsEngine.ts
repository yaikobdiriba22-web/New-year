import { Language, GreetingRecipient, GreetingStyle } from '../types';

export interface GreetingEngineInput {
  lang: Language;
  recipientType: GreetingRecipient;
  style: GreetingStyle;
  recipientName: string;
  senderName: string;
}

export const RECIPIENT_OPTIONS: { id: GreetingRecipient; labelEn: string; labelAm: string; labelOm: string; icon: string }[] = [
  { id: 'family', labelEn: 'Family', labelAm: 'ለቤተሰብ', labelOm: 'Maatiif', icon: '👨‍👩‍👧‍👦' },
  { id: 'friend', labelEn: 'Friend', labelAm: 'ለጓደኛ', labelOm: 'Hiriyyaaf', icon: '🤝' },
  { id: 'teacher', labelEn: 'Teacher / Mentor', labelAm: 'ለመምህር', labelOm: 'Barsiisaaf', icon: '🎓' },
  { id: 'colleague', labelEn: 'Colleague / Client', labelAm: 'ለሥራ ባልደረባ', labelOm: 'Hojjetaaf', icon: '💼' },
  { id: 'partner', labelEn: 'Partner / Beloved', labelAm: 'ለፍቅር ጓደኛ', labelOm: 'Jaallalleef', icon: '❤️' },
  { id: 'general', labelEn: 'General / Everyone', labelAm: 'ለሁሉም', labelOm: 'Hundaaf', icon: '🌼' },
];

export const STYLE_OPTIONS: { id: GreetingStyle; labelEn: string; labelAm: string; labelOm: string }[] = [
  { id: 'warm', labelEn: 'Warm & Heartfelt', labelAm: 'ሞቅ ያለና ልባዊ', labelOm: 'Ho\'aa fi Onnee' },
  { id: 'inspirational', labelEn: 'Inspirational', labelAm: 'አነቃቂና ተስፋ ሰጪ', labelOm: 'Kaka\'umsaa' },
  { id: 'professional', labelEn: 'Professional', labelAm: 'ሙያዊና የተከበረ', labelOm: 'Ogummaa' },
  { id: 'short', labelEn: 'Short & Sweet', labelAm: 'አጭርና ግልጽ', labelOm: 'Gabaabaa' },
  { id: 'traditional', labelEn: 'Traditional Blessing', labelAm: 'ባህላዊ ምርቃት', labelOm: 'Eebba Aadaa' },
];

// Salutation generator based on language, recipient type, and name
export function getSalutation(lang: Language, recipientType: GreetingRecipient, name: string): string {
  const cleanName = name.trim();
  if (lang === 'am') {
    if (cleanName) return `ውድ ${cleanName}፣`;
    switch (recipientType) {
      case 'family': return 'ውድ ቤተሰቦቼና ወላጆቼ፣';
      case 'friend': return 'ውድ ጓደኛዬ፣';
      case 'teacher': return 'የተከበሩ መምህሬ፣';
      case 'colleague': return 'ውድ የሥራ ባልደረባዬ፣';
      case 'partner': return 'ውድ የሕይወቴ አጋር፣';
      default: return 'ውድ ወገኖቼ፣';
    }
  }

  if (lang === 'om') {
    if (cleanName) return `Kabajamoo ${cleanName},`;
    switch (recipientType) {
      case 'family': return 'Maatii fi firoottan koo kabajamoof,';
      case 'friend': return 'Hiriyyaa koo jaallatamaa,';
      case 'teacher': return 'Barsiisaa koo kabajamaa,';
      case 'colleague': return 'Hojjetaa fi miseensa koo kabajamaa,';
      case 'partner': return 'Jaallallee koo qaqqaalii,';
      default: return 'Obboloota koo hundaaf,';
    }
  }

  // English default
  if (cleanName) return `Dear ${cleanName},`;
  switch (recipientType) {
    case 'family': return 'Dear Beloved Family,';
    case 'friend': return 'Dear Friend,';
    case 'teacher': return 'Dear Teacher & Mentor,';
    case 'colleague': return 'Dear Colleague,';
    case 'partner': return 'My Beloved Partner,';
    default: return 'Dear Friends & Loved Ones,';
  }
}

// Body generator based on language, recipient type, and style
export function getGreetingBody(lang: Language, recipientType: GreetingRecipient, style: GreetingStyle): string {
  // English messages
  if (lang === 'en') {
    if (style === 'warm') {
      if (recipientType === 'family') {
        return 'May this Ethiopian New Year bring you peace, happiness, health, success, and beautiful new beginnings. Thank you for your endless love, guidance, and warmth.';
      }
      if (recipientType === 'partner') {
        return 'May this New Year bloom with radiant happiness, tender moments, and boundless shared laughter. With you, every sunrise is golden Meskerem.';
      }
      return 'May this Ethiopian New Year bring you peace, happiness, health, success, and beautiful new beginnings.';
    }

    if (style === 'inspirational') {
      return 'As golden Adey Abeba blankets the rolling highlands of Ethiopia, may 2019 E.C. awaken your greatest strength, illuminate bold pathways, and elevate you to soaring new heights.';
    }

    if (style === 'professional') {
      return 'Wishing you and your esteemed organization outstanding success, breakthrough achievements, and fruitful collaboration throughout Ethiopian New Year 2019 E.C.';
    }

    if (style === 'short') {
      return 'Wishing you abundant joy, health, and bright blessings this Ethiopian New Year 2019 E.C.!';
    }

    if (style === 'traditional') {
      return 'May the sacred blessings of our ancestors and the dawn of Meskerem wash away old hardships, granting your household abundance, thirteen months of sunshine, and enduring harmony.';
    }
  }

  // Amharic messages
  if (lang === 'am') {
    if (style === 'warm') {
      if (recipientType === 'family') {
        return 'አዲሱ ፳፻፲፱ ዓ.ም የጤና፣ የደስታ፣ የበረከትና የተትረፈረፈ ፍቅር እንዲሆንልዎ ከልብ እመኛለሁ። ለፈገግታዎና ለመልካም ምክርዎ ምስጋናዬ የላቀ ነው።';
      }
      if (recipientType === 'partner') {
        return 'ይህ አዲስ ዓመት ፍቅራችን ይበልጥ የሚያብብበት፣ በደስታና በሰላም የምንሞላበት የተባረከ ዘመን ይሁንልን። አንተ/ቺ የሕይወቴ ብርሃን ነህ/ሽ።';
      }
      return 'አዲሱ ፳፻፲፱ ዓ.ም የሰላም፣ የጤና፣ የደስታ፣ የስኬት እና የበረከት ዓመት ይሁንልዎ። መልካም አዲስ ዓመት!';
    }

    if (style === 'inspirational') {
      return 'ክረምቱ አልፎ ምድራችን በአደይ አበባ እንደምታበራ፣ ይህ ፳፻፲፱ ዓ.ም ለእርስዎ አዲስ ብርታት፣ ጽናት፣ የማይነጥፍ ተስፋ እና ታላቅ ስኬትን ይዞ ይምጣ። ወደፊት ይቀጥሉ!';
    }

    if (style === 'professional') {
      return 'እንኳን ለ፳፻፲፱ ዓ.ም አዲስ ዓመት በሰላም አደረሳችሁ። አዲሱ ዓመት በሥራዎ ሁሉ ከፍተኛ ስኬት፣ እድገት፣ ጠንካራ ትብብር እና አዳዲስ መልካም ዕድሎችን ይዞላችሁ እንዲመጣ እመኛለሁ።';
    }

    if (style === 'short') {
      return 'መልካም አዲስ ዓመት! ፳፻፲፱ ዓ.ም የሰላምና የጤና ዓመት ይሁንልዎ!';
    }

    if (style === 'traditional') {
      return 'እንቁጣጣሽ ሎሚ እምቧይ አበባ! አሮጌው ዘመን አልፎ በአዲሱ ዓመት በሰላም ያደረሰን አምላክ የተመሰገነ ይሁን። ጤናውን፣ ሰላሙን፣ ፍቅሩን ያብዛልን።';
    }
  }

  // Afaan Oromo messages
  if (lang === 'om') {
    if (style === 'warm') {
      if (recipientType === 'family') {
        return 'Bariin kun kan nagaa, fayyaa guutuu, jaalala fi eebba baay\'ee kan fidu haa ta\'u. Maatii fi firoottan koo hundaaf gammachuu guddaa hawwa.';
      }
      return 'Bariin haaraa 2019 E.C. kun kan nagaa, gammachuu, fayyaa fi milkaa\'ina olaanaa isiniif haa ta\'u.';
    }

    if (style === 'inspirational') {
      return 'Akkuma roobni darbee biyyi keenya abaaboo keelloon miidhagdu, bara 2019 keessatti humna haaraa, ija jabina fi abdii guddaa qabaadhaa. Fuulduratti tarkaanfadhaa!';
    }

    if (style === 'professional') {
      return 'Baga Bara Haaraa 2019 E.C. geessan. Bariin haaraan kun hojii keessan keessatti milkaa\'ina olaanaa, guddina fi carraawwan haaraa hedduu isiniif haa fidu.';
    }

    if (style === 'short') {
      return 'Baga Bara Haaraa 2019 Geessan! Bara nagaa fi gammachuu isiniif haa ta\'u!';
    }

    if (style === 'traditional') {
      return 'Bariin birraa dhufe; abaaboon keelloo ba\'eera. Eebbi maanguddootaa fi nagaan biyya keenyaa hunda keenya haa marsu.';
    }
  }

  return 'May this Ethiopian New Year bring you peace, happiness, health, success, and beautiful new beginnings.';
}

// Signature generator
export function getSignature(lang: Language, senderName: string): string {
  const cleanSender = senderName.trim();
  if (lang === 'am') {
    return cleanSender ? `\n\nከፍቅርና ሰላምታ ጋር፡ ${cleanSender}` : '\n\nከመልካም ምኞት ጋር';
  }
  if (lang === 'om') {
    return cleanSender ? `\n\nJaalala wajjiin: ${cleanSender}` : '\n\nHawwii gaarii wajjiin';
  }
  return cleanSender ? `\n\nWith warm blessings, ${cleanSender}` : '\n\nWarm regards';
}

// Canonical signoff required by user prompt
export function getFestivalSignoff(lang: Language): string {
  if (lang === 'am') {
    return '\n\nመልካም አዲስ ዓመት ፳፻፲፱ ዓ.ም! 🇪🇹🌼';
  }
  if (lang === 'om') {
    return '\n\nBaga Bara Haaraa 2019 E.C. Geessan! 🇪🇹🌼';
  }
  return '\n\nHappy Ethiopian New Year 2019 E.C.! 🇪🇹🌼';
}

// Full composed text generator
export function generateFullGreeting(input: GreetingEngineInput): string {
  const salutation = getSalutation(input.lang, input.recipientType, input.recipientName);
  const body = getGreetingBody(input.lang, input.recipientType, input.style);
  const signature = getSignature(input.lang, input.senderName);
  const festivalSignoff = getFestivalSignoff(input.lang);

  return `${salutation}\n\n${body}${signature}${festivalSignoff}`;
}
