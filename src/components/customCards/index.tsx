"use client";
import React from "react";
import styles from "./cards.module.scss";
import vector from "../../../public/images/vector12.png";
import { Box, Grid, Icon, Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CheckIcon from "@mui/icons-material/Check";
import SubscribeBtn from "../subscribeButton";

const Card = () => {
  return (
    <>
      <Grid item container className={styles.card}>
        <Grid item xs={12} className={styles.card_tittle}>
          <Box className={styles.price_box}>
            <Typography className={styles.subscribe_type}>COUPLE</Typography>
            <Box className={styles.price_section}>
              <AttachMoneyIcon />
              <Typography className={styles.price}>2.49</Typography>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xs={12} className={styles.card_body}>
          <Box className={styles.bg_box}>
            <img src={vector.src} className={styles.vector_img} />
          </Box>
          <Box className={styles.text_wrapper}>
            <Box className={styles.text_box}>
              <CheckIcon fontSize="small" color='info' />
              <Typography className={styles.options}>
                Advanced weather info for any location
              </Typography>
            </Box>
            <Box className={styles.text_box}>
              <CheckIcon color='info' />
              <Typography className={styles.options}>
                Advanced weather info for any location
              </Typography>
            </Box>
            <Box className={styles.text_box}>
              <CheckIcon color='info' />
              <Typography className={styles.options}>
                Advanced weather info for any location
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} className={styles.sub_btn}>
          <SubscribeBtn btn_name='SUBSCRIBE' />
        </Grid>
      </Grid>
    </>
  );
};

export default Card;
