import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../store/Store';
import { useStore } from 'zustand';

const PrivateRoutes = () => {
  const { user } = useStore(useAuthStore);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
