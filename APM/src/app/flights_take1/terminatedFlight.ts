import { ICarrier } from "../carrier/carrier";

export interface ITerminatedFlightRecord {
    aircraft: string;
    terminal: string;
    claim: string;
    gate: string;
    status: string;
    statusText: string;
    operatingCarrier: ICarrier;
    scheduled: string;
    estimated: string;  
    cityCode: string;
    city: string;
    tailNumber: string;
  
}