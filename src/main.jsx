import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  </AuthProvider>
);
