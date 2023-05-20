import React from "react";
import { CakeBox, useStyles } from "./CakeCardStyle";

type CakeCardProps = {
  name: string
  smallCake: number | null
  averageCake?: number | null
  cakeImage: string | null
};

const CakeCard: React.FC<CakeCardProps> = ({ name, smallCake, cakeImage }) => {
  const classes = useStyles()
  return (
    <div className={classes.cakeBox}>
      <div className={classes.imageContainer} >
        {cakeImage && <img src={cakeImage} className={classes.cakeImage}/>}
      </div>
      <div className={classes.description}>
        <p className={classes.cakeName}>{name}</p>
        <div className={classes.priceContainer}>
          <p>R$ {smallCake}</p>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
