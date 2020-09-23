import React, { useState, createContext } from 'react';



export const LoginContext = createContext();


export const LoginProvider = (props) => {
    // let object

    // if (typeof localStorage.getItem('logged') !== undefined) {
    //     object = JSON.parse(localStorage.getItem('logged'));



    // } else {
    //     object = {
    //         status: false,
    //         firstName: "",
    //         token: ""

    //     }
    // }

    const [login, setLogin] = useState({
        status: false,
        firstName: "",
        token: ""

    });






    return (
        <LoginContext.Provider value={[login, setLogin]}>
            {props.children}
        </LoginContext.Provider>
    )
}

