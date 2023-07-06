import { Outlet, Link } from "react-router-dom";

const Default = () => {
    return (
        <>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
};

export default Default;