import useApi from "../api/useApi";
import client from "../api/client"
import user from "../api/call/user"
import { createContext, useState, useEffect, useContext } from "react";
import { Preferences } from '@capacitor/preferences';
import { AppContext } from "./AppProvider";

const initialState = {
    authenticated: false,
    user: null,
}

export const AuthContext = createContext(initialState)

export const AuthProvider = ({children}) => {
    const [state, setState] = useState(initialState);
    const { setIsLoading } = useContext(AppContext);
    const userLogin = useApi(user.login);
    const getUser = useApi(user.getUser);

    const login = (user, password ) => {
        return new Promise((resolve) => {
            userLogin.request({identifier: user, password}).then(async data => {
                setState({
                    authenticated: true,
                    user: data.user,
                });
                client.defaults.headers.common['Authorization'] = `Bearer ${data.jwt}`;
                await Preferences.set({
                    key: 'AUTH_TOKEN',
                    value: data.jwt,
                });
                resolve({success: true})
            }).catch(err => {
                resolve({success: false, error: "Mauvais utilisateur ou mot de passe"})
            })
        });
    };
    
    const logout = async () => {
        setState({
            authenticated: false,
            user: null,
        });
        await Preferences.remove({ key: 'AUTH_TOKEN' });
        return Promise.resolve(true);
    };
    
    const checkAuth = () => {
        console.log("checkauth")
        setIsLoading(true)
        getUser.request().then(data => {
            setState({
                authenticated: true,
                user: data,
            });
        }).catch(err => {
            setState({
                authenticated: false,
                user: null,
            });
        }).finally(_ => {
            setIsLoading(false)
        })
    }

    const init = () => {
        Preferences.get({ key: 'AUTH_TOKEN' }).then(data => {
            client.defaults.headers.common['Authorization'] = `Bearer ${data.value}`;
            checkAuth()
        })
    }

    useEffect(() => {
        init()
    }, [])

    let providerValue = {
        authValue: state,
        login,
        logout
    }


    return(
        <AuthContext.Provider value={providerValue} >
            {children}
        </AuthContext.Provider>
    )
}