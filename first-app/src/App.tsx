import React from 'react';
import Greenting from './components/Greenting';
import WelcomeBanner from './components/WelcomeBanner';

function App() {
  return (
    <div>
      <Greenting name = "ผู้ใช้งาน Type Script" messageCount={5}/>
      <Greenting name = "นักพัฒนา Vite"/>

      <WelcomeBanner title = "ยินดีต้อนรับสู่โลก Type Script!">
        <p>เนื้อหานี้ส่งผ่าน children props</p>
      </WelcomeBanner>
    </div>
  );
}
export default App;
