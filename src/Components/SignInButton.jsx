import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../Config";

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <div className='loginButton'>
            <button onClick={() => handleLogin(instance)}>Sign in </button>
        </div>
        
    );
}