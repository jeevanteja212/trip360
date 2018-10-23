// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serviceUrl: 'http://localhost:5000',
  address: {
    AddressLine1: "123, Test",
    AddressLine2: "",
    City: "Hyderabad", 
    CountryCode: "IN",
    CountryName: "India",
    Nationality: "IN",
    GSTCompanyAddress: "A-fhgjkhsjkfd",
    GSTCompanyContactNumber: "9989989989",
    GSTCompanyName: "nikhil",
    GSTNumber: "37AAQCS7937K2ZD",
    GSTCompanyEmail: "nikhil123@gmail.com",
    customerCareNumber:"9989989989"
  },
  paymentGateWay: {
    key: "rzp_test_X8QDYIpoGvnnXy",
    name: "SAKSHI TRAVELS",
    description: "",
    image: "/assets/images/companylogo.png",
    color: "#F37254"
  }
};
