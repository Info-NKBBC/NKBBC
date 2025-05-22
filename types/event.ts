import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface Event {
  _id: string;
  title: string;
  date: string;
  endDate?: string;
  location?: string;
  description: string;
  content?: any[];
  image?: {
    _type: 'image';
    asset: SanityImageSource;
    alt?: string;
  };
  registrationUrl?: string;
  category?: 'worship' | 'meeting' | 'event' | 'other';
}
