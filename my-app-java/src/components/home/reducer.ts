import { UserState } from "./types";


const initialState : UserState= {
    list: [ ],
    loading: false
}

export const userReducer = (state = initialState, action: any) : UserState => {
    console.log("useraction", action);
    switch(action.type){
        case "GET_LIST_USER":
        return{
            ...state, 
            loading: true
        }
        case "GET_LIST_USER_SUCCESS":
        return{
            ...state, 
            loading: false, 
            list: action.payload
        }
    }
    return state;
}