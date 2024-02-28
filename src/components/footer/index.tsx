import MyDivider from "../customDivider";
import styles from "./footer.module.scss";
import { Box, Grid, Icon, Typography } from "@mui/material";
import twitter from "../../../public/images/twitter.png";
import facebook from "../../../public/images/facebook.png";
import instagram from "../../../public/images/Instagram.png";
import theme from "@/app/theme";
const Footer = () => {
  return (
    <Grid container xs={12} className={styles.wrapper}>
      <Grid   className={styles.forcaste_icons} xs={8} />
        
      <Grid item container className={styles.footer} xs={12}>
        <Grid item container xs={8} className={styles.content1}>
          <Grid item className={styles.icon_wrapper} xs={3}>
            <div className={styles.icon_container}>
              <img src={twitter.src} className={styles.brand_icon} />
              <img src={facebook.src} className={styles.brand_icon} />
              <img src={instagram.src} className={styles.brand_icon} />
            </div>
          </Grid>
          <Grid item className={styles.text_container1} xs={2}>
            <Box className={styles.text_wrapper}>
              <Typography className={styles.text1} color='primary'>
                Pages
              </Typography>
              <Typography className={styles.text2}>Home</Typography>
              <Typography className={styles.text2}>Info</Typography>
              <Typography className={styles.text2}>Shop</Typography>
              <Typography className={styles.text2}>TOS</Typography>
            </Box>
          </Grid>
          <Grid item className={styles.text_container1} xs={2}>
            <Box className={styles.text_wrapper}>
              <Typography className={styles.text1} color='primary'>
                Platform
              </Typography>
              <Typography className={styles.text2}>Android</Typography>
              <Typography className={styles.text2}>IOS</Typography>
              <Typography className={styles.text2}>Windows</Typography>
              <Typography className={styles.text2}>Mac OS</Typography>
            </Box>
          </Grid>
          <Grid item className={styles.text_container1} xs={2}>
            <Box className={styles.text_wrapper}>
              <Typography className={styles.text1} color='primary'>
                Support
              </Typography>
              <Typography className={styles.text2}>Support request</Typography>
              <Typography className={styles.text2}>Contact Us</Typography>
            </Box>
          </Grid>
          <Grid item className={styles.text_container1} xs={2}>
            <Box className={styles.text_wrapper}>
              <Typography className={styles.text1} color='primary'>
                Subscribe
              </Typography>
              {/* <Typography className={styles.text2}>Home</Typography>
              <Typography className={styles.text2}>Info</Typography>
              <Typography className={styles.text2}>Shop</Typography>
              <Typography className={styles.text2}>TOS</Typography> */}
            </Box>
          </Grid>
        </Grid>
        <MyDivider />
      </Grid>
    </Grid>
  );
};

export default Footer;
