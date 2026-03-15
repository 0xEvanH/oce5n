export type DivisionId = 'fortnite' | 'valorant';
export type Platform   = 'twitter' | 'instagram' | 'twitch' | 'youtube';

export interface Player {
  name: string;
  role: string;
  country: string;
  img: string;
}

export interface Division {
  color: string;
  label: string;
  tag: string;
  players: Player[];
}

export interface Divisions {
  fortnite: Division;
  valorant: Division;
}

export interface FormState {
  name: string;
  email: string;
  division: string;
  message: string;
}

export interface SocialPost {
  platform: Platform;
  handle: string;
  time: string;
  content: string;
  img?: string;
  likes: string;
  comments: string;
  tag: string;
}

export interface BubbleDef {
  size: number;
  left: string;
  delay: string;
  dur: string;
}

export interface Tweet {
  id: string;
  content: string;
  date: string;
  url: string;
  imgUrl?: string;
}