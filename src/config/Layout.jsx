import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import * as Prime from './Prime';

export default function Layout() {
  return (
    <>
      <div className='min-h-screen'>
        <header>
          <div className='card flex justify-content-between '>
            <div className='card p-2'>
              <Link to='/'>
                <img
                  alt='logo'
                  src='https://primefaces.org/cdn/primereact/images/logo.png'
                  height='40'
                  className='ml-2'
                />
              </Link>
            </div>
            <nav>
              <ul className='flex py-1'>
                <li>
                  <Link to='/'>
                    <Prime.Button label='Home' text />
                  </Link>
                </li>
                <li>
                  <Link to='/blogs'>
                    <Prime.Button label='Blogs' text />
                  </Link>
                </li>
                <li>
                  <Link to='/users'>
                    <Prime.Button label='Users' text />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className='py-2'>
          <Outlet />
        </div>
      </div>
    </>
  );
}
