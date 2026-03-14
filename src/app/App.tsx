import { useState, useMemo } from "react";
import { RouterProvider } from "react-router";
import { createRouter } from "./routes";
import supabase from '../supabaseClient'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    recordSignIn("student123"); // ← THIS calls the function when login happens
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const router = useMemo(
    () => createRouter(isLoggedIn, handleLogin, handleLogout),
    [isLoggedIn]
  );

  return <RouterProvider router={router} />;
}

async function recordSignIn(userId: string) {
  await supabase.from('sign_ins').insert({ user_id: userId })
}

async function recordXP(userId: string, xpAdded: number, newRank: string) {
  await supabase.from('xp_changes').insert({
    user_id: userId,
    xp_added: xpAdded,
    new_rank: newRank
  })
}