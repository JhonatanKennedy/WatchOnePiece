import { Routes } from './src/Routes';
import { registerRootComponent } from 'expo';

export default function App(): JSX.Element {
  return <Routes />;
}

registerRootComponent(App);
