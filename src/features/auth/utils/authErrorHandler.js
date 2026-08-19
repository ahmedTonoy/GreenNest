const authErrorHandler = (error) => {
  switch (error.code) {
    // -------------------------
    // Registration
    // -------------------------

    case "auth/email-already-in-use":
      return "Unable to create your account. Please check your information and try again.";

    case "auth/weak-password":
      return "Your password is too weak.";

    // -------------------------
    // Login
    // -------------------------

    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Invalid email or password.";

    case "auth/user-disabled":
      return "This account has been disabled.";

    // -------------------------
    // Google Sign-In
    // -------------------------

    case "auth/popup-closed-by-user":
      return "The sign-in window was closed before completing authentication.";

    case "auth/popup-blocked":
      return "The sign-in popup was blocked by your browser.";

    case "auth/cancelled-popup-request":
      return "Another sign-in request is already in progress.";

    case "auth/account-exists-with-different-credential":
      return "An account already exists with a different sign-in method.";

    // -------------------------
    // General authentication
    // -------------------------

    case "auth/operation-not-allowed":
      return "This authentication method is currently unavailable.";

    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";

    case "auth/network-request-failed":
      return "Network error. Please check your internet connection and try again.";

    default:
      return "Something went wrong. Please try again.";
  }
};

export default authErrorHandler;
