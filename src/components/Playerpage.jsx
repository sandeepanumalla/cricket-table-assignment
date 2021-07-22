import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { SettingsInputCompositeTwoTone } from "@material-ui/icons";
import React from "react";
import { useLocation } from "react-router";
import data from "../assets/data";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./style.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Playerpage = ({ match }, props) => {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  const classes = useStyles();
  const search = useLocation().search;
  const path = document.location.pathname.split("/");
  const id = path[2];
  console.log(id);
  const player = data.find((player) => player.Id == id);
  console.log(player);
  const averageRuns = Math.round(player.total_run / player.total_match);
  const averageWickets = Math.round(player.total_wickets / player.total_match);

  return (
    <div className="player_container">
      <div>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={player.Id + ".jpeg"}
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {player.firstName + " " + player.Lastname}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
               Lizards are a widespread group of squamate reptiles, with over
               6,000 species, ranging across all continents except Antarctica
             </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <div>
        <table className="table">
          <tr className="tr">
            <td className="td">First Name</td>
            <td className="td">{player.firstName}</td>
          </tr>
          <tr>
            <td className="td">Last Name</td>
            <td className="td">{player.Lastname}</td>
          </tr>
          <tr>
            <td className="td">Team</td>
            <td className="td">{player.teamName}</td>
          </tr>
          <tr>
            <td className="td">Player Type</td>
            <td className="td">{player.player_type}</td>
          </tr>
          <tr>
            <td className="td">Matches Played</td>
            <td className="td">{player.total_match}</td>
          </tr>
          <tr>
            <td className="td">Total Wickets</td>
            <td className="td">{player.total_wickets}</td>
          </tr>
          <tr>
            <td className="td">Total Centuries</td>
            <td className="td">{player.total_centuries}</td>
          </tr>
          <tr>
            <td className="td">Date Of Birth</td>
            <td className="td">{player.player_type}</td>
          </tr>
          <tr>
            <td className="td">Average Runs</td>
            <td className="td">{averageRuns}</td>
          </tr>
          <tr>
            <td className="td">Average Wickets</td>
            <td className="td">{averageWickets}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Playerpage;

// <TableContainer component={Paper}>
//           <Table className={classes.table} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Dessert (100g serving)</TableCell>
//                 <TableCell align="right">Calories</TableCell>
//                 <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                 <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                 <TableCell align="right">Protein&nbsp;(g)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.name}>
//                   <TableCell component="th" scope="row">
//                     {row.name}
//                   </TableCell>
//                   <TableCell align="right">{row.calories}</TableCell>
//                   <TableCell align="right">{row.fat}</TableCell>
//                   <TableCell align="right">{row.carbs}</TableCell>
//                   <TableCell align="right">{row.protein}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
