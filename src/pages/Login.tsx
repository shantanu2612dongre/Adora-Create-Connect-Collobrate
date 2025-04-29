import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";  // Use react-router-dom

const LoginPage = () => {
  const navigate = useNavigate();  // useNavigate to programmatically navigate
  const location = useLocation();  // Use location to access the query params

  // Get the role from the query parameters
  const role = new URLSearchParams(location.search).get("role");

  useEffect(() => {
    const handleLogin = () => {
      // Simulate a successful login
      const user = { name: "Test User" };  // Mock user data
      const error = null;

      if (user) {
        // After mock "login", redirect user based on their role
        if (role === 'creator') {
          navigate("/creator-dashboard");  // Redirect to creator dashboard
        } else if (role === 'brand') {
          navigate("/brand-dashboard");  // Redirect to brand dashboard
        }
      } else if (error) {
        console.error("Login failed:", error.message);
      }
    };

    handleLogin();  // Call the mock login function

  }, [role, navigate]);  // Trigger login when role or navigate changes

  return <div>Loading...</div>;  // Show loading state until mock login is complete
};

export default LoginPage;