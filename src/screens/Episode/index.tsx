import { type IEpisodeCompleteType } from '@domain/episodes/type';
import { type ITemplateEpisodeProps, TemplateEpisode } from './template';
import { type RouteProp, useRoute } from '@react-navigation/native';

type ParamList = {
  Detail: IEpisodeCompleteType;
};

export const Episode = () => {
  const { params } = useRoute<RouteProp<ParamList, 'Detail'>>();

  const props: ITemplateEpisodeProps = {
    title: params.title,
    videoInfo: {
      url: params.uri,
      volume: 0.5,
    },
    onPreviously: () => console.log('previosly'),
    onNext: () => console.log('next'),
  };
  return <TemplateEpisode {...props} />;
};
