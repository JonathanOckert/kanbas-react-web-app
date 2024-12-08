import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Signup() {
    const [user, setUser] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const signup = async () => {
        const currentUser = await client.signup(user);
        dispatch(setCurrentUser(currentUser));
        navigate("/Kanbas/Account/Profile");
    };

    return (
        <div id="wd-signup-screen">
            <h1>Sign up</h1>
            <input
                placeholder="username"
                value={user.username}
                className="form-control mb-2"
                id="wd-username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <input
                placeholder="password"
                value={user.password}
                type="password"
                className="form-control mb-2"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {/* <input placeholder="verify password" type="password" className="form-control mb-2" /> */}
            {/* <Link to="/Kanbas/Account/Signin" className="btn btn-primary w-100">
                Sign up
            </Link> */}
            <button onClick={signup} id="wd-signup-btn" className="btn btn-primary mb-2 w-100">
                Sign up
            </button>
            <br />
            <br />
            <Link to="/Kanbas/Account/Signin">Signin</Link>
        </div>
    );
}
