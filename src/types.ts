export type Language = 'en' | 'am' | 'om';

export type ThemeMode = 'light' | 'dark';

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalSeconds: number;
  isPassed: boolean;
}

export interface EthiopianDate {
  year: number;
  month: number;
  monthNameEn: string;
  monthNameAm: string;
  monthNameOm: string;
  day: number;
}

export type GreetingRecipient = 'family' | 'friend' | 'teacher' | 'colleague' | 'partner' | 'general';
export type GreetingStyle = 'warm' | 'inspirational' | 'professional' | 'short' | 'traditional';

export interface GreetingCardData {
  id: string;
  category: 'family' | 'friends' | 'professional' | 'romantic' | 'general' | 'inspirational';
  textEn: string;
  textAm: string;
  textOm: string;
  subtextEn?: string;
  subtextAm?: string;
  subtextOm?: string;
}

export interface CultureItem {
  id: string;
  iconName: string;
  titleEn: string;
  titleAm: string;
  titleOm: string;
  descEn: string;
  descAm: string;
  descOm: string;
  image: string;
  tagEn: string;
  tagAm: string;
  tagOm: string;
  detailsEn: string[];
  detailsAm: string[];
  detailsOm: string[];
}

export interface LandscapeItem {
  id: string;
  nameEn: string;
  nameAm: string;
  nameOm: string;
  regionEn: string;
  regionAm: string;
  regionOm: string;
  descriptionEn: string;
  descriptionAm: string;
  descriptionOm: string;
  image: string;
  highlightEn: string;
  highlightAm: string;
  highlightOm: string;
}

export interface GalleryPhoto {
  id: string;
  titleEn: string;
  titleAm: string;
  titleOm: string;
  category: 'new_year' | 'culture' | 'nature' | 'clothing' | 'food' | 'historic';
  image: string;
  captionEn: string;
  captionAm: string;
  captionOm: string;
  locationEn: string;
}

export interface CelebrationTrack {
  id: string;
  titleEn: string;
  titleAm: string;
  titleOm: string;
  scaleType: 'tizita' | 'bati' | 'anchihoye' | 'ambassel';
  tempo: number;
  descriptionEn: string;
  descriptionAm: string;
  descriptionOm: string;
}
