import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Invoices } from "./invoices";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Invoices />,
    },
    {
        path: "/:id",
        element: <div>Details page</div>,  
    }
]);

createRoot(document.getElementById("root")).render(
    <div className="container">
        <div className="page">
            <RouterProvider router={router} />
        </div>
    </div>
);