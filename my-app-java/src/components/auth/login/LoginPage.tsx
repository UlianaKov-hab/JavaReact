
import classNames from "classnames";
import { Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { LoginUser, ResetUser } from "./actions";
import { ILogin, ILoginRequest } from "./types";
import { LoginSchema } from "./validation";

export const LoginPage = () => {
    const {LoginUser} = useActions();
    const [bot, setBot] = useState<boolean>(false);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const navigator = useNavigate();
   
   const initialValues: ILogin = {       
       email:"",       
       password:""
   }

   const onHandleSubmit = async (values: ILogin) =>
   {        
       try{
            if(!executeRecaptcha)
            {
                setBot(true);
                return;
            }
            const recaptchaToken = await executeRecaptcha(); //google перевіряє і видає токен            
            console.log("======Token captcha=======", recaptchaToken); //показуємо в консолі виданий нам токен
            //створюємо модель для відправки + токен
            const model : ILoginRequest = {
                ...values,
                recaptchaToken: recaptchaToken
             };            
            console.log("Submit form", values);
            await LoginUser(model);
            navigator("/");
        }catch(error){
            console.error("problem submit", error)
        }    
   }   

   

   const formik = useFormik({
       initialValues: initialValues,
       validationSchema: LoginSchema,       
       onSubmit: onHandleSubmit
   })

   const { errors, touched, handleSubmit, handleChange, isValid, dirty} = formik;

   return (
    <div className="row">
      <div className="offset-md-3 col-md-6">
        <h1 className="text-center">Вхід</h1>
        <FormikProvider value={formik}>
          <Form onSubmit={handleSubmit}>              
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Електронна адреса
              </label>
              <input type="email" 
                  className= { classNames("form-control",
                      {"is-invalid": touched.email && errors.email},
                      {"is-valid": touched.email && !errors.email}
                  )}
                  id="email"
                  name="email"
                  onChange={handleChange}
                  />
                  {touched.email && errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Пароль
              </label>
              <input type="password" 
                  className= { classNames("form-control",
                      {"is-invalid": touched.password && errors.password},
                      {"is-valid": touched.password && !errors.password}
                  )}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  />
                  {touched.password && errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={!(isValid)}>               
                Увійти
            </button>            
          </Form>
        </FormikProvider>
      </div>
    </div>
  );
        
       
}