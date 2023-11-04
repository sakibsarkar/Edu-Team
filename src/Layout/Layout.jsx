import Cursor from "../Cursor/Cursor";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <NavBar></NavBar>
            {/* <Cursor></Cursor> */}
            <Outlet></Outlet>
        </>
    );
};

export default Layout;