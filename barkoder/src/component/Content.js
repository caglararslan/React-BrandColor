import React, { useContext, useState } from 'react';
import Search from './Search';
import MainContext from '../MainContext';
import Brand from './Brand';

function Content() {

  const {brands} = useContext(MainContext);

  return (
      <main className='content'>
          <header className='header'>
            <Search/>
          </header>
          <section className='brands'>
                {
                  brands.map(brand => (
                    <Brand brand={brand}/>
                   ))
                }
          </section>
      </main>
  );
}
export default Content;