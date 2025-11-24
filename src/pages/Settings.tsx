import { AccountSettings } from "@/components/settings/AccountSettings";
import { DangerZone } from "@/components/settings/DangerZone";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";

export const Settings = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
        <DashboardHeader />
    </div>
    <div className="max-w-3xl border border-gray-300 rounded-xl mx-auto py-10 px-4 space-y-10">
      <h1 className="text-3xl font-bold">Settings</h1>
      <AccountSettings />
      <DangerZone />
    </div>
    </>
  );
}
