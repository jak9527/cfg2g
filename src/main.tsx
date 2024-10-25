import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import { MantineProvider, createTheme } from "@mantine/core";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";

const theme = createTheme({
    autoContrast: true,
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
                <App />
            </GoogleOAuthProvider>
        </MantineProvider>
    </StrictMode>,
);
