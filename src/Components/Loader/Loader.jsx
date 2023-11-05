import { ColorRing } from "react-loader-spinner";

const Loader = () => {
    return (
        <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-[#401aa0]">
            <ColorRing
                visible={true}
                height="150"
                width="150"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    );
};

export default Loader;