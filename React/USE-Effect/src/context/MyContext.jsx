import { createContext, useState } from "react";
export const Store = createContext()


export function StrProvide({ children }) {

    const [value, setValue] = useState(0)
    return <Store.Provider value={{ value, setValue }}>{children}</Store.Provider>
}