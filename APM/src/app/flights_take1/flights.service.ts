import { Injectable } from '@angular/core'
import { IFlight } from './flight'
import { ITerminatedFlightRecord } from './terminatedFlight'

import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw'

@Injectable()
export class FlightsService {

    // private _flightURL = 'https://flifo-qa.api.aero/flifo/v3/flights/LAX/DL/A'

    private _flightURL = './api/flights/flights.json'

    // private _headers = new HttpHeaders();
    constructor(private _http: HttpClient){
    }

    getFlights(): Observable<IFlight[]>{
        // return this._http.get<IFlight[]>(this._flightURL,
        //     {
        //       headers: new HttpHeaders().set('x-apikey', '2cfd0827f82ceaccae7882938b4b1627')
        //     }
        // )
        return this._http.get<IFlight[]>(this._flightURL)
        .do(data => {
                console.log('Flights response: '+JSON.stringify(data))
                // var flightTest = <IFlight[]>(data);
                // var obj = JSON.parse(JSON.stringify(data));
                // console.log(obj[1].adi)
            })
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log('Error getting flight response: ' + err.message)
        // console.log(err.message)
        return Observable.throw(err.message)
    } 
}