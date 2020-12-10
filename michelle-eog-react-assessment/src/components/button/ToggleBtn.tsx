import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import SwitchBtn from "./SwitchBtn";
import {RootState} from "../../store/reducers/index"


const useStyles = makeStyles({
    container: {
        height: '14vh',
        display: "flex",
        alignItems: "center",
        fontFamily:"Cursive",
        justifyContent : "space-evenly" 
    },
  });

  interface Props{
    lastFlareTemp ?: number|null
      lastWaterTemp ?: number|null
      lastCasingPressure?: number|null
      lastOilTemp?: number|null
      lastTubingPressure?: number|null
      lastInjValveOpen?:number|null
  }
const ToggleBtn = (props:Props) =>{
    const styles = useStyles();
    return (
        <div className={styles.container} >
          <SwitchBtn info = {props.lastFlareTemp} />
          <SwitchBtn info = {props.lastWaterTemp} />
          <SwitchBtn info = {props.lastCasingPressure} />
          <SwitchBtn info = {props.lastOilTemp} />
          <SwitchBtn info = {props.lastTubingPressure} />
          <SwitchBtn info = {props.lastInjValveOpen} />
        </div>
    )
}

const mapStatetoProps = (state:RootState) =>{
    return {
      //the latest data
      lastFlareTemp : state.dataReducer.lastFlareTemp,
      lastWaterTemp : state.dataReducer.lastWaterTemp,
      lastCasingPressure: state.dataReducer.lastCasingPressure,
      lastOilTemp:state.dataReducer.lastOilTemp,
      lastTubingPressure:state.dataReducer.lastTubingPressure,
      lastInjValveOpen:state.dataReducer.lastInjValveOpen,
  
    }
  }
const mapDispatchToProps = (dispatch:any):any =>
      bindActionCreators({
      },dispatch)
    
  
export default connect(mapStatetoProps,mapDispatchToProps)(ToggleBtn);