import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

function UserConProvider(props) {
    const [user, setUser] = useState();
    useEffect(() => {
        axios.get("https://review-api-2022.herokuapp.com/user",
        { withCredentials:true}
        ).then(res =>{
            setUser(res.data);
        })
    },[])

    return <UserContext.Provider value={user} {...props}/>
}

export {UserConProvider};