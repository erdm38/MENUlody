import { food_list } from "../Assets/assets";
import { createContext, useState, useEffect } from "react";

export const RecipesContext = createContext(null);

const RecipesContextProvider = (props) => {
  const url = "http://localhost:4000";
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (token) {
      // Token varsa kullanıcı bilgilerini al
      fetchUserProfile();
    }
  }, [token]);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`${url}/api/user/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const contextValue = {
    food_list,
    url,
    token,
    setToken,
    user,
    setUser
  };

  return (
    <RecipesContext.Provider value={contextValue}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
