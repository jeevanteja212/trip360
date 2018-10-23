'use strict'

export class LoginModel {
     Error:Error;
    Member: Member;
    Status: number;
    TokenId: string;   
}


export class Member {
    AgencyId: number;
    Email: string;
    FirstName: string;
    LastName: string;
    LoginDetails: string;
    LoginName: string;
    MemberId: number;
    isPrimaryAgent: boolean;

}
export class Error{
    ErrorCode:number;
    ErrorMessage:string;
}