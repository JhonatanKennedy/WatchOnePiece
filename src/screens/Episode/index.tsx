import { type ITemplateEpisodeProps, TemplateEpisode } from './template';
import { useRoute } from '@react-navigation/native';

export const Episode = () => {
  // resolver esse erro nos params depois
  const { params } = useRoute();

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
