// contexts/auth-context.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  userId: string | null;
  setUserId: Dispatch<SetStateAction<string | null>>;
  // Add any other auth-related state or functions here
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // You might want to add logic here to check for an existing session/token
  // on initial load and set isAuthenticated and userId accordingly.

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};