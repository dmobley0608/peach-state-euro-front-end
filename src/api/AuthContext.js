import { useState, createContext, useContext } from "react";
import { apiClient, executeJwtAuthentication } from "./AuthenticationService";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState();

  async function login(username, password) {
    try {
      const response = await executeJwtAuthentication(username, password);
      if (response.status === 200) {
        const jwtToken = `Bearer ${response.data.token}`;
        setToken(jwtToken);
        setIsAuthenticated(true)
        setUsername(username)

        apiClient.interceptors.request.use(
            (config) => {               
                config.headers.Authorization = jwtToken
                return config
            }
        )
        return true;
      } else {
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
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}
