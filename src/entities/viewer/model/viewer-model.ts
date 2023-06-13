import { UserCredential } from './types';
import { useLocalStorage } from '@shared/hooks';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';
import { logoutResource } from '@shared/api/auth/resources';

export const useAuth = () => {
  const navigate = useNavigate();
  const [viewer, setViewer] = useLocalStorage<UserCredential | null>(
    'viewer',
    null,
  );
  const isAuth = !!viewer;

  const login = (credential: UserCredential) => {
    setViewer(credential);
    navigate('/');
  };

  const logout = async () => {
    console.log('==========>1', 1);
    setViewer(null);
    console.log('==========>2', 2);
    googleLogout();
    console.log('==========>3', 3);
    await logoutResource(viewer.id);
    console.log('==========>4', 4);
  };

  return { isAuth, login, logout, viewer };
};
