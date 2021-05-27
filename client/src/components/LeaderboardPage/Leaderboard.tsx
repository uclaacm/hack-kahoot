import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
    color: "white",
  },
  footer: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: "bold",
    color: "black",
  },
  boardContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#942EFF",
    height: "100vh",
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10vh",
    width: "70vw",
  },
  list: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
    height: "70vh",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10px",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
  },
  leftFootContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "25vw",
  },
  nextButton: {
    alignSelf: "center",
    position: "absolute",
    top: 20,
    right: 20,
    height: "40px",
    width: "100px",
    backgroundColor: "white",
  },
}));

const scores = [
  { name: "charlie", score: 1020 },
  { name: "cookiesarecool", score: 120 },
  { name: "david", score: 160 },
  { name: "cookie", score: 1620 },
  { name: "charlie", score: 160 },
];

function Leaderboard() {
  const classes = useStyles();
  return (
    <div className={classes.boardContainer}>
      <Container className={classes.titleContainer}>
        <Typography
          align="center"
          component="h1"
          variant="h3"
          className={classes.title}
        >
          Scoreboard
        </Typography>
        <Button role="link" className={classes.nextButton} variant="contained">
          next
        </Button>
      </Container>
      <List className={classes.list}>
        {scores.map(score => {
          return (
            <React.Fragment key={score.name}>
              <li>
                <div className={classes.scoreContainer}>
                  <Typography
                    align="center"
                    component="h1"
                    variant="h3"
                    className={classes.title}
                  >
                    {score.name}
                  </Typography>
                  <Typography
                    align="center"
                    component="h1"
                    variant="h3"
                    className={classes.title}
                  >
                    {score.score}
                  </Typography>
                </div>
              </li>
            </React.Fragment>
          );
        })}
      </List>
      <div className={classes.footerContainer}>
        <div className={classes.leftFootContainer}>
          <Typography
            align="center"
            component="h4"
            variant="h4"
            className={classes.title}
          >
            hackoot.it
          </Typography>
          <Typography
            align="center"
            component="h5"
            variant="h5"
            className={classes.footer}
          >
            Quiz PIN: 4443332
          </Typography>
        </div>
        <Button role="link">End quiz</Button>
      </div>
    </div>
  );
}

export default Leaderboard;
