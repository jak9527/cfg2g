import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";

import { MantineProvider, createTheme } from "@mantine/core";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

const theme = createTheme({
    autoContrast: true,
});

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
    const root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <MantineProvider theme={theme}>
                <RouterProvider router={router} />
            </MantineProvider>
        </StrictMode>,
    );
}
