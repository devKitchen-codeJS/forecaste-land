"use client";
import styles from "./list.module.scss";

import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

export default function CustomList() {
  return (
    <Box>
      <FormGroup>
        <FormControlLabel
          className={styles.one}
          checked={false}
          control={
            <Checkbox
              icon={
                <CheckCircleOutlineOutlinedIcon className={styles.one_check} />
              }
              color='info'
            />
          }
          label='Share your weather stories and photos.'
        />
        <FormControlLabel
          className={styles.one}
          checked={false}
          control={
            <Checkbox
              icon={
                <CheckCircleOutlineOutlinedIcon className={styles.one_check} />
              }
              color='info'
            />
          }
          label='Custom weather alerts and notifications.'
        />
        <FormControlLabel
          className={styles.one}
          checked={false}
          control={
            <Checkbox
              icon={
                <CheckCircleOutlineOutlinedIcon className={styles.one_check} />
              }
              color='info'
            />
          }
          label='Smart weather integrations for your home.'
        />
      </FormGroup>
    </Box>
  );
}
