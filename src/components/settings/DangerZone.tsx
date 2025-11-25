import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { getFirebaseDeleteError } from "@/utils/firebaseErrors";

export const DangerZone = () =>{
  const { user, deleteUserAccount } = useAuth();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    if (!user?.email) {
      setMessage("User not found.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const credential = EmailAuthProvider.credential(user.email, password);
      await reauthenticateWithCredential(user, credential);

      await deleteUserAccount();
      setMessage("Account deleted successfully!");
      setIsModalOpen(false);
    } catch (error: any) {
      console.error("Delete error:", error);
      setMessage(getFirebaseDeleteError(error.code));
    } finally {
      setLoading(false);
    }
  };


  return (
    <Card className="border-red-300">
      <CardHeader>
        <CardTitle className="text-red-600">Danger Zone</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-red-600">
          Deleting your account is permanent and cannot be undone.
        </p>

        <Button 
          variant="destructive" 
          onClick={() => setIsModalOpen(true)}
        >
          Delete My Account
        </Button>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => {
              setIsModalOpen(false);
              setPassword("");
              setMessage(null);
            }}
          >
            <div
              className="bg-white rounded-lg p-6 w-full max-w-md space-y-4"
              onClick={(e) => e.stopPropagation()} 
            >
              <h2 className="text-lg font-bold text-red-600">Confirm Delete</h2>
              <p>Enter your password to confirm the account deletion.</p>

              <Input
                type="password"
                placeholder="Current password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex-1 focus-visible:ring-orange-500"
              />

              {message && (
                <p className={`text-sm ${message.includes("success") ? "text-green-500" : "text-red-500"}`}>
                  {message}
                </p>
              )}

              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsModalOpen(false);
                    setMessage(null);
                  }}
                  disabled={loading}
                >
                  Cancel
                </Button>

                <Button
                  variant="destructive"
                  onClick={handleDelete}
                  disabled={loading || !password}
                >
                  {loading ? "Deleting..." : "Delete Account"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
