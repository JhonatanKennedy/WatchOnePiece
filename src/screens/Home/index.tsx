import { useEffect, useState } from 'react';
import { type ITemplateHomeProps, TemplateHome } from './template';
import { type IEpisodeUnwatched } from '@domain/episodes/type';
import { MainEpisodes } from '@domain/episodes/main';
import { useNavigation } from '@react-navigation/native';

export const Home = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState<string>('');
  const [mainEpisodes] = useState(new MainEpisodes());
  const [canonicalEpisodes, setCanonicalEpisodes] = useState<IEpisodeUnwatched[]>([]);

  useEffect(() => {
    void mainEpisodes.loadingDataOnPhone();
  }, []);

  useEffect(() => {
    setCanonicalEpisodes(mainEpisodes.listAllCanonical());
  }, []);

  const goToEpisode = (episode: IEpisodeUnwatched) => {
    // resolver esse erro depois
    navigation.navigate('Episode', { ...episode });
  };

  const propsTemplate: ITemplateHomeProps = {
    searchValue: searchText,
    onChange: (value) => setSearchText(value),
    allEpisodes: canonicalEpisodes,
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
