import React from "react";
import { useSelector } from "react-redux";

function Profile() {
    const user = useSelector((state) => state.user.value);
    return (
        <div>
            <h1>Profile Page</h1>
            <div>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>Age : {user.age}</p>
            </div>
        </div>
    );
}

export default Profile;
