import { configureStore, Action, ThunkAction, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { RootStateType } from "./rootReducer";
import { authActionsTypes, authActions } from "templates/auth/authActions";

export type extraActionsType = authActionsTypes;

const extraActions: extraActionsType = { ...authActions };

const customizedMiddleware = getDefaultMiddleware({
    thunk: {
        extraArgument: extraActions,
    },
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [...customizedMiddleware],
});

// if (process.env.NODE_ENV === "development" && module.hot) {
//     module.hot.accept("./rootReducer", () => {
//         const newRootReducer = require("./rootReducer").default;
//         store.replaceReducer(newRootReducer);
//     });
// }

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootStateType, extraActionsType, Action<string>>;

export default store;
