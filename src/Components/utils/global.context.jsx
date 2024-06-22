import React, { createContext, useReducer, useMemo, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_FAV':
      const updatedFavs = [...state.favDentists, action.payload];
      localStorage.setItem('favDentists', JSON.stringify(updatedFavs));
      return { ...state, favDentists: updatedFavs };
    case 'REMOVE_FAV':
      const filteredFavs = state.favDentists.filter(dentist => dentist.id !== action.payload);
      localStorage.setItem('favDentists', JSON.stringify(filteredFavs));
      return { ...state, favDentists: filteredFavs };
    default:
      return state;
  }
};

const initialState = {
  theme: 'light',
  dentists: [],
  favDentists: JSON.parse(localStorage.getItem('favDentists')) || [],
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getDentists = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/:id");
      if (!response.ok) {
        throw new Error("Error al obtener datos del dentista");
      }
      const data = await response.json();
      dispatch({ type: "SET_DENTISTS", payload: data });
    } catch (error) {
      console.error("Error en la obtención de datos del dentista:", error);
    }
  };

  useEffect(() => {
    getDentists();
  }, []);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};