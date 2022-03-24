import Axios from "axios";
import { createContext, useState, useEffect } from "react";

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

export {UserConProvider};