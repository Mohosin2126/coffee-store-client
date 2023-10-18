import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div >
            <NavLink to={"/"}>Home </NavLink>
            <NavLink to={"/addCoffee"}>Add Coffe </NavLink>
            <NavLink to={"/signup"}>SignUp </NavLink>
            <NavLink to={"/signin"}>Login </NavLink>
            <NavLink to={"/users"}>Users </NavLink>

        </div>
    );
};

export default Header;