import { useState, createContext, useContext } from "react";
import { verifyUser } from "./AuthenticationService";


export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false)
  const [username, setUsername] = useState(null);
  

  async function login() {
    try {
      const response = await verifyUser();
      if (response.status === 200 && response.data.role === "admin") {       
        setIsAuthenticated(true)   
        setIsAdmin(true)     
        return true;      
      } else if(response.status === 200){
        setIsAuthenticated(true)
        return true; 
      }else {
        logout();
        return false;
      }
    } catch {
      logout();
      return false;
    }
  }
  function logout() {
    setIsAuthenticated(false);
    setUsername(null)    
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}
