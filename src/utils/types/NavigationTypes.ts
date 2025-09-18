import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
  Splash: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Feed'>;
