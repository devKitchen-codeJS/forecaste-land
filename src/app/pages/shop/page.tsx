// "use client"
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import styles from "./shop.module.scss";
import productImg from "../../../../public/images/Product.png";
import gallary1 from "../../../../public/images/Content2.png";


const Shop = () => {

  return (
    <Box>
      <Grid item  xs={12} container className={styles.main}>
        <Grid item container className={styles.content1}>
          <Grid item xs={6} className={styles.product}>
            <img src={productImg.src} />
          </Grid>
          <Grid item xs={4} className={styles.atmos}>
            <Typography variant='h1' className={styles.tittle}>
              Atmos
            </Typography>
            <Typography variant='h5' className={styles.text1}>
              A weather app that lets you explore the atmosphere and learn more
              about the weather phenomena
            </Typography>
            <Button variant='contained' className={styles.btn_buy_now}>
              Buy Now
            </Button>
            <Button variant='contained' className={styles.btn_add_to_card}>
              Add to Card
            </Button>
          </Grid>
        </Grid>

        <Grid item container className={styles.content2}>
          <Grid xs={12} item className={styles.gallary}>
            <img src={gallary1.src} className={styles.gallary_png} />
          </Grid>
          <Grid xs={12} item className={styles.all_products}>
            <Button variant='outlined' className={styles.btn_all_products}>
              show all products
            </Button>
          </Grid>
        </Grid>

        <Grid item container className={styles.content3}>
          <Grid item className={styles.text}>
            <Typography variant='h6' className={styles.text2}>
              We offer three plans to suit your needs and budget
            </Typography>
            <Typography>
              {" "}
              You can switch or cancel your plan at any time
            </Typography>
            <Box className={styles.switch_box}>
              <Typography>YEARLY BILLING</Typography>
              <Button variant='contained'>SWITCH</Button>
              <Typography>MONTHLY BILLING</Typography>
            </Box>
          </Grid>
          <Grid item className={styles.plan_cards}></Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shop;
