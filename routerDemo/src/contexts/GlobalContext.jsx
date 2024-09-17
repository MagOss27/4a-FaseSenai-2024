import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    // informações globais
    let usuarioLogado = '🟢Elon Musk - Online'

    // informações globais
    return (
        <GlobalContext.Provider value={{usuarioLogado}}>
            {children}
        </GlobalContext.Provider>
    )
}