import axios from 'axios';
import { Dispatch } from 'react';
import http from '../../../http_common';
import { AuthActionTypes } from '../register/store/types';
import { IRegister, IRegisterRequest, RegisterSuccessAction } from './types';

export const RegisterUser = (data: IRegisterRequest) => {               //метод який відправляє на сервер дані для реєстрації. приймає дані юзера та recaptchatoken
    return async (dispatch: Dispatch<RegisterSuccessAction>) =>{
        try{
            console.log("Server request")
            
            const response = await http.post("create", data);
            const token = await response.data.token;
            dispatch({
                type: AuthActionTypes.REGISTER_SUCCESS,
                payload: token,
            });
            return Promise.resolve(token);
        }catch(err: any){
            if(axios.isAxiosError(err))
            {
                
            }
            return Promise.reject();
        }
    }
}