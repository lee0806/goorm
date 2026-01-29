"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// AuthContext 타입 정의
type AuthContextType = {
  email: string;
  setEmail: (email: string) => void;
};

// Context 생성
const AuthContext = createContext<AuthContextType | undefined>(undefined);


// Provider 컴포넌트 생성
export function AuthProvider({ children }: { children: ReactNode }) {
  const [email, setEmail] = useState("");

  return (
    <AuthContext.Provider value={{ email, setEmail }}>
      {children}
    </AuthContext.Provider>
  );
}

// context를 사용할 훅 생성
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth는 AuthProvider 내부에서 사용하세요.");
  }
  return context;
}
