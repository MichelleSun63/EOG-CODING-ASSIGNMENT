export interface DataStateSchema{
    flareTemp:number|null
    waterTemp:number|null
    casingPressure:number|null
    oilTemp:number|null
    tubingPressure:number|null
    injValveOpen:number|null
    /////////////////////
    lastFlareTemp:number|null
    lastWaterTemp :number|null
    lastCasingPressure:number|null
    lastOilTemp:number|null
    lastTubingPressure:number|null
    lastInjValveOpen:number|null
    
    
}

export interface StatusStateSchema{
    flareTemp: boolean
    waterTemp :  boolean
    casingPressure:  boolean
    oilTemp:  boolean
    tubingPressure:  boolean
    injValveOpen: boolean
}

export const DATA_STATE_SCHEMA='DATA_STATE_SCHEMA';
export const STATUS_STATE_SCHEMA='STATUS_STATE_SCHEMA';

interface MakeDataSchema{
    type:typeof DATA_STATE_SCHEMA
    payload:DataStateSchema
}

interface MakeStateSchema{
    type:typeof STATUS_STATE_SCHEMA
    payload:StatusStateSchema
}

export type ManagerReducerType=MakeDataSchema|MakeStateSchema;