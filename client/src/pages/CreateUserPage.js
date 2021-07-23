import React from 'react';
import Sidebar from "../components/Sidebar/Sidebar";
import CreateUser from "../components/CreateUser/CreateUser";

const CreateUserPage = () => {
    return (
        <div style={{display: "flex"}}>
            <Sidebar />
            <CreateUser />
        </div>
    );
};

export default CreateUserPage;