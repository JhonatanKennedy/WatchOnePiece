import { Button } from '@components/Button';
import { type IVideoPlayerProps, VideoPlayer } from '@components/VideoPlayer';
import { texts } from '@resources/texts';
import { colors } from '@styles/paletteColors';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { episode } = texts;

export type ITemplateEpisodeProps = {
  title: string;
  indexEpisode: number;
  videoInfo: IVideoPlayerProps;
  onPreviously: () => void;
  onNext: () => void;
};

export const TemplateEpisode = (props: ITemplateEpisodeProps) => {
  const videoInfo = props.videoInfo;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleLabel}>{props.title}</Text>
      <View style={styles.videoContainer}>
        <VideoPlayer {...videoInfo} />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={props.onPreviously} disabled={props.indexEpisode === 0}>
          {episode.previouslyButton}
        </Button>
        <Button onPress={props.onNext}>{episode.nextButton}</Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    gap: 12,
    alignItems: 'center',
  },
  titleLabel: {
    fontSize: 16,
    color: colors.text.primary,
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '75%',
  },
});
