import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export const AccountSettings = () => {
  const { user, updateUserName, updateUserEmail } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      if (name !== user?.displayName) {
        await updateUserName(name);
      }
      if (email !== user?.email) {
        await updateUserEmail(email);
      }

      setMessage("Data updated successfully!");
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conta</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome</label>
            <Input 
              placeholder="Your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="flex-1 focus-visible:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <Input 
              placeholder="youremail@email.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="flex-1 focus-visible:ring-orange-500"
            />
          </div>

          {message && (
            <p className={`text-sm ${message.startsWith("Erro") ? "text-red-500" : "text-green-600"}`}>
              {message}
            </p>
          )}

          <Button type="submit" className="mt-2" disabled={loading}>
            {loading ? "Saving..." : "Save"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
