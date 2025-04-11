import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <div className="p-4">Loading...</div>;

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
