import useAxios from "../../Hooks & functions/useAxios";
import { useContext } from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../../AuthProvider/AuthProvider";

const AdminPrivate = ({ children }) => {

    const { user, loading } = useContext(Authcontext)
    const [role, setRole] = useState("")
    const [roleLoading, setRoleLoading] = useState(true)
    const axios = useAxios()

    axios.get(`/user/role?email=${user?.email}`)
        .then(({ data }) => {
            setRole(data.role)
            setRoleLoading(false)
        })


    if (loading) {
        return <div>add a Loader</div>
    }
    if (roleLoading) {
        return <div>add a Loader</div>
    }

    if (!user) {
        return <Navigate state={location.pathname} to={"/login"}></Navigate>;
    }
    if (role == "admin") {
        return children
    }

    return <Navigate state={location.pathname} to={"/"}></Navigate>
};

export default AdminPrivate;