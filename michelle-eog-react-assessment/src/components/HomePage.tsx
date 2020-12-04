import React, { Dispatch } from 'react';
import DashBoard from "./dashboard/DashBoard" 

import { connect} from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';
import {RootState}from "../store/reducers/index";
interface Props {
    lastInjValveOpen:any;
}

 function HomePage<T> (props:Props ){
    return (
        <div>
          {props.lastInjValveOpen!==null?
          <DashBoard/>:
          <div>Page is Loading<br/>
                  Thanks for your patient!
                  </div>}
        </div>)
}

const mapStatetoProps = (state: RootState) =>{
    return {
      lastInjValveOpen : state.dataReducer.lastInjValveOpen
    }
  }
  
  const mapDispatchToProps = (dispatch:Dispatch<AnyAction>):void =>{}
  export default connect(mapStatetoProps,mapDispatchToProps)(HomePage);
  
 
