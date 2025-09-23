import type { NativeStackScreenProps } from '@react-navigation/native-stack';

//------------------------------Navigation------------------------------
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  Feed: { sort: 'latest' | 'top' } | undefined;
  Profile: { userId: string };
};

export type Props = NativeStackScreenProps<RootStackParamList>;

//------------------------------Forms------------------------------
export type FormDataLogin = {
  email: string;
  password: string;
};
