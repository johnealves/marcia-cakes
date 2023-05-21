import styled from "styled-components";



export const BannerContainer = styled.div`
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  heigth: '5rem',
  position: 'relative',
  width: '100%'
  object-fit: 'contain',

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BannerMessage = styled('div')({
  color: 'whitesmoke',
  display: 'flex',
  fontSize: '2rem',
  fontWeight: 900,
  flexDirection: 'column',
  alignItems: 'center',
  position: "absolute",
})