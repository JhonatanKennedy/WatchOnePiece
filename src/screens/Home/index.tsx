import { useEffect, useState } from 'react';
import { type ITemplateHomeProps, TemplateHome } from './template';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EpisodesJSON from '../../resources/episodes.json';

export const Home = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleAddEpisodesList = async () => {
    try {
      const storedData = await AsyncStorage.getItem('episodes');

      if (!storedData) {
        await AsyncStorage.setItem('episodes', JSON.stringify(EpisodesJSON));
      }
    } catch (err) {
      console.error('Erro ao carregar os dados:', err);
    }
  };

  useEffect(() => {
    void handleAddEpisodesList();
  }, []);

  const propsTemplate: ITemplateHomeProps = {
    searchValue: searchText,
    onChange: (value) => setSearchText(value),
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
