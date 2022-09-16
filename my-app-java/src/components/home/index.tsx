import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { UserItem } from "./types";

// interface UserItem{
//     id: number,
//     age: number,
//     email: string,
//     phone: string,
//     image: string,
//     password: string
// }

export const HomePage = () => {

    const {list, loading} =  useTypedSelector(store=>store.user)//useSelector((store: any) => store.user);
    //const [isLoading, setLoading] = useState(false);
    console.log("list redux", list)
    const dispatch =  useDispatch();

    // const[users, setUsers] = useState<Array<UserItem>>([]);

    useEffect(()=>{
        console.log("Load data server");
        dispatch({
            type: "GET_LIST_USER",
            
        })
        axios.get<Array<UserItem>>("http://localhost:8080/")
        .then(resp=> {
            dispatch({
                type: "GET_LIST_USER_SUCCESS",
                payload: resp.data
            })
            //console.log("Server result", resp);
            //setUsers(resp.data);
        })

    }, [])
    console.log("users", list);

    const listUsers = list.map((item) =>(
        <tr key = {item.id}>
            <th>{item.id}</th>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.age}</td>
    
  </tr>
    ));
    

    return(    
        <>
        <div className="container">
            {loading ? (
                
                    <div className="loader-container">
                       <iframe src="https://giphy.com/embed/Pn3nDa3ce9ywIpvnmn" width="370" height="480" frameBorder="0"  allowFullScreen></iframe>
      	                {/* <div className="spinner"></div> */}
                    </div>
                ) : (  <div className="main-content">
                            <h1>Users List</h1>              
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Age</th>
                                        </tr>
                                    </thead>
                            <tbody>               
                                {listUsers}
                            </tbody>
                                 </table>
                        </div>  
                )}
            </div>
            {/* <h1>Users List</h1>    
            
            <table className="table">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {/* {loading && <tr><td colSpan={4}>Loading ...</td></tr>} */} 
                 {/* {loading && <tr><td colSpan={4}>
                    
                </td></tr>} 
                 {listUsers} */}
                {/* {loading ? (
                    <div className="loader-container">
      	                <div className="spinner"></div>
                    </div>
                ) : (
                    {listUsers}
                ) } */}
                
            {/* </tbody>
            </table> */} 
        </>
        

    );
};

