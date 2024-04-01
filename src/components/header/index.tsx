import { Box, Grid, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
// import TabContext from "@mui/lab/TabContext";

import styles from "./header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import StyledTabList from "../styledTabNavigation";
const Header = () => {
  const router = useRouter();
  const [val, setVal] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setVal(newValue);
  };
  return (
    <Box className={styles.wrapper}>
      <Grid className={styles.header} item container xs={12}>
        
        <Grid item className={styles.logo} xs={1}>
          JUNIPER
        </Grid>

        <Grid item className={styles.navigation} xs={11}>
          <TabContext value={val}>
            <Box>
              <StyledTabList
                className={styles.navigation_context}
                onChange={handleChange}>
                <Tab
                  disableRipple
                  className={styles.tab}
                  label='Home'
                  onClick={() => router.push("/")}
                  value='1'
                />
                <Tab
                  disableRipple
                  className={styles.tab}
                  label='Shop'
                  onClick={() => router.push("/pages/shop")}
                  value='2'
                />
                <Tab
                  disableRipple
                  className={styles.tab}
                  label='TOS'
                  onClick={() => router.push("/")}
                  value='3'
                />
                {/* <Tab label='Info' value='4' /> */}
              </StyledTabList>
            </Box>
            {/* <TabPanel value='1' onClick={() => router.push("/")}>
                Home
              </TabPanel>
              <TabPanel value='2' onClick={() => router.push("/pages/shop")}>
                Shop
              </TabPanel>
              <TabPanel value='3' onClick={() => router.push("/")}>
                TOS
              </TabPanel> */}
          </TabContext>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
