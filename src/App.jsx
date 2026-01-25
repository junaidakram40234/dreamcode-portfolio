import React from 'react'
import Page1 from './pages/Page1'
import ClickSpark from './Components/ClickSpark.jsx';
import Page2 from './pages/Page2.jsx';
import Page3 from './pages/Page3.jsx';

const App = () => {
  return (
    <div className="bg-black h-screen w-full">
      <Page1 />
      <Page2 />
      <Page3 />
      
    </div>
  );
}

export default App