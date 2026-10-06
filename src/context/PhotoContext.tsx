import React, { createContext, useContext, useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PhotoContextType {
  photoUrl: string;
  setCustomPhoto: (file: File) => void;
  resetPhoto: () => void;
  isCustom: boolean;
}

const PhotoContext = createContext<PhotoContextType>({
  photoUrl: PORTFOLIO_DATA.profile.headshotUrl,
  setCustomPhoto: () => {},
  resetPhoto: () => {},
  isCustom: false,
});

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    const saved = localStorage.getItem('olumide_headshot_exact');
    return saved || PORTFOLIO_DATA.profile.headshotUrl;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    return Boolean(localStorage.getItem('olumide_headshot_exact'));
  });

  const setCustomPhoto = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        localStorage.setItem('olumide_headshot_exact', result);
        setPhotoUrl(result);
        setIsCustom(true);
      }
    };
    reader.readAsDataURL(file);
  };

  const resetPhoto = () => {
    localStorage.removeItem('olumide_headshot_exact');
    setPhotoUrl(PORTFOLIO_DATA.profile.headshotUrl);
    setIsCustom(false);
  };

  return (
    <PhotoContext.Provider value={{ photoUrl, setCustomPhoto, resetPhoto, isCustom }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = () => useContext(PhotoContext);
