import { createContext, useState } from "react";

const initialState = {
    showTabs: true,
}

export const RouteContext = createContext(initialState)

export const RouteProvider = ({children}) => {
    const [showTabs, setShowTabs] = useState(initialState.showTabs);

    let providerValue = {
        showTabs, setShowTabs
    }

    return(
        <RouteContext.Provider value={providerValue} >
            {children}
        </RouteContext.Provider>
    )
}