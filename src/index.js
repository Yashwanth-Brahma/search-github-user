import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AppProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Auth0Provider
        domain="dev-8d47b80r.us.auth0.com"
        clientId="YYjfiZMPMxFMg2yS4QC6eHvXmFjwWLZ8"
        redirectUri={window.location.origin}
        cacheLocation="localstorage">
        <App />
      </Auth0Provider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
