import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";

function AdminLogout() {
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    function Adminlogout() {
        logout();
        history.push("/");
    }

    return <Button onClick={Adminlogout} className="logoutBtn">Logout</Button>;
}

export default AdminLogout;