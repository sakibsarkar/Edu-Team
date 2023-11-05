import NavBar from "../NavBar/NavBar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            <Toaster />
            <Outlet></Outlet>
        </>
    );
};

export default Layout;