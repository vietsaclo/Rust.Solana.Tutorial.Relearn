import React from 'react';
import Header from '../components/common/Header';
import MyInventory from '../components/home-page/MyInventory';

const InventoryPage: React.FC = () => {
  return (
    <>
      <main>
        <div className='header'>
          <Header />
        </div>

        <MyInventory />
      </main>
    </>
  );
};

export default React.memo(InventoryPage);
