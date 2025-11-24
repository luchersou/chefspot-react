import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
} from "firebase/auth";
import type { User } from "firebase/auth";
import { auth } from "@/firebase/FirebaseConfig";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signup: (email: string, password: string, name: string) => Promise<User>;
  login: (email: string, password: string) => Promise<User>;
  loginWithGoogle: () => Promise<User>;
  logout: () => Promise<void>;
  updateUserName: (name: string) => Promise<void>;
  updateUserEmail: (email: string) => Promise<void>;
  updateUserPassword: (password: string) => Promise<void>;
  deleteUserAccount: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside <AuthProvider />");
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = async (email: string, password: string, name: string): Promise<User> => {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(user, { displayName: name });
    setUser({ ...user, displayName: name });
    return user;
  };

  const login = async (email: string, password: string): Promise<User> => {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    setUser(user);
    return user;
  };

  const loginWithGoogle = async (): Promise<User> => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    return result.user;
  };

  const logout = async (): Promise<void> => {
    await signOut(auth);
    setUser(null);
  };

  const updateUserName = async (name: string): Promise<void> => {
    if (!user) {
      throw new Error("No user logged in");
    }
    await updateProfile(user, { displayName: name });
    setUser({ ...user, displayName: name });
  };

  const updateUserEmail = async (email: string): Promise<void> => {
    if (!user) {
      throw new Error("No user logged in");
    }
    await updateEmail(user, email);
    setUser({ ...user, email });
  };

  const updateUserPassword = async (password: string): Promise<void> => {
    if (!user) {
      throw new Error("No user logged in");
    }
    await updatePassword(user, password);
  };

  const deleteUserAccount = async (): Promise<void> => {
    if (!user) {
      throw new Error("No user logged in");
    }
    await deleteUser(user);
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    loading,
    signup,
    login,
    loginWithGoogle,
    logout,
    updateUserName,
    updateUserEmail,
    updateUserPassword,
    deleteUserAccount,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
