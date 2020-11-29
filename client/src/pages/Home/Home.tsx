import { Box } from '@chakra-ui/react';
import React from 'react';
import './Home.css';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="Home">
      <h1>Home Component</h1>
    </div>
  );
}
export default Home;