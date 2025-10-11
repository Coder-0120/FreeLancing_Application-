import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import "../styles/loginNregister.css";
import { motion } from "framer-motion";

const Register = ({ setAuthType }) => {
  const { setUsername, setEmail, setPassword, setUsertype, register } =
    useContext(GeneralContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    await register();
  };

  return (
    <div className="auth-container">
      <motion.form
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Create Account</h2>
        <p className="subtitle">Join the SB Works community 🌟</p>

        <div className="auth-input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="auth-input">
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="auth-input">
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <select
          className="auth-select"
          onChange={(e) => setUsertype(e.target.value)}
        >
          <option value="">Select User Type</option>
          <option value="freelancer">Freelancer</option>
          <option value="client">Client</option>
          <option value="admin">Admin</option>
        </select>

        <motion.button
          className="auth-btn"
          onClick={handleRegister}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>

        <p className="switch-auth">
          Already registered?{" "}
          <span onClick={() => setAuthType("login")}>Login</span>
        </p>
      </motion.form>
    </div>
  );
};

export default Register;
