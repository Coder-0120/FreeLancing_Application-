import React, { useContext } from "react";
import { GeneralContext } from "../context/GeneralContext";
import "../styles/loginNregister.css";
import { motion } from "framer-motion";

const Login = ({ setAuthType }) => {
  const { setEmail, setPassword, login } = useContext(GeneralContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    await login();
  };

  return (
    <div className="auth-container">
      <motion.form
        className="auth-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Welcome Back</h2>
        <p className="subtitle">Log in to continue your journey 🚀</p>

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

        <motion.button
          type="submit"
          className="auth-btn"
          onClick={handleLogin}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>

        <p className="switch-auth">
          Not registered?{" "}
          <span onClick={() => setAuthType("register")}>Register</span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;
