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

Note further that `name` and `homepage` has to be modified for your specific repo. 

## Publishing

To publish the page, run `npm run deploy`. Make sure to modify the pages of the repository following the [Github guidelines](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
