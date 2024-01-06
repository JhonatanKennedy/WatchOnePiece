import { StatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import { Routes } from '@routes/index';
import { GlobalContextProvider } from '@context/global';

export default function App(): JSX.Element {
  return (
    <>
      <GlobalContextProvider>
        <StatusBar style="auto" />
        <Routes />
      </GlobalContextProvider>
    </>
  );
}

registerRootComponent(App);
