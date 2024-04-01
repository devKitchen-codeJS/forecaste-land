"use client";
import { Box, Button, Grid, Switch, Typography, useTheme } from "@mui/material";
import React, { useEffect, useRef } from "react";
import styles from "./shop.module.scss";
import productImg from "@/../public/images/Product.png";
import gallary1 from "@/../public/images/Content2.png";
import Card from "@/components/customCards";
import SubscribeBtn from "@/components/subscribeButton";
// import theme from "@/app/theme";
// import { useTheme } from "@emotion/react";

const Shop = () => {

  return (
    <Box>
      <Grid item xs={12} container className={styles.main}>
        <Grid item container className={styles.content1}>
          <Grid item  xl={6} lg={7} md={12} xs={12} className={styles.product}>
            <img src={productImg.src} className={styles.product_img} />
          </Grid>
          <Grid item  xl={4} lg={4} md={12} xs={12} className={styles.atmos}>
            <Typography variant='h1' className={styles.atmos_tittle}>
              Atmos
            </Typography>
            <Typography variant='h5' className={styles.atmos_text}>
              A weather app that lets you explore the atmosphere and learn more
              about the weather phenomena
            </Typography>

            <Box className={styles.btn_box}>
              <Button variant='contained' disableRipple className={styles.btn_box_buy_now}>
                Buy Now
              </Button>
              <Button variant='outlined'  className={styles.btn_box_add_to_card}>
                Add to Card
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Grid item container className={styles.content2}>
          <Grid xs={12} item className={styles.gallary}>
            <img src={gallary1.src} className={styles.gallary_png} />
          </Grid>
          <Grid xs={12} item className={styles.all_products}>
            <SubscribeBtn btn_name='show all products' />
          </Grid>
        </Grid>

        <Grid item container className={styles.content3}>
          <Grid item className={styles.text} xs={8}>
            <Typography variant='h2' className={styles.tittle1}>
              We offer {<span style={{ color: "black" }}>three plans</span>} to
              suit your needs and budget
            </Typography>

            <Typography variant='h5' className={styles.tittle2}>
              You can switch or cancel your plan at any time
            </Typography>

            <Box className={styles.switch_box}>
              <Typography className={styles.yearly}>YEARLY BILLING</Typography>
              <Switch defaultChecked color='default' />
              <Typography className={styles.monthly}>
                MONTHLY BILLING
              </Typography>
            </Box>
          </Grid>
          <Grid item className={styles.plan_cards} xs={12}>
            <Card />
            <Card />
            <Card />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shop;
