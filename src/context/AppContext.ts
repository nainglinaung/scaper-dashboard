import { createContext } from "react";

export interface TaskContextProps {
    handleLogin: any
    logout: any
    handleRegister: any
    uploadFile: any
    loadData:any
}
export const AppContext = createContext<TaskContextProps>({} as TaskContextProps);