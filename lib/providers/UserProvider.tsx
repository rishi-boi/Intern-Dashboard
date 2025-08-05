"use client";

import { useEffect } from "react";
import { useUserSession } from "@/lib/hooks/useUserSession";

interface UserProviderProps {
  children: React.ReactNode;
  userId?: string; // Optional initial user ID
}

export const UserProvider = ({ children, userId }: UserProviderProps) => {
  const { initializeSession } = useUserSession();

  useEffect(() => {
    // Initialize user session on app start
    initializeSession(userId);
  }, [initializeSession, userId]);

  return <>{children}</>;
};

// Example usage in your layout or main app component:
// <UserProvider userId={currentUserId}>
//   <YourAppContent />
// </UserProvider>
