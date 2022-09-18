
import { combineReducers } from "redux";
import { authReducer } from "../components/auth/register/store/reducer";
import { userReducer } from "../components/home/reducer";

export const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>;