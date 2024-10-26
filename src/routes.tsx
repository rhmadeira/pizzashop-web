import { Dashboard } from "@/pages/app/dashboard";
import { SignIn } from "@/pages/auth/sign-in";
import { Documents } from "@/pages/app/documents";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";
import { SignUp } from "./pages/auth/sign-up";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <h1>Forgot password</h1>,
      },
      {
        path: "/documents/:type",
        element: <Documents />,
      },
    ],
  },
]);
