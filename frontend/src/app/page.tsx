"use client";
import { RoleProvider } from "@/contexts/RoleContext";
import Home from "./screens/HomeScreen";

export default function Root() {
  return (
    <RoleProvider>
      <Home/>
    </RoleProvider>
  );
}



