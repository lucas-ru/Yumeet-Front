import { createContext, useState } from "react";

const initialState = {
    isLoading: false,
}

export const AppContext = createContext(initialState)

export const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);


    let providerValue = {
        isLoading, setIsLoading
    }

    return(
        <AppContext.Provider value={providerValue} >
            {
                isLoading ? (
                    <h1>Loading...</h1>
                ) : children
            }
        </AppContext.Provider>
    )
}