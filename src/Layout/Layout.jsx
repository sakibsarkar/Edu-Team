import NavBar from "../NavBar/NavBar";
import { Toaster } from "react-hot-toast";
import { pdfjs } from "react-pdf";
import { Outlet } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

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