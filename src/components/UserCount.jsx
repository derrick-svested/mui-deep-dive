import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const UserCount = () => {
  const classes = useStyles();

  return (
    <>
      <Title>User Count</Title>
      <Typography component="p" variant="h4">
        2,588,700
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link
          color="primary"
          href="#"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          View Logs
        </Link>
      </div>
    </>
  );
};

export default UserCount;
