import { type ITemplateHomeProps, TemplateHome } from './template';
import { type IEpisodeCompleteType } from '@domain/episodes/type';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '@context/global';

export const Home = () => {
  const navigation = useNavigation();
  const { episodes, searchEpisode, nextEpisodes } = useGlobalContext();

  const goToEpisode = (episode: IEpisodeCompleteType) => {
    navigation.dispatch(CommonActions.navigate({ name: 'Episode', params: { ...episode } }));
  };

  const propsTemplate: ITemplateHomeProps = {
    onSearch: searchEpisode,
    allEpisodes: episodes,
    nextEpisodes,
    onChooseEpisode: goToEpisode,
  };

  return <TemplateHome {...propsTemplate} />;
};

// vai ter pagina de progresso junto com os arcos
// tentar salvar onde o video parou
// fazer funções para separar os arcos
