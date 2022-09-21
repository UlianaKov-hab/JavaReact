
import { combineReducers } from "redux";
import { authLoginReducer } from "../components/auth/login/reducer";
import { authReducer } from "../components/auth/register/store/reducer";
import { userReducer } from "../components/home/reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    login: authLoginReducer
});

export type RootState = ReturnType<typeof rootReducer>;