import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/landing.css";
import { FaRocket, FaUsers, FaBriefcase } from "react-icons/fa";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("usertype");
    if (userType === "freelancer") navigate("/freelancer");
    else if (userType === "client") navigate("/client");
    else if (userType === "admin") navigate("/admin");
  }, [navigate]);

  return (
    <div className="landing-page">
      <div className="overlay"></div>

      {/* Navbar */}
      <nav className="landing-nav">
        <h3 className="logo">SB Works</h3>
        <button className="nav-btn" onClick={() => navigate("/authenticate")}>
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <motion.div
        className="landing-hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Empower Your Journey with <span>SB Works</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Connect, create, and collaborate on a platform where innovation meets
            opportunity. Turn your passion into success and take your freelance
            career to the next level.
          </motion.p>
          <motion.button
            className="join-btn"
            onClick={() => navigate("/authenticate")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now 🚀
          </motion.button>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="feature-card">
          <FaRocket className="feature-icon" />
          <h3>Grow Faster</h3>
          <p>Boost your freelancing journey with top clients and real projects.</p>
        </div>
        <div className="feature-card">
          <FaUsers className="feature-icon" />
          <h3>Connect Globally</h3>
          <p>Collaborate with businesses and creators around the world.</p>
        </div>
        <div className="feature-card">
          <FaBriefcase className="feature-icon" />
          <h3>Work Smart</h3>
          <p>Track your progress, manage work easily, and get paid securely.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
