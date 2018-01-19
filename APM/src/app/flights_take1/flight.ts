import { IFlightRecord } from "./flightRecord";
import { IClaim } from "./claim";
import { ICarrier } from "../carrier/carrier";

export interface IFlight {
    airportCode: string;
    // airlineCode: string;
    // flightDate: string;
    // adi: string;
    // subscribedForUpdates: boolean;
    // flightRecord: IFlightRecord[];
    // success: boolean;


    //for review
    // terminal?: string;
    // // claim?: string;
    // gate?: string;
    // status?: string;
    // statusText?: string;
    // operatingCarrier?: ICarrier;
    
    
    // claim: IClaim;
    // marketingCarriers?: ICarrier[];  
    // scheduled?: string;
    // estimated?: string;  
    // cityCode?: string;
    // city?: string;
    // tailNumber?: string;
}