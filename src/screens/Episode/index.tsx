import { type IEpisodeCompleteType } from '@domain/episodes/type';
import { type ITemplateEpisodeProps, TemplateEpisode } from './template';
import { type RouteProp, useRoute, useNavigation, CommonActions } from '@react-navigation/native';
import { useGlobalContext } from '@context/global';

type ParamList = {
  Detail: IEpisodeCompleteType;
};

enum FlowType {
  NEXT,
  PREVIOUSLY,
}

export const Episode = () => {
  const {
    params: { number, title, uri },
  } = useRoute<RouteProp<ParamList, 'Detail'>>();
  const { episodes, addWatchedEpisode } = useGlobalContext();
  const navigation = useNavigation();
  const currentEpisode = parseInt(number) - 1;

  const handleFlow = (flow: FlowType) => {
    let nextEpisode;

    if (flow === FlowType.NEXT) {
      nextEpisode = episodes[currentEpisode + 1];
    }

    if (flow === FlowType.PREVIOUSLY) {
      nextEpisode = episodes[currentEpisode - 1];
    }
    navigation.dispatch(CommonActions.navigate({ name: 'Episode', params: { ...nextEpisode } }));
  };

  const episodeIsFinished = () => {
    void addWatchedEpisode(currentEpisode);
  };

  const props: ITemplateEpisodeProps = {
    title,
    indexEpisode: currentEpisode,
    videoInfo: {
      url: uri,
      volume: 0.5,
      episodeIsFinished,
    },
    onPreviously: () => handleFlow(FlowType.PREVIOUSLY),
    onNext: () => handleFlow(FlowType.NEXT),
  };
  return <TemplateEpisode {...props} />;
};
