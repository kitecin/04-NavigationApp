import {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// Define how it looks or what information will be here
export interface AuthState {
  isLoggedIn: boolean;
  // adding at the end ? makes the variable optional
  username?: string;
  favoriteIcon?: string;
}

// Initial State

export const authInitialState: AuthState = {
  isLoggedIn: false,
  // not mandatory
  username: undefined,
  favoriteIcon: undefined,
};

// We will use this to let React know how the context looks
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUsername: (username: string) => void;
}

// Create the context
export const AuthContext = createContext({} as AuthContextProps);

// Component provider of the state
export const AuthProvider = ({children}: {children: JSX.Element}) => {
  // The reducer gets a new argument and modify the values of it state
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const logout = () => {
    dispatch({type: 'logout'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        changeFavIcon,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
