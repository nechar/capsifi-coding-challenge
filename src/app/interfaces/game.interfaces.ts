/**
 * Auto generated using http://json2ts.com/
 * from the response
 */

export interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}

export interface AddedByStatus {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
}

export interface Platform2 {
  id: number;
  name: string;
  slug: string;
  image?: any;
  year_end?: any;
  year_start?: number;
  games_count: number;
  image_background: string;
}

export interface RequirementsEn {
  minimum: string;
  recommended: string;
}

export interface RequirementsRu {
  minimum: string;
  recommended: string;
}

export interface Platform {
  platform: Platform2;
  released_at: string;
  requirements_en: RequirementsEn;
  requirements_ru: RequirementsRu;
}

export interface Platform3 {
  id: number;
  name: string;
  slug: string;
}

export interface ParentPlatform {
  platform: Platform3;
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Store2 {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

export interface Store {
  id: number;
  store: Store2;
}

export interface Clips {
  320: string;
  640: string;
  full: string;
}

export interface Clip {
  clip: string;
  clips: Clips;
  video: string;
  preview: string;
}

export interface Tag {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
}

export interface EsrbRating {
  id: number;
  name: string;
  slug: string;
}

export interface ShortScreenshot {
  id: number;
  image: string;
}

export interface Result {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic?: number;
  playtime: number;
  suggestions_count: number;
  updated: Date;
  user_game?: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  genres: Genre[];
  stores: Store[];
  clip: Clip;
  tags: Tag[];
  esrb_rating: EsrbRating;
  short_screenshots: ShortScreenshot[];
}

export interface Games {
  count: number;
  next?: any;
  previous?: any;
  results: Result[];
}
