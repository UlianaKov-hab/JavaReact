import * as yup from "yup";
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const RegisterSchema = yup.object({
     
    email: yup
        .string()
        .email("Вкажіть праивльно пошту")
        .required("Пошта є обов'язкови полeм"),   
    phone: yup
        .string() 
        .min(10, "Не достатньо цифр")
        .max(10, "Забагато цифр")      
        .matches(phoneRegExp, 'Номер телефона не вірний'),
    age: yup
        .number() 
        .required("Вік є обов'язкови полeм")
        .min(18, "Вік не повинен бути менше ніж 18 років")
        .max(60, "Вік не повинен бути більше 70 років "),    
    password: yup.string()
        .required()
        .min(7)
        .max(255)
        .required("Пароль є обов'язкови полeм"),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Password does not match')
        .required("Підтвердження обов'язкове"),
    image: yup.string().required("Оберіть фото"),
});



   