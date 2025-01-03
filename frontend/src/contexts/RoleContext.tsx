import React, { createContext, useContext, useState } from "react";

// This file contains a basic example of how to create a context for role management. Change this to store users instead of rolea once schemas are defined //

type Role = "User" | "Veterinarian";

// Type for the context (defines the shape of the context data)
type RoleContextType = {
  role: Role;
  setRoleHandler: (role: Role) => void;
};

// Initialize the context
const RoleContext = createContext<RoleContextType | undefined>(undefined);

export function RoleProvider({ children }: { children: React.ReactNode }) {
  const [role, setRole] = useState<Role>("User");

  // Function to set the role
  function setRoleHandler(role: Role) {
    setRole(role);
  }

  // Provide the context data to the children
  return (
    <RoleContext.Provider
      value={{
        role,
        setRoleHandler,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
}

// Provides an easy way to access RoleContext in components.
export function useRole() {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useAuth must be used within an RoleProvider");
  }
  return context;
}