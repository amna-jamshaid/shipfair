/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import "./stylesheets/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard, Home, Login, Parcels, Reset, Signup, Trips , Onboarding , Birthday , Gender , Country , Address , Community , Role , Fun , Stuff , Finale , Document, Trustedcommunity} from "./pages";
import * as ROUTES from "./constants/routes";
import { Profile } from "./pages/Profile";
import AddPackage from "./pages/AddPackage";
import AddTrip from "./pages/AddTrip";
import AllPackages from "./pages/AllPackages";
import AllTrips from "./pages/AllTrips";
import usePackages from "./hooks/use-packages";
import { FeedContext } from "./context/feed-context";
import Gettingstartedtrips from "./pages/Forms/gettingstartedtrips";

export const App = () => {

  const { packages } = usePackages();
  const Ctx = useContext(FeedContext);
  console.log(packages);

  useEffect(() => {
    Ctx.updatePkgs(packages);
  }, []);

  return (
    <Router>
    <Switch>
      <Route path={ROUTES.LOGIN} exact>
        <Login />
      </Route>
      <Route path={ROUTES.ALL_PKGS} exact>
        <AllPackages />
      </Route>
      <Route path={ROUTES.ALL_TRIPS} exact>
        <AllTrips />
      </Route>
      <Route path={ROUTES.ADD_TRIP} exact>
        <AddTrip />
      </Route>
      <Route path={ROUTES.ADD_PACKAGE} exact>
        <AddPackage />
      </Route>
      <Route path={ROUTES.SIGN_UP} exact>
        <Gettingstartedtrips />
      </Route>
      <Route path={ROUTES.START_TRIPS} exact>
        <Signup />
      </Route>
      <Route path={ROUTES.RESET} exact>
        <Reset />
      </Route>
      <Route path={ROUTES.PROFILE} exact >
        <Profile />
      </Route>
      <Route path={ROUTES.TRIPS} exact >
        <Trips />
      </Route>
      <Route path={ROUTES.PARCELS} exact >
        <Parcels />
      </Route>

      <Route path={ROUTES.ONBOARDING} exact >
        <Onboarding />
      </Route>

      <Route path={ROUTES.BIRTHDAY} exact >
        <Birthday />
      </Route>

      <Route path={ROUTES.GENDER} exact >
        <Gender />
      </Route>

      <Route path={ROUTES.COUNTRY} exact >
        <Country />
      </Route>

      <Route path={ROUTES.ADDRESS} exact >
        <Address />
      </Route>

      <Route path={ROUTES.COMMUNITY} exact >
        <Community />
      </Route>

      <Route path={ROUTES.ROLE} exact >
        <Role />
      </Route>

      <Route path={ROUTES.FUN} exact >
        <Fun />
      </Route>

      <Route path={ROUTES.STUFF} exact >
        <Stuff />
      </Route>

      <Route path={ROUTES.FINALE} exact >
        <Finale />
      </Route>

      <Route path={ROUTES.DOCUMENT} exact >
        <Document />
      </Route>

      <Route path={ROUTES.TRUSTEDCOMMUNITY} exact >
        <Trustedcommunity />
      </Route>

      <Route path={ROUTES.DASHBOARD} >
        <Dashboard />
      </Route>

      
     
     
    </Switch>
</Router>
  );
};
