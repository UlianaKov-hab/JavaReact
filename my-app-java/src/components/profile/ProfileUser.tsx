import * as React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import http from "../../http_common";
import { useNavigate } from "react-router-dom";


export const UserProfilePage = () => {    
    const navigator = useNavigate();
    const { user } = useTypedSelector((store)=>store.login);
    const {list, loading} =  useTypedSelector(store=>store.user);
    const url = http.defaults.baseURL;
    const currentUser = list.find(u =>u.email==user?.email);
    


    return(
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={url+"files/1200_"+currentUser?.image} style={{borderRadius: "1%", width: "100%", height:"100%" }}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{currentUser?.email}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Возраст: {currentUser?.age}</li>
                            <li className="list-group-item">Телефон: {currentUser?.phone}</li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}