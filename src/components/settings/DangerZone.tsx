import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/context/AuthContext";
import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { getFirebaseDeleteError } from "@/utils/firebaseErrors";

export const DangerZone = () => {
  const { user, deleteUserAccount } = useAuth();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {
    if (!user?.email) {
      setMessage("User not found.");
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const credential = EmailAuthProvider.credential(
        user.email,
        password
      );

      await reauthenticateWithCredential(user, credential);
      await deleteUserAccount();

      setMessage("Account deleted successfully!");
      setOpen(false);
      setPassword("");
    } catch (error: unknown) {
      console.error("Delete error:", error);
      setMessage(getFirebaseDeleteError((error as any).code));
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (value: boolean) => {
    setOpen(value);

    if (!value) {
      setPassword("");
      setMessage(null);
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

        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogTrigger asChild>
            <Button variant="destructive">
              Delete My Account
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-red-600">
                Confirm Delete
              </DialogTitle>
            </DialogHeader>

            <p>Enter your password to confirm the account deletion.</p>

            <Input
              type="password"
              placeholder="Current password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="focus-visible:ring-orange-500"
            />

            {message && (
              <p
                className={`text-sm ${
                  message.includes("success")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {message}
              </p>
            )}

            <DialogFooter className="gap-2">
              <Button
                variant="outline"
                onClick={() => handleOpenChange(false)}
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
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  );
}
