'use strict'
import { Error } from './login.model'
export class SearchInputModel {
    EndUserIp: string;
    TokenId: string;
    AdultCount: string;
    ChildCount: string;
    InfantCount: string;
    DirectFlight: string;
    OneStopFlight: string;
    JourneyType: string;
    PreferredAirlines: string;
    Segments: Array<Segments>;

}


export class Segments {
    Origin: string;
    Destination: string;
    FlightCabinClass: string;
    PreferredDepartureTime: string;
    PreferredArrivalTime: string;
}

export class SearchOutputModel {
    Response: Response

}

export class Response {
    Destination: string;
    Error: Error;
    Origin: string;
    ResponseStatus: number;
    TraceId: string;
    Results: Array<Array<Results>>;
}
export class SearchResults {
    AirlineCode: string;
    AirlineName: string;
    BaseFare: number;
    DepartureDate: string;
    Fare: number;
    FuelSurcharge: number;
    IsLowestFareOfMonth: boolean;
    OtherCharges: number;
    Tax: number;
}

export class Results {
    ResultIndex: string;
    Source: number;
    IsLCC: boolean;
    IsRefundable: boolean;
    GSTAllowed: boolean;
    IsGSTMandatory: boolean;
    AirlineRemark: string;
    Fare: Fare;
    FareBreakdown: Array<FareBreakdown>;
    Segments: Array<Array<SingleSegment>>;
    LastTicketDate: Date;
    TicketAdvisory: string;
    FareRules: Array<FareRules>;
    AirlineCode: string;
    ValidatingAirline: string;
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

export class FareBreakdown {
    Currency: string;
    PassengerType: number;
    PassengerCount: number;
    BaseFare: number;
    Tax: number;
    YQTax: number;
    AdditionalTxnFeeOfrd: number;
    AdditionalTxnFeePub: number;
    PGCharge: number;
}



export class SingleSegment {
    Baggage: string;
    CabinBaggage: string;
    TripIndicator: number;
    SegmentIndicator: number;
    Airline: Airline;
    NoOfSeatAvailable: number;
    Origin: Origin;
    Destination: Destination;
    Duration: number;
    GroundTime: number;
    Mile: number;
    StopOver: boolean;
    StopPoint: string;
    StopPointArrivalTime: Date;
    StopPointDepartureTime: Date;
    Craft: string;
    Remark: string;
    IsETicketEligible: boolean;
    FlightStatus: string;
    Status: string;
}

export class Airline {
    AirlineCode: string;
    AirlineName: string;
    FlightNumber: string;
    FareClass: string;
    OperatingCarrier: string;
}

export class Origin {
    Airport: Airport;
    DepTime: Date;
}
export class Destination {
    Airport: Airport
}
export class Airport {
    AirportCode: string;
    Terminal: string;
    CityCode: string;
    CityName: string;
    CountryCode: string;
    CountryName: string;
    ArrTime: Date;
}

export class FareRules {
    Origin: string;
    Destination: string;
    Airline: string;
    FareBasisCode: string;
    FareRuleDetail: string;
    FareRestriction: string;
}
