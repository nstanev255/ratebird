export type Title = {
  type: string;
  title: string;
};

export type Broadcast = {
  day?: string;
  time?: string;
  timezone?: string;
  string?: string;
};

export type Relation = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};

export type Anime = {
  mal_id: number;
  url?: string;
  images?: {
    jpg?: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp?: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer?: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };

  approved?: boolean;
  titles?: Array<Title>;
  type?: string;
  source?: string;
  episodes?: number;
  status?: string;
  airing?: boolean;
  aired?: {
    from?: string;
    to?: string;
  };
  duration?: string;
  rating?: string;
  score?: number;
  scored_by?: number;
  rank?: number;
  popularity?: number;
  members?: number;
  favorites?: string;
  background?: string;
  synopsis?: string;
  season?: string;
  year?: number;
  broadcast: Broadcast;
  producers: Array<Relation>;
  licensors: Array<Relation>;
  studios: Array<Relation>;
  genres: Array<Relation>;
  explicit_genres: Array<Relation>;
  themes: Array<Relation>;
  demographics: Array<Relation>;
};
