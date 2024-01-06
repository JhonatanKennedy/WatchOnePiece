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

// vai começar com o ultimo assistido
// vai ter um scroll pro lado dos ultimos assistido
// vai ter busca
// vai ter pagina de progresso junto com os arcos
// tentar salvar onde o video parou
// pagina para o episodio vai ter próximo e anterior
// próximo e anterior de acordo com filers ou nao
// fazer funções para separar os arcos
