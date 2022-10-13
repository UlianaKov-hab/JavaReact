import classNames from "classnames";
import { Form, FormikProvider, useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import http_common from "../../../http_common";
import { IProductImageSave } from "./types";
import { ICreatorProduct } from "./types";



const initialValues: ICreatorProduct = { 
  name: "", 
  price: 0,
  description: ""  
};

export const ProductCreatePage = () => {
    const navigate = useNavigate();
    const[images, setImages] = useState<Array<IProductImageSave>>([]);
    const handleSelectImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length) {
            let listImg: Array<IProductImageSave> = [];
            for(let i=0; i<files.length; i++)
            {
                console.log("files length ", files.length)
                const file = files[i];
                var formData = new FormData();
                formData.append("productimage", file);
                
                const response = await http_common.post<IProductImageSave>("api/products/upload", formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                    }
                });
                

                //const url = URL.createObjectURL(file);   
                listImg.push(response.data);                  
            }
            setImages([...images, ...listImg]);
         // const file = files[0];
        //   if (/^image\/\w+/.test(file.type)) {
        //     const fileType = file.type;
        //     if (fileType === "image/png") setUploadedImageType(file.type);
        //     else setUploadedImageType("image/jpeg");
        //     const url = URL.createObjectURL(file);
        //     await toggleModal();
        //     await setImage(url);
        //     cropperObj?.replace(url);
    
        //   } else {
        //     alert("Оберіть файл зображення");
        //   }
          e.target.value="";
        }
      };

      const onHandleSubmit = async (values: ICreatorProduct) =>{


      }

      const listImages = images.map((item) =>(
        <img className="box" key = {item.id} src={"http://localhost:8080/files/"+item.fileName} width="100" draggable="true"/>    
    ));

    const formik = useFormik({
      initialValues: initialValues, 
      // validationSchema: RegisterSchema,            
      onSubmit: onHandleSubmit
  })

  const { errors, touched, handleSubmit, handleChange, isValid, dirty, setFieldValue} = formik;

    return (
        <>
        <div className="row">
          <div className="offset-md-3 col-md-6">
            <h1>Додати продукт</h1>
            <FormikProvider value={formik} >
              <Form onSubmit={handleSubmit}>                
                <div className="mb-3 " style={{cursor:"grab"}}  >
                  {listImages}
                  <label htmlFor="files">                    
                    Оберіть фото                                  
                  </label>
                  <input type="file" multiple accept="imageg/jpeg, image/png, image/jpg"
                  style={{display:"none"}}
                  id="files" name="files"                  
                   onChange={handleSelectImage}/>
                </div>
            
                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text" style={{width:"140px"}}>Назва продукта</span>
                    <input type="text" 
                      className= { classNames("form-control",
                       {"is-invalid": touched.name && errors.name},
                       {"is-valid": touched.name && !errors.name}
                      )}
                      id="name"
                      name="name"
                     onChange={handleChange}
                    />
                    {touched.name && errors.name && <div className="invalid-feedback">{errors.name}</div>}
                  </div>                
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text" style={{width:"140px"}}>Ціна</span>
                    <input type="number" 
                     className= { classNames("form-control",
                      {"is-invalid": touched.price && errors.price},
                      {"is-valid": touched.price && !errors.price}
                      )}
                      id="age"
                      name="age"
                      onChange={handleChange}
                    />
                  </div>                  
                  {touched.price && errors.price && <div className="invalid-feedback">{errors.price}</div>}
                </div>

                <div className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text" style={{width:"140px"}}>Короткий опис</span>
                    <textarea className= { classNames("form-control",
                      {"is-invalid": touched.description && errors.description},
                      {"is-valid": touched.description && !errors.description}
                  )} aria-label="With textarea"
                    id="description"
                    name="description"
                    onChange={handleChange}></textarea>
                  </div>                  
                  {touched.description && errors.description && <div className="invalid-feedback">{errors.description}</div>}
                </div>
                <button type="submit" className="btn btn-primary" disabled={!(isValid)}>               
                Додати
                </button>  
              </Form>              
            </FormikProvider>

          </div>
        </div>
            
            
        </>
    );
}