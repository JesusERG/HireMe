import type { NativeStackScreenProps } from '@react-navigation/native-stack';

//------------------------------Navigation------------------------------
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  Feed: { sort: 'latest' | 'top' } | undefined;
  Profile: { userId: string };
  TabNavFeed: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

//------------------------------Forms------------------------------
export type FormDataLogin = {
  email: string;
  password: string;
};

//------------------------------APIs------------------------------

//------------------------------Github------------------------------

export interface UserActivity {
  id: string;
  type: string;
  actor: Actor;
  repo: Repo;
  payload: Payload;
  public: boolean;
  created_at: Date;
}

export interface Actor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface Payload {
  repository_id: number;
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: Commit[];
}

export interface Commit {
  sha: string;
  author: Author;
  message: string;
  distinct: boolean;
  url: string;
}

export interface Author {
  email: string;
  name: string;
}

export interface Repo {
  id: number;
  name: string;
  url: string;
}
