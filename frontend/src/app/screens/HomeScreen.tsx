import { useRole } from "@/contexts/RoleContext";

export default function Home() {
    const { role } = useRole();
  return (
    <WelcomeText role={role}/>
  );
}

const WelcomeText = ({ role }: { role: string }) => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-white">
          <h1 className="text-black font-bold text-[3vw]">Welcome to Vetted! You are logged in as {role}</h1>
        </div>
      );
}