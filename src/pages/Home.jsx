import React from 'react';
import * as Prime from '../config/Prime';

export default function Home() {
  return (
    <div>
      <h1 className='text-center'>Welcome to Home Page </h1>
      <div className='grid'>
        <div className='col-12 md:col-6 lg:col-6'>
          <div className='p-3  font-bold'>
            <Prime.Card title='Technology'>
              <p className='m-0'>html,html5,css,css3,javascript</p>
              <p className='m-0'>Angular upto 16</p>
              <p className='m-0'>React js</p>
              <p className='m-0'>Node js</p>
              <p className='m-0'>Databse like MongoDB and MySql</p>

              <p className='m-0 py-3'>
                Having knowledge on below technologies:
              </p>
              <p className='m-0 py-3'>Java, SpringBoot, AWS</p>
            </Prime.Card>
          </div>
        </div>
        <div className='col-12 md:col-6 lg:col-6'>
          <div className='text-center p-3 font-bold'>
            <Prime.Card title='Technology'>
              <p className='m-0'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore sed consequuntur error repudiandae numquam deserunt
                quisquam repellat libero asperiores earum nam nobis, culpa
                ratione quam perferendis esse, cupiditate neque quas!
              </p>
            </Prime.Card>
          </div>
        </div>
      </div>
    </div>
  );
}
