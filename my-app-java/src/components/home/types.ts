export interface UserItem{
    id: number,
    age: number,
    email: string,
    phone: string,
    image: string,
    password: string
}

export interface UserState{
    list: Array<UserItem>
}