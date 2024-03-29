"use client";
import { Button } from "@mui/material";
import React from "react";
import styles from "./index.module.scss";

interface SubscribeBtnProps {
  btn_name: string;
}
const SubscribeBtn: React.FC<SubscribeBtnProps> = ({ btn_name }) => {
  return (
    <div>
      <Button variant='outlined' className={styles.btn}>
        {btn_name}
      </Button>
    </div>
  );
};

export default SubscribeBtn;
