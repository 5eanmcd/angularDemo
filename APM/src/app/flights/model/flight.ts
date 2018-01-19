import { IFlightRecord } from "./flightRecord";
// import { IClaim } from "./claim";
// import { ICarrier } from "./carrier";

export interface IFlight {
    airportCode: string;
    airlineCode: string;
    flightDate: string;
    adi: string;
    subscribedForUpdates: boolean;
    flightRecord: IFlightRecord[];
    success: boolean;
}

