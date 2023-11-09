import { create } from 'zustand';
import { jwtDecode } from "jwt-decode";

const useAuthStore = create((set) => ({
  user: localStorage.getItem('authToken') ? jwtDecode(localStorage.getItem('authToken')) : null,
  token: localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null,

  login: (user, token) => {
    set({ user, token });
    localStorage.setItem('authToken', JSON.stringify(token));
  },
  logOut: () => {
    set({ user: null, token: null });
    localStorage.removeItem('authToken');
  },
}));

export default useAuthStore;
