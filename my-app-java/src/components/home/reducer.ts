import { UserState } from "./types";


const initialState : UserState= {
    list: [
        {
            id: 1,
            email:"eee@eee",
            image: "ssd",
            password: "133543654",
            phone: "ggg",
            age: 18

        }
    ]
}

export const userReducer = (state = initialState, action: any) : UserState => {
    
    return state;
}