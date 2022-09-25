import { AuthAction, AuthActionTypes, AuthState } from "./types";

const initialState: AuthState = {
    user: undefined,
    isAuth: false,
    loading: false
}

export const authLoginReducer = (state = initialState, action: AuthAction) : AuthState =>
{
    switch(action.type)
    {
        case AuthActionTypes.LOGIN_AUTH:
            return{
                ...state,
                isAuth: false,
                loading: true
            };

        case AuthActionTypes.LOGIN_AUTH_SUCCESS:
            return {
                ... state,
                isAuth: true,
                loading: false,
                user: {...action.payload}
            };
        case AuthActionTypes.RESET_AUTH_USER:              
            return  state=initialState
            
    }
    return state;
}