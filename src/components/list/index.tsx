"use client";
import { CheckBox } from "@mui/icons-material";
import styles from "./list.module.scss";

import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";

export default function CustomList() {
  const [val, setVal] = useState();
  const handleVal = (event: any, data: any) => {
    // console.log(event.target.value, data);
    setVal(data);
  };
  return (
    <Box>
      <FormControl>
        <RadioGroup value={val} onChange={handleVal}>
          <FormControlLabel
            className={
              val === "one"
                ? styles.govnosobachyeSelected
                : styles.govnosobachye
            }
            value='one'
            control={
              <Radio icon={<CheckCircleOutlineOutlinedIcon color='info' />} />
            }
            label='Share your weather stories and photos.'
          />
          <FormControlLabel
            value='two'
            control={<Radio color='default' />}
            label='Custom weather alerts and notifications.'
          />
          <FormControlLabel
            value='three'
            control={<Radio color='default' />}
            label='Smart weather integrations for your home.'
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
