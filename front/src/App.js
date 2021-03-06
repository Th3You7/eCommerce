import React from "react";
import {
  Store,
  Product,
  Cart,
  Admin,
  AllProducts,
  Edit,
  Add,
  Remove,
  Wallet,
  Dashboard,
  Categories,
  AddCategory,
  RemoveCategory,
  Sales,
  Confirm,
  RemoveSale,
  Spending,
  RemoveSpending,
  AddSpending,
  Loan,
} from "./screens";
import { Redirect, Route, Switch } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  app: {
    position: "relative",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Switch>
        <Redirect exact from="/" to="/store" />
        <Route path="/store/:ctgry?" children={<Store />} />
        <Route path="/product/:id" children={<Product />} />
        <Route path="/cart/:id?" children={<Cart />} />
        <Route exact path="/admin" children={<Admin />} />
        <Route path="/admin/allproducts" children={<AllProducts />} />
        <Route path="/admin/categories" children={<Categories />} />
        <Route path="/admin/edit/:id" children={<Edit />} />
        <Route path="/admin/add" children={<Add />} />
        <Route path="/admin/remove/:id" children={<Remove />} />
        <Route path="/admin/wallet" children={<Wallet />} />
        <Route path="/admin/dashboard" children={<Dashboard />} />
        <Route path="/admin/addcategory" children={<AddCategory />} />
        <Route
          path="/admin/removecategory/:categoryId"
          children={<RemoveCategory />}
        />
        <Route path="/admin/sales" children={<Sales />} />
        <Route path="/admin/removesale/:saleId" children={<RemoveSale />} />
        <Route path="/confirm" children={<Confirm />} />
        <Route path="/admin/spending" children={<Spending />} />
        <Route path="/admin/addspending" children={<AddSpending />} />
        <Route
          path="/admin/removespending/:spendingId"
          children={<RemoveSpending />}
        />
        <Route path="/loan" children={<Loan />} />
      </Switch>
    </div>
  );
}

export default App;
