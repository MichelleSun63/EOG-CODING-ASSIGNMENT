import {StatusStateSchema}from '../types'

const initialState:StatusStateSchema  ={
    flareTemp: false,
    waterTemp : false,
    casingPressure: true,
    oilTemp: true,
    tubingPressure: true,
    injValveOpen: true,

  }
  
const statusReducer = (state = initialState, action:any) =>{
  
      switch (action.type) {
     
        case 'SWITCH_BTN_STATUS' :
            return {
              ...state,
              flareTemp: action.payload === "flareTemp" ? !state.flareTemp : state.flareTemp,
              waterTemp: action.payload  === "waterTemp" ?  !state.waterTemp  : state.waterTemp,
              casingPressure: action.payload  === "casingPressure" ? !state.casingPressure  : state.casingPressure,
              oilTemp: action.payload  === "oilTemp" ? !state.oilTemp : state.oilTemp,
              tubingPressure: action.payload  === "tubingPressure" ? !state.tubingPressure  : state.tubingPressure,
              injValveOpen: action.payload  === "injValveOpen" ? !state.injValveOpen : state.injValveOpen,
              }
          default:
              return state
      }
}
  
export default statusReducer; 