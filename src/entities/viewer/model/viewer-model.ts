import { useLocalStorage } from '@shared/hooks';
import { useNavigate } from 'react-router-dom';
import { logoutResource } from '@shared/api/auth/resources';
import { UserCredential } from '@types/user-credentional';

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
	  await logoutResource();
    setViewer(null);
		window.location.href = '/';
  };

  return { isAuth, login, logout, viewer };
};
