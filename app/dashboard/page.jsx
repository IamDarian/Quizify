import DashContent from "@/components/DashContent";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

const Dashboard = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <main>
      <div className="drawer lg:drawer-open">
        <DashContent />
      </div>
      <p>{session.user.email}</p>
      <p>{session.user.role}</p>
    </main>
  );
};

export default Dashboard;
