import { Padding } from "@mui/icons-material";
import { css, styled } from "@mui/material";
import { red } from "@mui/material/colors";
import { makeStyles } from '@mui/styles';

const hoverStyles = css`
  tras
`


export const CakeBox = styled('div')({
  alignItems: 'center',
  background: '#F5EADD',
  borderRadius: '10px',
  boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: "column",
  height: '15rem',
  margin: '0.5rem',
  padding: 15,
})

export const useStyles = makeStyles({
  cakeBox: {
    alignItems: 'center',
    background: '#F5EADD',
    borderRadius: '10px',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '20rem',
    margin: '0.5rem',
    padding: 6,
    transition: 'background-color 0.3s ease-in-out',
    width: '19rem',
    
    '&:hover': {
      transform: 'scale(1.03)',
      transition: '.5s'
    },
    '& p': {
      margim: '0px',
    }
  },
  imageContainer: {
    height: '12rem',
    width: '18rem',
  },
  cakeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  description: {
    alignItems: 'center',
    display: "flex",
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-around',
    margim: '1rem',
  },
  cakeName: {
    color: '#643016',
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1.2rem',
    fontWeight: 900,
    height: '3rem',
    margin: 0,
    textAlign: 'center',
  },
  priceSection: {
    display: 'flex collumn',
    alignItems: 'end',
  },
  priceContainer: {
    color: '#643016',
    fontWeight: 700,
  }
})
