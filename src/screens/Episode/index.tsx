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
  const { episodes } = useGlobalContext();
  const navigation = useNavigation();

  const handleFlow = (flow: FlowType) => {
    let nextEpisode;

    if (flow === FlowType.NEXT) {
      nextEpisode = episodes[parseInt(number)];
    }

    if (flow === FlowType.PREVIOUSLY) {
      nextEpisode = episodes[parseInt(number) - 2];
    }
    navigation.dispatch(CommonActions.navigate({ name: 'Episode', params: { ...nextEpisode } }));
  };

  const props: ITemplateEpisodeProps = {
    title,
    indexEpisode: parseInt(number) - 1,
    videoInfo: {
      url: uri,
      volume: 0.5,
    },
    onPreviously: () => handleFlow(FlowType.PREVIOUSLY),
    onNext: () => handleFlow(FlowType.NEXT),
  };
  return <TemplateEpisode {...props} />;
};
