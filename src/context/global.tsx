import { MainEpisodes } from '@domain/episodes/main';
import { type IEpisodeCompleteType } from '@domain/episodes/type';
import { createContext, useContext, useEffect, useState } from 'react';

type IGlobalContextType = {
  watchedEpisodes: number[];
  addWatchedEpisode: () => void;
  episodes: IEpisodeCompleteType[];
  searchEpisode: (value: string) => void;
  nextEpisodes: IEpisodeCompleteType[];
};

type IGlobalContextProviderProps = {
  children: React.ReactNode;
};

const GlobalContext = createContext<IGlobalContextType>({} as IGlobalContextType);

const GlobalContextProvider = ({ children }: IGlobalContextProviderProps) => {
  const [episodes, setEpisodes] = useState<IEpisodeCompleteType[]>([]);
  const [watchedEpisodes, setWatchedEpisodes] = useState<number[]>([]);
  const [nextEpisodes, setNextEpisodes] = useState<IEpisodeCompleteType[]>([]);
  const [mainEpisodes] = useState(new MainEpisodes());

  const addWatchedEpisode = () => {
    return null;
  };

  const searchEpisode = (value: string) => {
    if (value.length < 3) {
      setEpisodes(mainEpisodes.episodes);
      return;
    }

    const regex = new RegExp(value, 'i');

    if (!Number.isNaN(value)) {
      setEpisodes([episodes[parseInt(value) - 1]]);
      return;
    }

    if (episodes.length !== 0) {
      setEpisodes(episodes.filter((episode: IEpisodeCompleteType) => regex.test(episode.title)));
    }
  };

  const getWatchedEpisodes = async () => {
    const watchedEpisodes = await mainEpisodes.getWatchedEpisodes();
    if (watchedEpisodes.length !== 0) {
      const lastWatchedEpisode = watchedEpisodes[watchedEpisodes.length - 1];
      setNextEpisodes(episodes.slice(lastWatchedEpisode, lastWatchedEpisode + 5));
    }
    setNextEpisodes(episodes.slice(0, 5));
    setWatchedEpisodes(watchedEpisodes);
  };

  useEffect(() => {
    void mainEpisodes.loadingDataOnPhone();
    mainEpisodes.listAllCanonical();
    setEpisodes(mainEpisodes.episodes);
    void getWatchedEpisodes();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ addWatchedEpisode, episodes, searchEpisode, watchedEpisodes, nextEpisodes }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
