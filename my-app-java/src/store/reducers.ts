
import { combineReducers } from "redux";
import { userReducer } from "../components/home/reducer";

export const rootReducer = combineReducers({
    user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;