import { createContext, useReducer } from "react";
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // {
    //     _id: "6400bfd25cef6983fa4c7449",
    //     username: "Mayank2",
    //     email: "mayank2@gmail.com",
    //     password: "$2b$10$5I087kgzSXZA.Eclrs2E2.eoOaHOczxUxFvWLUPaTfOz4UNHtxaKa",
    //     profilePicture: "",
    //     coverPicture: "",
    //     followers: [],
    //     following: [],
    //     isAdmin: false,
    //   },
    isFecthing: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(AuthReducer,INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFecthing: state.isFecthing,
            error: state.error,
            dispatch,
        }}>
            {children}
        </AuthContext.Provider>
    )
}