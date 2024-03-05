import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./shop.module.scss";
import productImg from "../../../../public/images/Product.png";
import gallary1 from "../../../../public/images/Content2.png";

const Shop = () => {
  return (
    <Box>
      <Grid container className={styles.main}>
        <Grid item container className={styles.content1}>
          <Grid item className={styles.product}>
            <img src={productImg.src} />
          </Grid>
          <Grid item className={styles.atmos}>
            <Typography variant='h2' className={styles.tittle}>
              Atmos
            </Typography>
            <Typography variant='h5' className={styles.text1}>
              A weather app that lets you explore the atmosphere and learn more
              about the weather phenomena
            </Typography>
          </Grid>
        </Grid>

        <Grid item container className={styles.content2}>
          <Grid xs={12} item className={styles.gallary}>
            <img src={gallary1.src} />
          </Grid>
          <Grid xs={12} item className={styles.all_products}>
            <Button variant='contained' className={styles.btn_all_products}>
              show all products
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shop;
