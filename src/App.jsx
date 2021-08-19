import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ResetCSS } from "./styles/ResetCSS";
import { primaryTheme } from "./styles/Themes";
import AuthContextProvider from "./contexts/AuthContext";

export default function App() {
    return (
        <ThemeProvider theme={primaryTheme}>
            <AuthContextProvider>
                <ResetCSS />
                <GlobalStyles />

                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/dashboard/:id" component={Dashboard} />
                    </Switch>
                </BrowserRouter>
            </AuthContextProvider>
        </ThemeProvider>
    );
}
