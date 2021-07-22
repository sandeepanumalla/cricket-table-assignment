import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import data from "../assets/data";
import { useHistory } from "react-router";

function Homepage() {
  const history = useHistory();
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  function createData(firstName, lastName, teamName, Id) {
    return { firstName, lastName, teamName, Id };
  }

  const rows = data.map((player) =>
    createData(player.firstName, player.Lastname, player.teamName, player.Id),
  );

  return (
    <div className="container">
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>First Name</b>
                </TableCell>
                <TableCell align="right">
                  <b>Lastname</b>
                </TableCell>
                <TableCell align="right">
                  <b>Team</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  onClick={() =>
                    row.Id && history.push(`/playerpage/${row.Id}`)
                  }
                  key={row.firstName}>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.teamName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
export default Homepage;
