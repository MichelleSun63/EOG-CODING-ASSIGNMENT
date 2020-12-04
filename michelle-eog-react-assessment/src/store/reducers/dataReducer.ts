import {DataStateSchema}from '../types';

const initialState:DataStateSchema ={
    flareTemp:null,
    waterTemp :null,
    casingPressure: null,
    oilTemp:null,
    tubingPressure:null,
    injValveOpen:null,
     
    lastFlareTemp:null,
    lastWaterTemp :null,
    lastCasingPressure: null,
    lastOilTemp:null,
    lastTubingPressure:null,
    lastInjValveOpen:null,
  }

  
  
  const dataReducer = (state = initialState, action:any) =>{
      switch (action.type) {
            // subscribe latest data
            // in the current time
            case 'STORE_SUBSCRIPTION':
              return {
                  ...state,
                  lastFlareTemp: action.ctx.name === "flareTemp" ? action.ctx.object : state.lastFlareTemp,
                  lastWaterTemp: action.ctx.name  === "waterTemp" ? action.ctx.object  : state.lastWaterTemp,
                  lastCasingPressure: action.ctx.name  === "casingPressure" ? action.ctx.object  : state.lastCasingPressure,
                  lastOilTemp: action.ctx.name  === "oilTemp" ? action.ctx.object  : state.lastOilTemp,
                  lastTubingPressure: action.ctx.name  === "tubingPressure" ? action.ctx.object  : state.lastTubingPressure,
                  lastInjValveOpen: action.ctx.name  === "injValveOpen" ? action.ctx.object  : state.lastInjValveOpen,
              }
            // ///
            //store all the data 
            case 'STORE_CHAR' :
              return {
                ...state,
                flareTemp: action.ctx.name === "flareTemp" ? action.ctx.array : state.flareTemp,
                waterTemp: action.ctx.name  === "waterTemp" ? action.ctx.array  : state.waterTemp,
                casingPressure: action.ctx.name  === "casingPressure" ? action.ctx.array  : state.casingPressure,
                oilTemp: action.ctx.name  === "oilTemp" ? action.ctx.array  : state.oilTemp,
                tubingPressure: action.ctx.name  === "tubingPressure" ? action.ctx.array  : state.tubingPressure,
                injValveOpen: action.ctx.name  === "injValveOpen" ? action.ctx.array  : state.injValveOpen,
              }
               
          default:
              return state
      }
  }
  
  export default dataReducer; 
  
