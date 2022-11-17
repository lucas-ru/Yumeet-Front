import axios from "axios";
import { createContext, useState, useEffect } from "react";

const initialState = {
    authenticated: false,
    user: null,
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({children}) => {
    const [state, setState] = useState(initialState);

    const login = (user, password ) => {
        return new Promise((resolve) => {
            axios.post(`http://localhost:1337/api/auth/local`, {identifier: user, password})
                .then(res => {
                    console.log(res.data);
                    setState({
                        authenticated: true,
                        user: res.data.user,
                    });
                    resolve({success: true});
                }).catch(err => {
                    resolve({success: false, error: "Mauvais utilisateur ou mot de passe"});
                })
        });
    };
    
    const logout = () => {
        setState({
            authenticated: false,
            user: null,
        });
        return Promise.resolve(true);
    };
    
    const checkAuth = () => {
        setState({
            authenticated: false,
            user: null,
        });
        return Promise.resolve(false);
    }

    useEffect(() => {
        checkAuth()
    }, [])

    let providerValue = {
        authValue: state,
        login,
        logout,
    }

    return(
        <AuthContext.Provider value={providerValue} >
            {children}
        </AuthContext.Provider>
    )
}