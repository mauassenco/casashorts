import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import type rootReducer from '../../redux/root-reducer';

export default function PrivateRoute() {
  const { currentUser } = useSelector((state: ReturnType<typeof rootReducer>) => state.userReducer);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
}
