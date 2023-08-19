import { useState, createContext, useContext, ReactNode, useEffect } from 'react'
import { LoginPayload } from '../core/domains/user';
import { userService } from '../core/factories/user.factory';


interface UserContextType {
  user: LoginPayload | null;
  setUser: (user: LoginPayload | null) => void;
  isLoggedIn: () => Promise<boolean>;
}

const UserContext = createContext<UserContextType>({} as UserContextType);

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsers must be used within a UserProvider')
  }
  return context;
}

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const initialUserState = () => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  };
  const [user, setUserState] = useState<LoginPayload | null>(initialUserState);

  const setUser = (newUser: LoginPayload | null) => {
    if (newUser) {
      localStorage.setItem('user', JSON.stringify(newUser));
    } else {
      localStorage.removeItem('user');
    }
    setUserState(newUser);
  };
  const isLoggedIn = async (): Promise<boolean> => {
    const token = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string).token : null;

    if (token) {
      return await userService.auth(token);
    }

    return false;
  };
  useEffect(() => {
    const syncLogout = (event: StorageEvent) => {
      if (event.key === 'user' && !event.newValue) {
        setUserState(null);
      }
    };
    window.addEventListener('storage', syncLogout);
    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}