import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  ui: {
  isMobileMenuOpen: false,
    isDarkMode: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MOBILE_MENU':
      return {
        ...state,
        ui: {
          ...state.ui,
          isMobileMenuOpen: !state.ui.isMobileMenuOpen
        }
      };
    case 'CLOSE_MOBILE_MENU':
      return {
        ...state,
        ui: {
          ...state.ui,
          isMobileMenuOpen: false
        }
      };
    case 'TOGGLE_DARK_MODE':
      return {
        ...state,
        ui: {
          ...state.ui,
          isDarkMode: action.payload
        }
      };
    default:
      return state;
  }
};

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store; 