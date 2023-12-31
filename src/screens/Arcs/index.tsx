import { arcs } from '@resources/arcInfo';
import { type ITemplateArcsProps, TemplateArcs } from './template';

export const Arcs = () => {
  const props: ITemplateArcsProps = {
    onChange: () => null,
    searchValue: '',
    arcs,
    onSelectArc: (value) => console.log(value),
  };
  return <TemplateArcs {...props} />;
};
