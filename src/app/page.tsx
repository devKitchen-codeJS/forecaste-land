import styles from "./page.module.scss";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import phones from "../../public/Mockups.png"
export default function Home() {
  return (
    <Box>
      <Grid container className={styles.main}>
        <Grid item className={styles.content1} xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid item xl={5} md={5} className={styles.hero}>
            <p className={styles.text1}>Your Live </p>
            <p className={styles.text2}>Forecaster</p>
            <p className={styles.text3}>
              Together We Forecast: Building Dreams,
            </p>
            <p className={styles.text4}>One Day at a Time!</p>
            <p className={styles.text5}>
              1million People like you have purchased this product!
            </p>
            <Grid item xs={12} className={styles.btnGroup}>
              <Grid item xs={2}>
                <Button  variant='contained'>TRY NOW</Button>
              </Grid>
              <Grid item xs={10}>
                <Button variant='contained'>FREE TILL 15JUN2023</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5} className={styles.mockups}>
            <img src = {phones.src} className={styles.phones}/> 
          </Grid>
        </Grid>
        <Grid item className={styles.content2} xs={12}>
          <div className={styles.bgImage}>
            <Grid item xs={12} className={styles.features}>
              <Grid item xs={3} className={styles.personalized}>
                <div className={styles.persTittle}>
                  <div className={styles.persIcon} />
                  <h3>Personalized</h3>
                </div>
                <span>
                  A personalized weather report that shows the best time and
                  place for couples to enjoy outdoor activities based on their
                  preferences and location.
                </span>
              </Grid>
              <Grid item xs={4} className={styles.gallary}>
                gallary
              </Grid>
              <Grid item xs={4} className={styles.MoodTracker}>
                MoodTracker
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
