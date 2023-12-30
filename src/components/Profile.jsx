import React from 'react';
import * as Prime from '../config/Prime';
export default function Profile() {
  return (
    <div className='px-6 py-5'>
      <div className='surface-card p-4 shadow-2 border-round'>
        <div className='font-medium text-3xl text-900 mb-3'>Saroj Padhan</div>
        <div className='text-500 mb-5'>
          5 years of expreience in Angular,Reactjs and Nodejs application
          development.
        </div>
        <ul className='list-none p-0 m-0 border-top-1 border-300'>
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-500 w-full md:w-2 font-medium'>Name</div>
            <div className='text-900 w-full md:w-10'>Elliot Alderson</div>
          </li>
          <li className='flex align-items-center py-3 px-2 flex-wrap'>
            <div className='text-500 w-full md:w-2 font-medium'>Bio</div>
            <div className='text-900 w-full md:w-10 line-height-3'>
              5 years of experience as MEAN/MERN stack devlopment using Node,
              Express, MongoDB and Angular, React JS, HTML5, CSS3, JavaScript,
              ES5, ES6, Bootstrap Technology.
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-500 w-full md:w-2 font-medium'>
              Salary Expectation
            </div>
            <div className='text-900 w-full md:w-10'>$150,000</div>
          </li>
          <li className='flex align-items-center py-3 px-2 flex-wrap'>
            <div className='text-500 w-full md:w-2 font-medium'>Skills</div>
            <div className='text-900 w-full md:w-10'>
              <div className='card flex flex-wrap gap-2'>
                <Prime.Tag value='Angular' rounded></Prime.Tag>
                <Prime.Tag
                  severity='success'
                  value='React js'
                  rounded
                ></Prime.Tag>
                <Prime.Tag
                  severity='warning'
                  value='Node js'
                  rounded
                ></Prime.Tag>
              </div>
            </div>
          </li>
          <li className='flex align-items-center py-3 px-2 flex-wrap surface-ground'>
            <div className='text-500 w-full md:w-2 font-medium'>
              Repositories
            </div>
            <div className='text-900 w-full md:w-10'>
              <div className='grid mt-0 mr-0'>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeFaces</span>
                    </div>
                    <div className='text-700'>
                      Ultimate UI Component Suite for JavaServer Faces
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeNG</span>
                    </div>
                    <div className='text-700'>
                      The Most Complete Angular UI Component Library
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeReact</span>
                    </div>
                    <div className='text-700'>
                      Advanced UI Components for ReactJS
                    </div>
                  </div>
                </div>
                <div className='col-12 md:col-6'>
                  <div className='p-3 border-1 surface-border border-round surface-card'>
                    <div className='text-900 mb-2'>
                      <i className='pi pi-github mr-2' />
                      <span className='font-medium'>PrimeVue</span>
                    </div>
                    <div className='text-700'>
                      The Most Powerful Vue UI Component Library
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
