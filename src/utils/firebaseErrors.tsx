export const getFirebaseSignupError = (code: string): string => {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered.";

    case "auth/invalid-email":
      return "Invalid email format.";

    case "auth/weak-password":
      return "Password should be at least 6 characters.";

    case "auth/network-request-failed":
      return "Network error. Check your connection.";

    default:
      return "Failed to create account. Try again.";
  }
};

export const getFirebaseLoginError = (code: string): string => {
  switch (code) {
    case "auth/user-not-found":
      return "No account found with this email.";

    case "auth/wrong-password":
      return "Incorrect password.";

    case "auth/invalid-email":
      return "Invalid email format.";

    case "auth/invalid-credential":
      return "Invalid email or password.";

    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";

    case "auth/network-request-failed":
      return "Network error. Check your connection.";

    default:
      return "Login failed. Try again.";
  }
};

export const getFirebaseDeleteError = (code: string): string => {
  switch (code) {
    case "auth/wrong-password":
    case "auth/invalid-credential":
      return "Incorrect password.";

    case "auth/requires-recent-login":
      return "You must log in again before deleting your account.";

    case "auth/network-request-failed":
      return "Network error. Check your connection.";

    case "auth/too-many-requests":
      return "Too many attempts. Try again later.";

    default:
      return "Failed to delete account. Try again.";
  }
};
