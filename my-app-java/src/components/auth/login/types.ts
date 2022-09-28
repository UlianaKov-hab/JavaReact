export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGIN_AUTH_SUCCESS = "LOGIN_AUTH_SUCCESS",
    RESET_AUTH_USER = "RESET_AUTH_USER"
};

export interface ILogin {
    email: string,
    password: string
}

export interface ILoginRequest extends ILogin { //до нашого запиту додаємо токен
    recaptchaToken?: string
}

export interface ILoginResponse {
    token: string
}

export interface IUser {
    email: string,
    image: string,
    exp: Date | null
}

export interface AuthState {
    user?: IUser | undefined,
    isAuth: boolean,
    loading: boolean
}


export interface LoginAuthAction {
    type: AuthActionTypes.LOGIN_AUTH
}

export interface LoginAuthSuccessAction {
    type: AuthActionTypes.LOGIN_AUTH_SUCCESS,
    payload: IUser
}

export interface ResetAction {
    type: AuthActionTypes.RESET_AUTH_USER
}

export type AuthAction = LoginAuthAction | LoginAuthSuccessAction | ResetAction;