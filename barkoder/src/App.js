import './App.css';
import MainContext from './MainContext';
import Sidebar from './component/Sidebar';
import Content from './component/Content';
import BrandsData from './brands.json'
import { useState } from 'react';
import Copied from './component/Copied';

function App() {

  const brandsArray = [];
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })
  
  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const data = {
      brands,
      selectedBrands,
      setSelectedBrands,
      setCopied
  }
  return (
    <>
        <MainContext.Provider value={data}>
        {copied && <Copied color={copied}/>}
          <Sidebar/>
          <Content/>
        </MainContext.Provider>
    </>
  );
}

export default App;
