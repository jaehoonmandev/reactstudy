import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

import {Fragment} from "react";

function RootLayout() {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
);
}

export default RootLayout;