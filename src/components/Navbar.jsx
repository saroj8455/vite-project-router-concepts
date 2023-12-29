import React from 'react';
import * as Prime from '../config/Prime';
import { items } from '../common/MenuItem';

export default function Navbar() {
  const start = (
    <img
      alt='logo'
      src='https://primefaces.org/cdn/primereact/images/logo.png'
      height='40'
      className='mr-2'
    ></img>
  );
  const end = (
    <div className='card flex'>
      <Prime.InputText placeholder='Search' type='text' className='w-full' />
    </div>
  );
  return (
    <div>
      <Prime.Menubar model={items} start={start} end={end} />
    </div>
  );
}
