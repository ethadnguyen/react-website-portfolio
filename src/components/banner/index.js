import { Typography } from "@mui/material";
import React from "react";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="/images/banner/banner.png" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New Bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
