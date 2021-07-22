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
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

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

  //   [
  //     createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  //     createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  //     createData("Eclair", 262, 16.0, 24, 6.0),
  //     createData("Cupcake", 305, 3.7, 67, 4.3),
  //     createData("Gingerbread", 356, 16.0, 49, 3.9),
  //   ];

  return (
    <div className="container">
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
              {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                onClick={() => history.push(`/playerpage/${row.Id}`)}
                key={row.firstName}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.teamName}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data[1].Id + ".jpeg"}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data[1].firstName + " " + data[1].Lastname}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
export default Homepage;

// {data.map((player) => {
//     return (
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image={player.Id + ".jpeg"}
//             title="Contemplative Reptile"
//           />

//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               {player.firstName}
//             </Typography>
//             {/* <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over
//               6,000 species, ranging across all continents except Antarctica
//             </Typography> */}
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   })}

// "../assets/images/" +
