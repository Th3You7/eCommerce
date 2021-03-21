import React from "react";
import { Store, Product, Cart, Admin, AllProducts, Edit } from "./screens";
import { Redirect, Route, Switch, useLocation } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  app: {
    position: "relative",
    minHeight: "100vh",
  },
}));

function App() {
  const location = useLocation();
  const classes = useStyles();
  const background = location.state && location.state.bg;
  return (
    <div className={classes.app}>
      <Switch location={background || location}>
        <Route exact path="/">
          <Redirect to="/store" />
        </Route>
        <Route path="/store/:ctgry?">
          <Store />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart/:id?">
          <Cart />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route path="/admin/allproducts">
          <AllProducts />
        </Route>
      </Switch>

      {background && <Route path="/edit/:id" children={<Edit />} />}
    </div>
  );
}

export default App;
