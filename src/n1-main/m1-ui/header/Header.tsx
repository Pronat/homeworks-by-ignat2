import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"
import {PATH} from "../pages/Pages";

export function Header() {
    return (
        <div className={s.header}>
            <NavLink to={PATH.ENTER_NEW_PASSWORD} className={s.link}>pre-junior</NavLink>
            <NavLink to={PATH.LOGIN} className={s.link}>junior</NavLink>
            <NavLink to={PATH.PROFILE} className={s.link}>junior+</NavLink>
            <NavLink to={PATH.REGISTRATION} className={s.link}>junior+</NavLink>
            <NavLink to={PATH.RESTORE_PASSWORD} className={s.link}>junior+</NavLink>
            <NavLink to={PATH.TEST_COMPONENTS} className={s.link}>junior+</NavLink>
        </div>
    )
}

