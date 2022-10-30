import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Error404 from "./Error404";
import EnterNewPassword from "./enter-new-password";

export const PATH = {
    ENTER_NEW_PASSWORD: "/enter-new-password",
}

export const Pages = () => {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<EnterNewPassword/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>


                {/*// add routes*/}

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    );
};
