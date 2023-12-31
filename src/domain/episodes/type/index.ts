import { type ImageSourcePropType } from 'react-native';

export type IEpisodeType = {
  number: string;
  title: string;
  uri: string;
};

export type IEpisodeUnwatched = IEpisodeType & {
  image: ImageSourcePropType;
};

export type IArcType = {
  id: string;
  title: string;
  image: ImageSourcePropType;
  episodes: number[];
  filers: number[];
};
