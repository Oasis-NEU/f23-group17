// Handles app context for controlling user authentication and state

import { createContext, useEffect, useContext, useState } from "react";
import { supabase } from "../supabase";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(
    JSON.parse(sessionStorage.getItem("session"))
  );

  useEffect(() => {
    sessionStorage.setItem("session", JSON.stringify(session));
  }, [session]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, _session) => {
        if (event === "SIGNED_IN") {
          console.log(`Supbase auth event: ${event}`);
          setSession(_session);
        }
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [session]);

  return (
    <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
