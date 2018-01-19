import { ICarrier } from "../carrier/carrier";

export interface IFlightRecord {
    operatingCarrier: ICarrier;
    
    aircraft: string;
    airportCode:string;
    status: string;
    statusText: string;
    scheduled: string;
    city: string;
    marketingCarriers: ICarrier[];
    // adi: string;
    
    
    // estimated: string;  
    // cityCode: string;
    
    // tailNumber: string;    
    
}