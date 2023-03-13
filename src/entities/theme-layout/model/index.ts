import { useState, useEffect } from 'react';

type Theme = 'dark' | 'light';
type UseTheme = [theme: Theme, changeTheme: () => void];

export const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<Theme>(
    (localStorage.getItem('theme') as Theme) || 'dark',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const changeTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

  return [theme, changeTheme];
};
