import classNames from "classnames";
import { Form, FormikProvider, useFormik } from "formik";
import { CropperDialog } from "../common/cropperDialog";
import { ICreateProduct } from "./types";

const initialValues: ICreateProduct = { 
    
    image: "",
    price: 0,
    description: "",
    
};
export const CreateProductPage = () => {
    const onHandleSubmit = async (values: ICreateProduct) =>{
        console.log("submit form", values);   
    }

    const formik = useFormik({
        initialValues: initialValues,             
        onSubmit: onHandleSubmit
    })
    const { errors, touched, handleSubmit, handleChange, isValid, dirty, setFieldValue} = formik;
    return(
        <>
        <div className="row">    
        <div className="offset-md-3 col-md-6">
        <h1>Create User</h1>   
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
              <label htmlFor="price" className="form-label">
                Ціна
              </label>
              <input type="text" 
                  className= { classNames("form-control",
                      {"is-invalid": touched.price && errors.price},
                      {"is-valid": touched.price && !errors.price}
                  )}
                  id="price"
                  name="price"
                  onChange={handleChange}
                  />
                  {touched.price && errors.price && <div className="invalid-feedback">{errors.price}</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                     Детальна інформація
                </label>
                <input type="description" 
                    className= { classNames("form-control",
                    {"is-invalid": touched.description && errors.description},
                    {"is-valid": touched.description && !errors.description}
                    )}
                id="description"
                name="description"
                onChange={handleChange}
                />
                {touched.description && errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
            <button type="submit" className="btn btn-primary" >
              Create
            </button>
                </Form>

            </FormikProvider>
        

        </div>

    </div>
        
        
        
        </>
    )

};