import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { SearchBar } from "../../atoms";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    }
  })
);

const Header = ({ searchVal, setSearchVal }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            News
          </Typography>
          <SearchBar setSearchVal={setSearchVal} searchVal={searchVal} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;