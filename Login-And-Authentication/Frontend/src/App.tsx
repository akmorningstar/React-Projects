
import 'react-toastify/ReactToastify.css'
import './App.css'
import Home from './Pages/home'
import Login from './Pages/login'
import Notfound from './Pages/Notfound'
import Signup from './Pages/signup'
import Template from './Pages/template'

import { Navigate, Outlet, Route, Routes } from 'react-router-dom'


// Helper to check if the user is logged in
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Adjust based on your authentication mechanism
};

// Protected Route component
const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Template />}>
          <Route 
          index element={<Home />} />

            
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
