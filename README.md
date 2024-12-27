# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Using the template

Feel free to use the template but make sure to add the `Footer` component in the root component, i.e., something like

```js
import React from 'react';
import { Card } from './../Card/Card';
import Body from './../Body/Body';
import Footer from '../Body/Footer';

export const Homepage = () => {
  return (
    <>
      <div className='grid justify-items-stretch grid-cols-1 laptop:grid-cols-6 pb-10'>
        <div></div>
        <div>
          <Card />
        </div>
        <div className='laptop:col-span-3'>
          <Body />
        </div>
      </div>
      <Footer />
    </>
  );
};
```

