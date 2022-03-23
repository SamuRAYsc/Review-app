import Axios from "axios";
import { createContext, useState, useContext, useEffect } from "react";

export const UserContext = createContext();

function UserConProvider(props) {
    const [user, setUser] = useState();
    useEffect(() => {
        Axios.get("http://localhost:8080/user",{ withCredentials:true}).then(res =>{
            setUser(res.data)
        })
    },[])

    return <UserContext.Provider value={user} {...props}/>
}

// function useUserCon() {
//     const context = useContext(UserContext)
//     //if(!context) throw new Error('Not inside the Provider');
//     return context;
// }

export {UserConProvider};