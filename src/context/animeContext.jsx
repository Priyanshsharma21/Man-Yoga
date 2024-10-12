import { createContext, useContext, useState } from 'react';

const AnimeContext = createContext()

export const AnimeProvider = ({children})=>{
    const [pathName, setPathName] = useState("/");

    return (
        <AnimeContext.Provider value={{ pathName, setPathName }}>
          {children}
        </AnimeContext.Provider>
      );
}

export const useAnimeContext = () => useContext(AnimeContext);
