// Trade.jsx
import React from 'react';
import TradeHero from '../components/TradeHero';
import UserSidebar from '../components/UserSidebar';
import Footer from '../components/Footer';
import TradeCategory from '../components/TradeCategory';
import TradePlace from '../components/TradePlace'
const Trade = () => {
  return (
    <>
      <div style={{ display: 'flex', height: '100vh' }}>
        <UserSidebar />
        <div style={{ flex: 1, marginLeft: '500px' }} className="ml-96">
          <TradeHero />
          <TradeCategory />
          <TradePlace />
          <Footer />

        </div>
      </div>
    </>
  );
};

export default Trade;
