import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import styles from "./header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  return (
    <Box className={styles.wrapper}>
      <Grid container>
        <Grid className={styles.header} item xs={12}>
          <Grid item className={styles.logo} xs={1}>
            LOGO
          </Grid>
          <Grid item className={styles.navigation} xs={11}>
            <Tabs>
              <Tab label='Home' onClick={() => router.push("/")} />
              <Tab label='Info' onClick={() => router.push("/")} />
              <Tab label='Shop' onClick={() => router.push("/pages/shop")} />
              <Tab label='TOS' onClick={() => router.push("/")} />
              <Tab icon={<SearchIcon />} />
            </Tabs>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
