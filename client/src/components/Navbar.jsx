import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";
import "../styles/navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const usertype = localStorage.getItem("usertype");
  const navigate = useNavigate();
  const { logout } = useContext(GeneralContext);

  return (
    <>
      {usertype && (
        <motion.div
          className="navbar"
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="navbar-logo">
            SB Works {usertype === "admin" && <span>(Admin)</span>}
          </h3>

          <div className="nav-options">
            {usertype === "freelancer" && (
              <>
                <p onClick={() => navigate("/freelancer")}>Dashboard</p>
                <p onClick={() => navigate("/all-projects")}>All Projects</p>
                <p onClick={() => navigate("/my-projects")}>My Projects</p>
                <p onClick={() => navigate("/myApplications")}>Applications</p>
              </>
            )}

            {usertype === "client" && (
              <>
                <p onClick={() => navigate("/client")}>Dashboard</p>
                <p onClick={() => navigate("/new-project")}>New Project</p>
                <p onClick={() => navigate("/project-applications")}>
                  Applications
                </p>
              </>
            )}

            {usertype === "admin" && (
              <>
                <p onClick={() => navigate("/admin")}>Home</p>
                <p onClick={() => navigate("/all-users")}>All Users</p>
                <p onClick={() => navigate("/admin-projects")}>Projects</p>
                <p onClick={() => navigate("/admin-applications")}>
                  Applications
                </p>
              </>
            )}

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
