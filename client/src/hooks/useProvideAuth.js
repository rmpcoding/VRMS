import { useState, useEffect } from "react";

export default function useProvideAuth() {
  const [isAdmin, setIsAdmin] = useState(null);
  const [user, setUser] = useState();

  async function checkUser() {
    try {
      const response = await fetch("/api/auth/me", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUser(response.status === 200);
      setIsAdmin(response.status === 200);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    checkUser();
  }, [user, isAdmin]);

  return { user, isAdmin };
}
