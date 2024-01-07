import { MainEpisodes } from '@domain/episodes/main';
import { type IEpisodeCompleteType } from '@domain/episodes/type';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';

type IGlobalContextType = {
  watchedEpisodes: number[];
  addWatchedEpisode: (episodeIndex: number) => Promise<void>;
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

  const searchEpisode = (value: string) => {
    if (value.length < 3) {
      setEpisodes(mainEpisodes.episodes);
      return;
    }

    if (!Number.isNaN(value)) {
      const episodeNumbered = episodes.find((episode) => episode.number === value);
      if (episodeNumbered) {
        setEpisodes([episodeNumbered]);
        return;
      }
      setEpisodes([]);
      return;
    }

    const regex = new RegExp(value, 'i');
    if (episodes.length !== 0) {
      setEpisodes(episodes.filter((episode: IEpisodeCompleteType) => regex.test(episode.title)));
    }
  };

  const getWatchedEpisodes = useCallback(async () => {
    // adcionar loading depois
    const watchedList = await mainEpisodes.getWatchedEpisodes();
    if (watchedList.length !== 0) {
      const lastWatchedEpisode = watchedList[watchedList.length - 1];
      setNextEpisodes(episodes.slice(lastWatchedEpisode + 1, lastWatchedEpisode + 5));
      setWatchedEpisodes(watchedEpisodes);
      return;
    }
    setNextEpisodes(episodes.slice(0, 5));
    setWatchedEpisodes(watchedEpisodes);
  }, [episodes, watchedEpisodes]);

  const addWatchedEpisode = async (episodeIndex: number) => {
    if (watchedEpisodes.includes(episodeIndex)) {
      return;
    }

    const newListWatched = [...watchedEpisodes, episodeIndex].sort((a, b) => a - b);
    setWatchedEpisodes(newListWatched);
    await mainEpisodes.setWatchedEpisode(newListWatched);
  };

  useEffect(() => {
    void mainEpisodes.loadingDataOnPhone();
    mainEpisodes.listAllCanonical();
    setEpisodes(mainEpisodes.episodes);
  }, []);

  useEffect(() => {
    void getWatchedEpisodes();
  }, [getWatchedEpisodes]);

  return (
    <GlobalContext.Provider
      value={{
        episodes,
        searchEpisode,
        watchedEpisodes,
        nextEpisodes,
        addWatchedEpisode,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { useGlobalContext, GlobalContextProvider };
