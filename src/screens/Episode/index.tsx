import { type ITemplateEpisodeProps, TemplateEpisode } from './template';

export const Episode = () => {
  const props: ITemplateEpisodeProps = {
    title: '902 - O Yokozuna aparece. O-Kiku na mira do imbatível Urashima',
    videoInfo: {
      url: 'https://hd2.animesdigital.org/animes/o/one-piece/902.mp4',
      volume: 0.5,
    },
    onPreviously: () => console.log('previosly'),
    onNext: () => console.log('next'),
  };
  return <TemplateEpisode {...props} />;
};
