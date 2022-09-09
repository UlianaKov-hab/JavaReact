import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserItem } from "./home/types";

// interface UserItem{
//     id: number,
//     age: number,
//     email: string,
//     phone: string,
//     image: string,
//     password: string
// }

export const HomePage = () => {

    const {list} =  useSelector((store: any) => store.user);
    console.log("list redux", list)

    // const[users, setUsers] = useState<Array<UserItem>>([]);

    // useEffect(()=>{
    //     console.log("Load data server");
    //     axios.get<Array<UserItem>>("http://localhost:8080/")
    //     .then(resp=> {
    //         //console.log("Server result", resp);
    //         setUsers(resp.data);
    //     })

    // }, [])
    console.log("users", list);

    const listUsers = list.map((item: any) =>(
        <tr key = {item.id}>
            <th>{item.id}</th>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.age}</td>
    
  </tr>
    ));
    

    return(    
        <>
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
        </>
        

    );
};