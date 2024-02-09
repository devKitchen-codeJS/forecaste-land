import styles from "./page.module.scss";
import { Box, Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import phones from "../../public/images/Mockups.png";
import gallary from "../../public/images/gallary.png";
import iphone_plan from "../../public/images/phone_mockup.png"
import theme from "./theme";
export default function Home() {
  return (
    <Box>
      <Grid container className={styles.main}>
        <Grid item container className={styles.content1} xs={12}>
          <Grid item  container xl={5} md={5} xs={11} className={styles.hero}>
            <Typography className={styles.text1}>
              Your Live
            </Typography>
            <Typography className={styles.text2}>
              Forecaster
            </Typography>
            <Typography className={styles.text3}>
              Together We Forecast: Building Dreams,
            </Typography>
            <Typography className={styles.text4}>
              One Day at a Time!
            </Typography>
            <Typography className={styles.text5}>
              1million People like you have purchased this product!
            </Typography>

            <Grid item container xs={12} className={styles.btnGroup}>
              <Grid item lg={2} sm={12}>
                <Button  variant='contained' className={styles.btn_try_now}>
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

        <Grid item container  className={styles.content2} xs={12}>
          <Box  className={styles.bgImage}>
            <Grid item container xs={12} className={styles.features}>
              <Grid item xs={3} className={styles.personalized}>
                <Box className={styles.persTittle}>
                  <Box className={styles.persIcon}/>
                  <img src={gallary.src} className={styles.gallary_img} />
                  <Typography>Personalized</Typography>
                </Box>
                <Typography className={styles.text_features}>
                  A personalized weather report that shows the best time and
                  place for couples to enjoy outdoor activities based on their
                  preferences and location.
                </Typography>
              </Grid>
              <Grid item xs={3} className={styles.gallary}>
                <div className={styles.persTittle}>
                  <div className={styles.persIcon} />
                  <img src={gallary.src} className={styles.gallary_img} />
                  <Typography>Gallary</Typography>
                </div>
                <Typography className={styles.text_features}>
                  A personalized weather report that shows the best time and
                  place for couples to enjoy outdoor activities based on their
                  preferences and location.
                </Typography>
              </Grid>
              <Grid item xs={3} className={styles.mood_tracker}>
                <div className={styles.persTittle}>
                  <div className={styles.persIcon} />
                  <img src={gallary.src} className={styles.gallary_img} />

                  <Typography>MoodTracker</Typography>
                </div>
                <Typography className={styles.text_features}>
                  A personalized weather report that shows the best time and
                  place for couples to enjoy outdoor activities based on their
                  preferences and location.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item container className={styles.content3} xs={12}>
          <Grid item className={styles.iphone_plan} xs={5} >
            <img src={iphone_plan.src} className={styles.iphone}/>
          </Grid>
          <Grid item className={styles.text_block} xs={5}>
            <Typography>Plan Your Outdoor</Typography>
            <Typography>Activities with Ease</Typography>
            <Typography>Get notified before rain stops. Plan your outdoor activities</Typography>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
