import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type rootReducer from '../redux/root-reducer';

import { useNavigate } from 'react-router-dom';

export function useAuthRedirect() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: ReturnType<typeof rootReducer>) => state.userReducer);

  useEffect(() => {
    if (!currentUser) {
      navigate('/'); // Redireciona para a home se não estiver logado
    }
  }, [currentUser, navigate]);
}
