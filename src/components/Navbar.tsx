import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const isEventListPage = currentPath.startsWith('/event-list');

  const isLoggedIn = currentPath === '/' || currentPath === '/login' || currentPath === '/register';

  const clearLocalStorage = () => {
    localStorage.clear();
    alert("Successfully cleared local storage");
    window.location.reload();
  };

  const getButtonClass = (path: string) =>
    `px-4 py-2 rounded-md ${currentPath === path || (path === '/event-list' && isEventListPage) ? 'text-primary-500 font-bold' : 'hover:text-gray-800'}`;

  return (
    <nav className="py-4 px-24 shadow-md flex flex-row items-center">
      <span className="flex-grow">
        <Logo />
      </span>
      <span className="flex space-x-4">
        {isLoggedIn ? (
          <>
            <button 
              className={getButtonClass("/register")} 
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button 
              className={getButtonClass("/login")} 
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button 
              className={getButtonClass("")} 
              onClick={clearLocalStorage}
            >
              Delete Data
            </button>
          </>
        ) : (
          <>
            <button 
              className={getButtonClass("/following")} 
              onClick={() => navigate("/following")}
            >
              Following
            </button>
            <button 
              className="px-4 py-2" 
              onClick={() => navigate("/event-list")}
            >
              Create Event List
            </button>
            <button 
              className={getButtonClass("/dashboard")} 
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
            <button 
              className={getButtonClass("")} 
              onClick={clearLocalStorage}
            >
              Delete Data
            </button>
          </>
        )}
      </span>
    </nav>
  );
}

export default Navbar;
