'use strict'

export class BookRequest {
    EndUserIp: string;
    TokenId: string;
    TraceId: string;
    ResultIndex: string;
    Passengers: Array<Passengers>;


}
export class Passengers {

    Title: string;
    FirstName: string;
    LastName: string;
    PaxType: number;
    DateOfBirth: string;
    Gender: number;
    GSTCompanyAddress: string;
    GSTCompanyContactNumber: string;
    GSTCompanyName: string;
    GSTNumber: string;
    GSTCompanyEmail: string;
    PassportNo: string;
    PassportExpiry: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    CountryCode: string;
    CountryName: string;
    Nationality: string;
    ContactNo: string;
    Email: string;


    IsLeadPax: boolean;
    FFAirlineCode: string;
    FFNumber: string;
    Fare: any;
    // Meal: Array<Meal>;
    // Seat: Array<Seat>;



}

export class Fare {
    Currency: string;
    BaseFare: number;
    Tax: number;
    TaxBreakup: Array<KeyValue>;
    YQTax: number;
    AdditionalTxnFeeOfrd: number;
    AdditionalTxnFeePub: number;
    PGCharge: number;
    OtherCharges: number;
    ChargeBU: Array<KeyValue>;
    Discount: number;
    PublishedFare: number;
    CommissionEarned: number;
    PLBEarned: number;
    IncentiveEarned: number;
    OfferedFare: number;
    TdsOnCommission: number;
    TdsOnPLB: number;
    TdsOnIncentive: number;
    ServiceFee: number;
    TotalBaggageCharges: number;
    TotalMealCharges: number;
    TotalSeatCharges: number;
    TotalSpecialServiceCharges: number;
}

export class KeyValue {
    key: string;
    value: number;
}


export class Meal {
    Code: string;
    Description: string;
}


export class Seat {
    Code: string;
    Description: string;
}

export class BookResponse {
    Response: ResponseAll

}

export class ResponseAll {
    Error: Error;
    Response: bookResp;
    ResponseStatus: number;
    TraceId: string;
}
export class bookResp {
    IsPriceChanged: boolean;
    IsTimeChanged: boolean;
    SSRDenied: string;
    SSRMessage: string;
    Status: string;
    FlightItinerary: FlightItinerary;
}

export class FlightItinerary {
    BookingId: number;
    PNR: string;
    IsDomestic: boolean;
    Source: string;
    Origin: string;
    Destination: string;
    AirlineCode: string;
    ValidatingAirlineCode: string;
    AirlineRemarks: string;
    IsLCC: boolean;
    NonRefundable: boolean;
    FareType: string;
    Fare: FareAll;
    Passengers: Array<PassengersAll>;
    Segments: Array<SegmentsBook>;
    LastTicketDate:string;
    AirlineTollFreeNo:string;
    FareRules:FareRules
}

export class FareAll {
    Currency: string;
    BaseFare: number;
    Tax: number;
    YQTax: number;
    AdditionalTxnFeeOfrd: number;
    AdditionalTxnFeePub: number;
    OtherCharges: number;
    ChargeBU: Array<ChargeBU>
    Discount: number;
    PublishedFare: number;
    CommissionEarned: number;
    PLBEarned: number;
    IncentiveEarned: number;
    OfferedFare: number;
    TdsOnCommission: number;
    TdsOnPLB: number;
    TdsOnIncentive: number;
    ServiceFee: number;
    EndUserIp: string;
    TicketAdvisory: string;
    FareRules: FareRules;
}

export class FareRules {
    Origin: string;
    Destination: string;
    Airline: string;
    FareBasisCode: string;
    FareRuleDetail: string;
    FareRestriction: string;
    GSTCompanyAddress: string;
    GSTCompanyContactNumber: string;
    GSTCompanyName: string;
    GSTNumber: string;
    GSTCompanyEmail: string;
}

export class ChargeBU {
    TBOMarkUp: number;
    ConvenienceCharge: number;
    OtherCharge: number;
}

export class PassengersAll {
    Title: string;
    FirstName: string;
    LastName: string;
    PaxType: number;
    DateOfBirth: Date;
    Gender: string;
    GSTCompanyAddress: string;
    GSTCompanyContactNumber: string;
    GSTCompanyName: string;
    GSTNumber: string;
    GSTCompanyEmail: string;
    PassportNo: string;
    PassportExpiry: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    CountryCode: string;
    CountryName: string;
    ContactNo: string;
    Email: string;
    IsLeadPax: boolean;
    FFAirline: string;
    FFNumber: string;
    Fare: Array<FareAll>;
    Meal: Array<Meal>;
    Seat: Array<Seat>;
}


export class SegmentsBook {
    TripIndicator: number;
    SegmentIndicator: number;
    Airline: Airline;
    Origin: Origin;
    Destination: Destination;
    AirlinePNR: String;
    AccumulatedDuration: String;
    Duration: Date;
    GroundTime: Date;
    Mile: String;
    StopOver: String;
    StopPoint: String;
    StopPointArrivalTime: Date;
    StopPointDepartureTime: Date;
    Craft: String;
    IsETicketEligible: boolean;
    EndUserIp: String;
    FlightStatus: String;
    Status: String;
}
export class Origin {
    Airport: Airport;
    DepTime:Date;
}
export class Destination {
    Airport: Airport;
    ArrTime: Date;
}

export class Airport {
    AirportCode: string;
    AirportName: string;
    Terminal: string;
    CityCode: string;
    CityName: string;
    CountryCode: string;
    CountryName: string;
}

export class Airline {
    AirlineCode: string;
    AirlineName: string;
    FlightNumber: string;
    FareClass: string;
    OperatingCarrier: string;
}
