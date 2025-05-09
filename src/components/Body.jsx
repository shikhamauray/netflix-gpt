import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';

const Body = () => {

  const approuter = createBrowserRouter([

    {
      path:"/",
      element:< Login/>,

    },
    {
      path:"browser",
      element:< Browse/>,

    },

  ]);

  return (
    <div>
        <RouterProvider router={approuter}>

        </RouterProvider>
        
        </div>
  );
};

export default Body