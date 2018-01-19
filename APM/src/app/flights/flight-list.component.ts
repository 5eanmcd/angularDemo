import { Component } from '@angular/core';
import { FlightsService } from "./flights.service";
// import { IFlight } from "./model/flight";

@Component({
    selector: 'pm-flights',
    templateUrl: './flight-list.component.html'
})
export class FlightListComponent {
    pageTitle: string = 'Flight List'
    flights: any = ''
    errorMessage: string = ''

    constructor(private _flightService: FlightsService) {
    }

    ngOnInit(): void {
        this._flightService.getFlights()
        .subscribe(flights => {
            console.log('Flights assigned' + flights.airportCode )
            this.flights = flights
            console.log('Flights assigned')
        },
        error => this.errorMessage = <any>error);
    }
}