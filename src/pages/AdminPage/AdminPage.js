import React from "react";
import { Link } from "react-router-dom";
import Admin from "../../components/Admin/Admin";

function AdminPage () {
    return (
        <div>
            <Admin />
            <Link to='admin/createstore'>Create Store</Link>
        </div>
    )
}

export default AdminPage;
