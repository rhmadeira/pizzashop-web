import { createBrowserRouter } from "react-router-dom";

import { Documents } from "@/pages/app/helpers/documents";
import { SignIn } from "@/pages/auth/sign-in";
import { SignUp } from "@/pages/auth/sign-up";
import { AppLayout } from "@/pages/_layouts/app";
import { AuthLayout } from "@/pages/_layouts/auth";
import { Orders } from "@/pages/app/orders/orders";
import { Dashboard } from "@/pages/app/dashboard/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/orders",
        element: <Orders />,
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
