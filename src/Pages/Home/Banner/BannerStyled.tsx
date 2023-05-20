import { styled } from "@mui/material"


export const BannerContainer = styled('div')({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  width: '100%'
})

export const BannerMessage = styled('div')({
  color: 'whitesmoke',
  display: 'flex',
  fontSize: '2rem',
  fontWeight: 900,
  flexDirection: 'column',
  alignItems: 'center',
  position: "absolute",
})