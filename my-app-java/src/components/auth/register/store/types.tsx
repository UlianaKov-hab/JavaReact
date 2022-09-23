export enum AuthActionTypes{
    REGISTER_AUTH = "REGISTER_AUTH",
    REGISTER_AUTH_SUCCESS = "REGISTER_AUTH_SUCCESS"
}

export interface IUserRegister{
    email:string,
    phone: string,
    image: string,
    password: string,
    age: number
}

export interface AuthState {
    user?: IUserRegister,
    isAuth: boolean
}

