import { useState } from 'react';
import { type ITemplateHomeProps, TemplateHome } from './template';

export const Home = () => {
  const [searchText, setSearchText] = useState<string>('');

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
