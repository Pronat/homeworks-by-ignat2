import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./Error404";
import EnterNewPassword from "./enter-new-password";
import {Login} from "./login";
import Profile from "./profile";
import Registration from "./registration";
import RestorePassword from "./restore-password";
import TestComponents from "./test-components";

export const PATH = {
    ENTER_NEW_PASSWORD: "/enter-new-password",
    LOGIN: "/login",
    PROFILE: "/profile",
    REGISTRATION: "/registration",
    RESTORE_PASSWORD: "/restore-password",
    TEST_COMPONENTS: "/test-components"

}

export const Pages = () => {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={PATH.ENTER_NEW_PASSWORD} element={<EnterNewPassword/>}/>
                <Route path={PATH.LOGIN} element={<Login/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}/>
                <Route path={PATH.REGISTRATION} element={<Registration/>}/>
                <Route path={PATH.RESTORE_PASSWORD} element={<RestorePassword/>}/>
                <Route path={PATH.TEST_COMPONENTS} element={<TestComponents/>}/>
                <Route path={'/*'} element={<Error404/>}/>


                {/*// add routes*/}

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    );
};
