export interface Info {
    id: string;
    name: string;
    categoryType: string;
    groups?: (GroupsEntity)[] | null;
    totalPages: number;
    categories?: (null)[] | null;
  }
  export interface GroupsEntity {
    id: string;
    name: string;
    links: Links;
    priceRange: PriceRange;
    thumbnail: ImagesEntityOrThumbnailOrHero;
    hero: ImagesEntityOrThumbnailOrHero;
    images?: (ImagesEntityOrThumbnailOrHero)[] | null;
    swatches?: (null)[] | null;
    messages?: (string)[] | null;
    flags?: (FlagsEntity)[] | null;
    reviews: Reviews;
  }
  export interface Links {
    www: string;
  }
  export interface PriceRange {
    selling: Selling;
  }
  export interface Selling {
    high: number;
    low: number;
  }
  export interface ImagesEntityOrThumbnailOrHero {
    size: string;
    meta: string;
    alt: string;
    rel: string;
    width: number;
    href: string;
    height: number;
  }
  export interface FlagsEntity {
    bopisSuppress: boolean;
    rank: number;
    id: string;
  }
  export interface Reviews {
    recommendationCount: number;
    likelihood: number;
    reviewCount: number;
    averageRating: number;
    id: string;
    type: string;
  }
  
