import { graphql } from 'react-apollo';
//import { MatchSummary, NoDataSummary } from '@mls-digital/react-components';
import {storeSubscription,StoreSubscription} from './actions/dataActions'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators } from 'redux';
import{RootState} from "./reducers/index";
 
import React, { useEffect } from 'react'; 
import {useSubscription} from '@apollo/react-hooks';
import {getNewMeasurement} from "./query/queries" ;

interface Props{
  flareTemp ?: any
  waterTemp ?:any
  casingPressure ?:any
  oilTemp ?:any
  tubingPressure ?: any
  injValveOpen ?: any
  lastFlareTemp ?: any
  storeSubscription?:any
 }

const Subscription = (props:Props) => {
    const { data, error ,loading } = useSubscription(getNewMeasurement)
    if(loading){console.log('is loading')}
    if (error) {
       throw error;
    }
   if(data){
        props.storeSubscription(data.newMeasurement,data.newMeasurement.metric)
    }
    return <div/>;
};

const mapResultsToProps=(result:any)=>{
    const {data}=result;
    return {
      flareTemp : data.flareTemp,
      waterTemp : data.waterTemp,
      casingPressure :  data.casingPressure,
      oilTemp :  data.oilTemp,
      tubingPressure :  data.tubingPressure,
      injValveOpen :  data.injValveOpen,
      lastFlareTemp :  data.lastFlareTemp
    }
}

//use the raphql to fetch the data's with the apollo
//graphql(getNewMeasurement,{props:mapResultsToProps})

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
 export default connect(mapStatetoProps,mapDispatchToProps)(Subscription);
