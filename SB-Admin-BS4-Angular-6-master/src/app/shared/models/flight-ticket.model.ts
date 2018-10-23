'use strict'

export class FlightTicket {
    tPNR: string;
    issuedOn: string;
    issuedBy: string;
    airlinePNR: string;
    customerPhoneNumber: string;
    ticketStatus: string;
    filghtDetails: Array<FilghtDetails>;
    passengerDetails: Array<PassengerDetails>;
    basicFare: string;
    fuelSurchare: string;
    jnTax: string;
    meals: string;
    baggage: string;
    otherCharges: string;
    grossFare: string;
    MOP: string;
    issueInExchangeFor: string;
    tourCode: string;
    gatewayChanges: string;
    emailId: string;
    phoneNumber: string;
    EndUserIp: string;
    TokenId: string;
    TraceId: string;
    BookingId: string;
    userid:number;
    paymentId:string;
    uniqueID:string;
}
export class FilghtDetails {
    origin: string;
    destination: string;
    flightNumber: string;
    depatureTime: string;
    arrivalTime: string;
    class: string;
    fareBasis: string;
    operatedBy: string;
    depatureTerminal: string;
    arrivalTerminal: string;
    originCode:string;
    destinationCode:string;
}
export class PassengerDetails {
    name: string;
    type: string;
    ticketNumber: string;
    FF: string;
    mealCode: string;
    basic: string;
    fuel: string;
    JN: string;
    meals: string;
    baggage: string;
    seat: string;
    taxes: string;
    gross: string;
    bgs: string;
    firstname: string;
    lastname: string;
    middlename: string;
    title: string;
}


