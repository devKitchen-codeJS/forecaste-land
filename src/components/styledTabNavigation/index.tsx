import { TabList } from "@mui/lab";
import { styled } from "@mui/system";
// import React from 'react';

const StyledTabList = styled(TabList)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "white",
    width: "50px !important",
    marginLeft: "20px",
  },
  "& .MuiButtonBase-root":{
    padding:'0',

  }
}));

export default StyledTabList;
