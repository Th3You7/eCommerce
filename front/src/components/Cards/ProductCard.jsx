import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
  Badge,
  withStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { useLocation, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: "visible",
    flex: "0 1 48%",
    display: (props) => (props.pathname === "/store" ? "block" : "flex"),
    height: (props) =>
      props.pathname === "/store" ? "auto" : theme.spacing(12),
    marginBottom: theme.spacing(2),
  },

  cardContent: {
    width: (props) => (props.pathname === "/store" ? "100%" : "70%"),
  },

  area: {
    width: (props) => (props.pathname === "/store" ? "100%" : "30%"),
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: (props) => (props.pathname === "/store" ? "fill" : "contain"),
  },

  title: {
    color: (props) => (props.pathname === "/store" ? "red" : "yellow"),
  },

  price: {
    color: theme.palette.text.secondary,
  },
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 0,
    top: 0,
    padding: "0 4px",
  },
}))(Badge);

const ProductCard = (props) => {
  const { title, price, img, fetching } = props;
  const location = useLocation();
  const classes = useStyles((props = location));
  return (
    <Card className={classes.card}>
      <CardActionArea className={classes.area}>
        {fetching ? (
          <Skeleton variant="rect" height={140} width="100%" />
        ) : (
          <Link to="/product">
            <CardMedia
              className={classes.img}
              component="img"
              alt="product"
              image={img}
              title={title}
            />
          </Link>
        )}
      </CardActionArea>
      <CardContent className={classes.cardContent}>
        {fetching ? (
          <Skeleton variant="text" width="70%" />
        ) : (
          <Typography component="h4" variant="body2">
            {title}
          </Typography>
        )}
        {location.pathname === "/cart" ? (
          <Typography variant="subtitle2">Size: 40</Typography>
        ) : null}
        <div style={{ display: "flex" }}>
          {fetching ? (
            <Skeleton variant="text" width="40%" />
          ) : (
            <Typography
              component="h4"
              variant="body1"
              className={classes.price}
              style={{ marginRight: "48px" }}
            >
              {price}DH
            </Typography>
          )}
          {location.pathname === "/cart" ? (
            <Typography
              component="h4"
              variant="body1"
              className={classes.price}
            >
              250.00
            </Typography>
          ) : null}
        </div>
      </CardContent>
      {location.pathname === "/cart" ? (
        <StyledBadge color="error" badgeContent={"X"}></StyledBadge>
      ) : null}
    </Card>
  );
};

export default ProductCard;
