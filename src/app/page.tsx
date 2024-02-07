import styles from "./page.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import phones from "../../public/Mockups.png";
import gallary from "../../public/gallary.png"
export default function Home() {
  return (
    <Box>
      <Grid container className={styles.main}>
        <Grid item container className={styles.content1} xs={12}>
          <Grid item xl={5} md={5} xs={11} className={styles.hero}>
            <Typography className={`${styles.text} ${styles.text1}`}>
              Your Live{" "}
            </Typography>
            <Typography className={`${styles.text} ${styles.text2}`}>
              Forecaster
            </Typography>
            <Typography className={`${styles.text} ${styles.text3}`}>
              Together We Forecast: Building Dreams,
            </Typography>
            <Typography className={`${styles.text} ${styles.text4}`}>
              One Day at a Time!
            </Typography>
            <Typography className={`${styles.text} ${styles.text5}`}>
              1million People like you have purchased this product!
            </Typography>

            <Grid item container xs={12} className={styles.btnGroup}>
              <Grid item lg={2} sm={12}>
                <Button variant='contained' className={styles.btn_try_now}>
                  TRY NOW
                </Button>
              </Grid>
              <Grid item lg={10} sm={12}>
                <Button variant='contained' className={styles.btn_free}>
                  FREE TILL 15JUN2023
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={5} md={5} xs={11} className={styles.mockups}>
            <img src={phones.src} className={styles.phones} />
          </Grid>
        </Grid>

        <Grid item className={styles.content2} xs={12}>
          <div className={styles.bgImage}>
            <Grid item xs={12} className={styles.features}>
              <Grid item xs={3} className={styles.personalized}>
                <div className={styles.persTittle}>
                  <div className={styles.persIcon} />
                  <img src={gallary.src} className={styles.gallary_img} />
                  <h3>Personalized</h3>
                </div>
                <span>
                  A personalized weather report that shows the best time and
                  place for couples to enjoy outdoor activities based on their
                  preferences and location.
                </span>
              </Grid>
              <Grid item xs={3} className={styles.gallary}>
                <div className={styles.persTittle}>
                  <div className={styles.persIcon} />
                  <img src={gallary.src} className={styles.gallary_img} />

                  <h3>Gallary</h3>
                </div>
                <span>
                  A personalized weather report that shows the best time and
                  place for couples to enjoy outdoor activities based on their
                  preferences and location.
                </span>
              </Grid>
              <Grid item xs={3} className={styles.MoodTracker}>
                <div className={styles.persTittle}>
                  <div className={styles.persIcon} />
                  <img src={gallary.src} className={styles.gallary_img} />

                  <h3>MoodTracker</h3>
                </div>
                <span>
                  A personalized weather report that shows the best time and
                  place for couples to enjoy outdoor activities based on their
                  preferences and location.
                </span>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid item className={styles.content3} xs={12}>
          <div className={styles.nextsection}>Hello</div>
        </Grid>
      </Grid>
    </Box>
  );
}
