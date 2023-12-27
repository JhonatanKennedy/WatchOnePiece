import { VideoPlayer } from '@components/VideoPlayer';
import { View } from 'react-native';

export const Episode = () => {
  return (
    <View>
      <VideoPlayer url="https://lightspeedst.net/s2/mp4/one-piece/sd/820.mp4" volume={0.5} />
    </View>
  );
};
