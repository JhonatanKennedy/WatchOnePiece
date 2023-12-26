import { ResizeMode, Video } from 'expo-av';
import { type StyleProp, type ViewStyle } from 'react-native';

export type IVideoPlayerProps = {
  volume: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
  url: string;
  style?: StyleProp<ViewStyle>;
};

export const VideoPlayer = (props: IVideoPlayerProps) => {
  return (
    <Video
      volume={props.volume}
      source={{ uri: props.url }}
      resizeMode={ResizeMode.CONTAIN}
      style={[{ width: 300, height: 200 }, props.style]}
      useNativeControls
      isLooping
    />
  );
};
