import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3"
import { LoginPage } from "./LogiPage"

export const Login = () => {
    return(
        <>
        <GoogleReCaptchaProvider reCaptchaKey="6Ldn6DoiAAAAAIT6s3s_J4c-5iQgTBDxAVAVG7wj">
             <LoginPage/>
        </GoogleReCaptchaProvider>
        
        </>
    )
}