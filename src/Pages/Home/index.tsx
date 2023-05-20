import * as React from 'react';
import MainHeader from '../../Components/MainHeader/MainHeader';
import Banner from './Banner/Banner';
import { Box } from '@mui/material';
import Cakelist from './Cakelist/Cakelist';

export interface IHomeProps {
}

export function Home (props: IHomeProps) {
  return (
    <div style={{ margin: 0 }}>
      <MainHeader />
      <Box><Banner /></Box>
      <Cakelist />
    </div>
  );
}
