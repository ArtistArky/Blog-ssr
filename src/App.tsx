import React, { useEffect, Suspense } from "react";
import { SubDomainRoutes, MainRoute } from "routers/index";
import Plausible from 'plausible-tracker';
import { persistor, store } from "./app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//
const RtlImportCssLazy = React.lazy(() => import("RtlImportCss"));
document
  .getElementsByTagName("html")[0]
  .setAttribute("dir", import.meta.env.VITE_LRT_OR_RTL);

function App() {
  const location = window.location.hostname.split(".")[0];
  const url = import.meta.env.VITE_URL;
  console.log(url);

  const { enableAutoPageviews } = Plausible({
    domain: window.location.hostname,
    trackLocalhost: true
  })
  
  useEffect(() => {

    enableAutoPageviews();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
            {
              location != url ? <SubDomainRoutes /> : <MainRoute />
            }
          </div>

      {/* LOAD RTL CSS WHEN RTL MODE ENABLE */}
      {import.meta.env.VITE_LRT_OR_RTL === "rtl" && (
        <Suspense fallback={<div />}>
          <RtlImportCssLazy />
        </Suspense>
      )}
      </PersistGate>
      </Provider>
  );
}

export default App;
