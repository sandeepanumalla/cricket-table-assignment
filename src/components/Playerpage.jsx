import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

import React from "react";
import { useLocation } from "react-router";
import data from "../assets/data";

import "./style.css";

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
  //   console.log("../assets/images/" + player.Id + ".jpeg");
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
