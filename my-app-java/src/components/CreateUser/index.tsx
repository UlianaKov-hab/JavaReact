import axios from "axios";
import classNames from "classnames";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import http from "../../http_common";
import { CropperDialog } from "../common/cropperDialog";
import { IRegister } from "./types";
import { RegisterSchema } from './validation';

const initialValues: IRegister = { 
    email: "",
    phone: "",
    image: "",
    age: 0,
    password: "",
    //confirmPassword:""
};
export const CreateUserPage = () => {
    const navigate = useNavigate();

    const onHandleSubmit = async (values: IRegister) =>
   {
       //console.log("Send data server", values);           
       try{
        console.log("Send data server", values);         
        //const query = "http://localhost:8080/create";        
        // console.log("submit form", values);           
           const model : IRegister = {
            ...values,            
            };     
        //const response1 = await http.post(query, model);
        const result = await http.post<string>("create", model); 
        console.log("Create user result", result.data);           
                       
       }catch(error){
           console.error("problem submit", error)
          }
          navigate('/'); 
    }

    const formik = useFormik({
        initialValues: initialValues, 
        validationSchema: RegisterSchema,            
        onSubmit: onHandleSubmit
    })

    const { errors, touched, handleSubmit, handleChange, isValid, dirty, setFieldValue} = formik;


    return(    
        <> 
         
    <div className="row">    
        <div className="offset-md-3 col-md-6">
        <h1>Додати користувача</h1>   
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                <CropperDialog
                    onChanged={setFieldValue}
                    field="image"
                    error={errors.image}
                    touched={touched.image}
                    aspectRation={1/1}
                />
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
              <label htmlFor="phone" className="form-label">
                Номер телефона
              </label>
              <input type="text" 
                  className= { classNames("form-control",
                      {"is-invalid": touched.phone && errors.phone},
                      {"is-valid": touched.phone && !errors.phone}
                  )}
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  />
                  {touched.phone && errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Вік
              </label>
              <input type="number" 
                  className= { classNames("form-control",
                      {"is-invalid": touched.age && errors.age},
                      {"is-valid": touched.age && !errors.age}
                  )}
                  id="age"
                  name="age"
                  onChange={handleChange}
                  />
                  {touched.age && errors.age && <div className="invalid-feedback">{errors.age}</div>}
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
            <button type="submit" className="btn btn-primary" >
              Create
            </button>
                </Form>

            </FormikProvider>       

        </div>

    </div>
        </>
    
    );
};