import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import OrphanagesMap from "./pages/OrphanagesMap";
import CreateOrphanage from "./pages/CreateOrphanage";
import Orphanage from "./pages/Orphanage";

function Routes() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" exact component={Landing} />
        <Route path="/App" component={OrphanagesMap} />

        <Route path="/orphanages/create" exact component={CreateOrphanage} />
        <Route path="/orphanage/:id" component={Orphanage} />
      </switch>
    </BrowserRouter>
  );
}

export default Routes;
