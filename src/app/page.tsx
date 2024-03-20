"use client";
import styles from "./page.module.scss";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import MyDivider from "@/components/customDivider";
import CustomList from "@/components/list";
import CustomSlider from "@/components/slider/slider";

import bg1 from "../../public/images/bg.png";
import bg2 from "../../public/images/icon.png";
import phones from "../../public/images/Mockups.png";
import gallary from "../../public/images/gallary.png";
import iphone_plan from "../../public/images/phone_mockup.png";
import line2 from "../../public/images/Line 2.png";
import sun from "../../public/images/sun.png";
export default function Home() {
  return (
    <>
      <Grid item container className={styles.content1} xs={12}>
        <Grid item container xs className={styles.hero}>
          <Typography className={styles.text1}>Your Live</Typography>
          <Typography className={styles.text2}>Forecaster</Typography>
          <Typography className={styles.text3}>
            Together We Forecast: Building Dreams,
          </Typography>
          <Typography className={styles.text4}>One Day at a Time!</Typography>
          <Typography className={styles.text5}>
            1million People like you have purchased this product!
          </Typography>

          <Grid item container xs={12} className={styles.btnGroup}>
            <Grid item>
              <Button variant='contained' className={styles.btn_try_now}>
                TRY NOW
              </Button>
            </Grid>
            <Grid item>
              <Button variant='contained' className={styles.btn_free}>
                FREE TILL 15JUN2023
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs='auto' className={styles.mockups}>
          {/* <div className={styles.phones} /> */}
          <img src={phones.src} />
        </Grid>
      </Grid>

      <Grid item container className={styles.content2} xs={12}>
        <img src={bg1.src} className={styles.bg_img} />
        <Grid item container xs={12} className={styles.features}>
          <Grid item xs={3} className={styles.personalized}>
            <Box className={styles.persTittle}>
              <Box className={styles.persIcon} />
              <img src={gallary.src} className={styles.gallary_img} />
              <Typography>Personalized</Typography>
            </Box>
            <Typography className={styles.text_features}>
              A personalized weather report that shows the best time and place
              for couples to enjoy outdoor activities based on their preferences
              and location.
            </Typography>
          </Grid>

          <Grid item xs={3} className={styles.gallary}>
            <div className={styles.persTittle}>
              <div className={styles.persIcon} />
              <img src={gallary.src} className={styles.gallary_img} />
              <Typography>Gallary</Typography>
            </div>
            <Typography className={styles.text_features}>
              A personalized weather report that shows the best time and place
              for couples to enjoy outdoor activities based on their preferences
              and location.
            </Typography>
          </Grid>

          <Grid item xs={3} className={styles.mood_tracker}>
            <div className={styles.persTittle}>
              <div className={styles.persIcon} />
              <img src={gallary.src} className={styles.gallary_img} />

              <Typography>MoodTracker</Typography>
            </div>
            <Typography className={styles.text_features}>
              A personalized weather report that shows the best time and place
              for couples to enjoy outdoor activities based on their preferences
              and location.
            </Typography>
          </Grid>
        </Grid>
        {/* </Box> */}
      </Grid>

      <Grid item container className={styles.content3}>
        <Grid item className={styles.iphone_plan} xs={5}>
          <img src={iphone_plan.src} className={styles.iphone} />
          <img src={line2.src} className={styles.line} />
        </Grid>
        <Grid item className={styles.text_block} xs={5}>
          <Typography variant='h2' className={styles.tittle}>
            Plan Your Outdoor
          </Typography>
          <Typography variant='h2' className={styles.tittle}>
            Activities with Ease
          </Typography>
          <Typography variant='h4'>Get notified before rain stops</Typography>
          <Typography variant='h4'> Plan your outdoor activities</Typography>
          <CustomList />
        </Grid>
      </Grid>

      <Grid item container className={styles.content4} xs={12}>
        <Box className={styles.bg_box}>
          <img src={bg2.src} className={styles.bg2_img} />
          <img src={sun.src} className={styles.sun_img} />
        </Box>

        <Grid item className={styles.sliderContainer}>
          <CustomSlider />
          <CustomSlider />
        </Grid>
      </Grid>

      <Grid item container className={styles.content5} xs={12}>
        <Grid item className={styles.tittle5} xs={10}>
          <Typography variant='h3' fontWeight={700}>
            The Weather App That Brings{" "}
          </Typography>
          <Typography variant='h3' fontWeight={700}>
            You Wonder
          </Typography>
          <Typography variant='h5' className={styles.sub_tittle5}>
            We care about your happiness and well-being, no matter the weather
          </Typography>
        </Grid>
        <Grid item className={styles.fq_list} xs={5}>
          <div className={styles.menu1}>
            <Typography variant='h5' className={styles.fq_text}>
              How can I customize the Juniper app to suit my needs?
            </Typography>
            <KeyboardArrowRightIcon />
          </div>
          {/* <div className={styles.divider} /> */}
          <MyDivider />
          <div className={styles.menu1}>
            <Typography variant='h5' className={styles.fq_text}>
              How can I share my weather updates with my partner?{" "}
            </Typography>
            <KeyboardArrowRightIcon />
          </div>
          <MyDivider />
          <div className={styles.menu1}>
            <Typography variant='h5' className={styles.fq_text}>
              How long is the free trial for the Juniper app?{" "}
            </Typography>
            <KeyboardArrowRightIcon />
          </div>
          <MyDivider />
          <div className={styles.menu1}>
            <Typography variant='h5' className={styles.fq_text}>
              What happens after the free trial ends?{" "}
            </Typography>
            <KeyboardArrowRightIcon />
          </div>
          <MyDivider />
        </Grid>
      </Grid>

      <Grid item container className={styles.content6}>
        <Grid className={styles.text_container} item xs={5}>
          <Typography className={styles.text6}>
            Experience the weather like never before
          </Typography>
          <Typography className={styles.text7}>
            The Only Weather App You Need to Stay Connected with Nature and Each
            Other
          </Typography>
        </Grid>
        <Grid className={styles.btn_row} xs={12}>
          <Button variant='contained' className={styles.btn_download_now}>
            DOWNLOAD NOW
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
