import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(id, date, name, from, category, votes) {
  return { id, date, name, from, category, votes };
}

const rows = [
  createData(
    113,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "Computing",
    312
  ),
  createData(
    114,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "Personal Finance",
    866
  ),
  createData(115, "16 Mar, 2019", "Tom Scholz", "Boston, MA", "Education", 100),
  createData(116, "16 Mar, 2019", "Michael Jackson", "Gary, IN", "Health", 654),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "ESports",
    212
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <>
      <Title>Recent Posts</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Posted By</TableCell>
            <TableCell>From</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Votes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">{row.votes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more posts
        </Link>
      </div>
    </>
  );
}
