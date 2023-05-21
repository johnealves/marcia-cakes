import * as React from "react";
import imageBanner from "../../../images/bolo_recheado.jpg";
import { BannerContainer, BannerMessage } from "./BannerStyled";
import { Box } from "@mui/material";

interface IBannerProps {}

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      {/* <BannerMessage>
        <h1>BOLOS</h1>
        <p>
          Deliciosamente recheados e com muito sabor, para proporcionar mais
          amor e carinho para todas as ocasiões.
        </p>
      </BannerMessage> */}
      <img
        src={imageBanner}
        style={{ width: "100%", maxHeight: '30rem' }}
      />
    </BannerContainer>
  );
};

export default Banner;
