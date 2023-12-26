import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { Routes } from '@routes/index';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar style="auto" />
      <Routes />
    </>
  );
}

registerRootComponent(App);
