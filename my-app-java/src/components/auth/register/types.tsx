import { AuthActionTypes } from "../register/store/types"

export interface IRegister{    
    email: string,
    phone: string,
    photo: string,
    age: number,
    password: string,
    confirmPassword: string
}

export interface IRegisterRequest extends IRegister {
    RecaptchaToken: string
}

export interface RegisterSuccessAction {
    type: AuthActionTypes.REGISTER_SUCCESS,
    payload: string
}