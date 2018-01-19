import { Component } from '@angular/core';
import { FlightsService } from "./flights.service";
import { IFlight } from "./flight";

@Component({
    selector: 'pm-flights',
    templateUrl: './flight-list.component.html'
})
export class FlightListComponent {
    pageTitle: string = 'Flight List'
    flights: IFlight[] = []
    errorMessage: string = ''

    constructor(private _flightService: FlightsService) {
    }

    ngOnInit(): void {
        this._flightService.getFlights()
        .subscribe(flights => {
            console.log('received flights');
            console.log(flights.length);
            this.flights = <IFlight[]>flights;},
        error => this.errorMessage = <any>error);
    }
}