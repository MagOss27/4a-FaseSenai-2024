import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {

    // informações globais
    let usuarioLogado = '🟢Elon Musk - Online'

    const [usuarios, setUsuarios] = useState([
        {
            id: Date.now(),
            nome: 'Magnus',
            email: 'MagnusOss98@gmail.com'
        },
        {
            id: Date.now() + 1,
            nome: 'FePoet',
            email: 'FePoet20.06@gmail.com'
        },
        {
            id: Date.now() + 2,
            nome: 'Odim',
            email: 'Odim@gmail.com'
        },
    ])

    // informações globais
    return (
        <GlobalContext.Provider value={{ usuarioLogado, usuarios, setUsuarios }}>
            {children}
        </GlobalContext.Provider>
    )
}