export interface IResponseAnime {
  pagination: Pagination;
  data: Datum[];
}

interface Datum {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  title: string;
  title_english?: string;
  title_japanese?: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes?: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis?: string;
  background?: string;
  season?: string;
  year?: number;
  broadcast: Broadcast;
  producers: Producer[];
  licensors: Producer[];
  studios: Producer[];
  genres: Producer[];
  explicit_genres: any[];
  themes: Producer[];
  demographics: Producer[];
}

interface Producer {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Broadcast {
  day?: string;
  time?: string;
  timezone?: string;
  string?: string;
}

interface Aired {
  from?: string;
  to?: string;
  prop: Prop;
  string: string;
}

interface Prop {
  from: From;
  to: From;
}

interface From {
  day?: number;
  month?: number;
  year?: number;
}

interface Trailer {
  youtube_id?: string;
  url?: string;
  embed_url?: string;
  images: Images2;
}

interface Images2 {
  image_url?: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}

interface Images {
  jpg: Jpg;
  webp: Jpg;
}

interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: Items;
}

interface Items {
  count: number;
  total: number;
  per_page: number;
}
