import { UserCredential } from './types';
import { useLocalStorage } from '@shared/hooks';

export const useAuth = () => {
  const [viewer, setViewer] = useLocalStorage<UserCredential | null>(
    'viewer',
    null,
  );
  const isAuth = !!viewer;

  const login = (credential: UserCredential) => {
    setViewer(credential);
  };

  const logout = () => {
    setViewer(null);
  };

  return { isAuth, login, logout };
};
