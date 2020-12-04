import React, { Dispatch, useEffect } from 'react'; 
import {useSubscription} from '@apollo/react-hooks'
import {getNewMeasurement} from "./store/query/queries" 
import HomePage from "./components/HomePage"
import {storeSubscription,StoreSubscription} from './store/actions/dataActions'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';
import{RootState} from "./store/reducers/index";
 
 interface Props{
  flareTemp ?: any
  waterTemp ?:any
  casingPressure ?: any
  oilTemp ?: any
  tubingPressure ?: any
  injValveOpen ?: any
  lastFlareTemp ?: any
  storeSubscription?:any
 }

const App = (props:Props) => {
    const { data, error ,loading } = useSubscription(getNewMeasurement)
    if(loading){console.log('is loading')}
    if (error) {
       throw error;
    }
   if(data){
        props.storeSubscription(data.newMeasurement,data.newMeasurement.metric)
    }
    return <HomePage/>;
};

const mapStatetoProps = (state:RootState) =>{
    return {
      flareTemp : state.dataReducer.flareTemp,
      waterTemp :state.dataReducer.waterTemp,
      casingPressure : state.dataReducer.casingPressure,
      oilTemp : state.dataReducer.oilTemp,
      tubingPressure : state.dataReducer.tubingPressure,
      injValveOpen : state.dataReducer.injValveOpen,
      lastFlareTemp : state.dataReducer.lastFlareTemp
    }
  }
  
  const mapDispatchToProps = (dispatch:any):any =>
  bindActionCreators({storeSubscription},dispatch)
 export default connect(mapStatetoProps,mapDispatchToProps)(App);
 
  