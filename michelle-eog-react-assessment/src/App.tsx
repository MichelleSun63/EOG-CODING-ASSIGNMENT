import React, { Dispatch, useEffect } from 'react'; 
import HomePage from "./components/HomePage" 

import Subscription from "./store/Subscription"
  

export default function App (props:any){
    return (<div>
      <Subscription/>
    <HomePage/>
    </div>);
};
 
  