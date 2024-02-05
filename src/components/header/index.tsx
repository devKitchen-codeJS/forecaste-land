import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import styles from "./header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
const Header = () => {
  return (
    <Box className={styles.wrapper}>
      <Grid container>
        <Grid className={styles.header} item xs={12}>
          <Grid item className={styles.logo} xs={1}>
            LOGO
          </Grid>
          <Grid item className={styles.navigation} xs={11}>
            <Tabs>
              <Tab label='Home' />
              <Tab label='Info' />
              <Tab label='Shop' />
              <Tab label='TOS' />
              <Tab icon={<SearchIcon />} />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
