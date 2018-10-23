var express = require('express')
var app = express();
var requests = require('request');
var zlib = require('zlib');
var mysql = require('mysql');
var nodemailer = require('nodemailer');
const HummusRecipe = require('hummus-recipe');
var mailgun = require("mailgun-js");
var api_key = 'bb2ae1734512b0d3c9c08effec767b33-a4502f89-150d9678';
var DOMAIN = 'trip360.in';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });
var mcrypt = require('js-rijndael');
var base64 = require('base-64');
var fs = require('fs');
var path = require('path');
const Razorpay = require('razorpay');

var con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  port: "3306",
  password: "admin",
  databese: 'mysql'
})

var instance = new Razorpay({
  key_id: 'rzp_test_X8QDYIpoGvnnXy',
  key_secret: '6DawCCPiO0q5Va6RSnr82Cd6'
})





// con.connect(function (err) {
//   if (err) {
//     console.log(err);
//   }
//   console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) {
//     console.log(err);
//   }
//   console.log("Connected!");
//   var sql = "SELECT * FROM trip360.test";
//   con.query(sql, function (err, result) {
//     if (err) { 
//     console.log(err);
//   }
//     console.log(result);
//   });
// });




//var request = require('request');

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  res.setHeader('Content-Type', 'application/json');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function (request, response) {




  var clearMessage = '<?xml version="1.0" encoding="utf-8" ?><policy><identity><sign>b4e412a4-0cb7-49e5-a6b0-51e67f3b66b2</sign><branchsign>c1e3d1f6-916a-456e-957c-b1fdf484d33b</branchsign><username>Dummy_TA</username><reference>86e21dae</reference></identity><plan><categorycode>6B123144-2E3A-490E-BAEB-B59F09327B7C</categorycode><plancode>87e831b3-16be-49c9-994d-c2b52e9af113</plancode><basecharges>929</basecharges><riders><ridercode percent="10">d2b58365-5a73-4748-aa8f-51e5e78a7aba</ridercode></riders ><totalbasecharges>1022</totalbasecharges><servicetax>126</servicetax><totalcharges>1022</totalcharges></plan><traveldetails><departuredate>24-APR-2012</departuredate><days>6</days><arrivaldate>29-APR-2012</arrivaldate></traveldetails><insured><passport>555</passport><contactdetails><address1>Test</address1><address2>Test</address2><city>Test</city><district>Test</district><state>Test</state><pincode>3434</pincode><country>Test</country><phoneno>545435</phoneno><mobile> 45545</mobile><emailaddress>Test@hgd.com</emailaddress></contatdetails><name>Test</name><dateofbirth>05-Aug-1941</dateofbirth><age>70</age><trawelltagnumber></trawelltagnumber><nominee>self</nominee><relation></relation><pastillness></pastillness></insured><otherdetails><policycomment></policycomment><universityname></universityname><universityaddress></universityaddress></otherdetails></policy>'
  var iv = "dd5ed2bda24549b6";
  var key = "b32b543e45bc41cc99f29af3be5b0742";
  var cipherName = "rijndael-128";
  var mode = "cbc";

  // key = [].slice.call(key)
  // iv = [].slice.call(iv);
  // clearMessage = [].slice.call(clearMessage);
  // var encryptedByteArray = mcrypt.encrypt(clearMessage, iv, key, cipherName, mode);
  // console.log("encrypt");
  // console.log(encryptedByteArray);
  // console.log(base64.encode(encryptedByteArray));
  // console.log("encrypt");



  response.send({ data: 'Success' })
});


app.post('/postInsurance', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body: ' + data);

    var clearMessage = '<?xml version="1.0" encoding="utf-8" ?><policy><identity><sign>b4e412a4-0cb7-49e5-a6b0-51e67f3b66b2</sign><branchsign>c1e3d1f6-916a-456e-957c-b1fdf484d33b</branchsign><username>Dummy_TA</username><reference>86e21dae</reference></identity><plan><categorycode>6B123144-2E3A-490E-BAEB-B59F09327B7C</categorycode><plancode>87e831b3-16be-49c9-994d-c2b52e9af113</plancode><basecharges>929</basecharges><riders><ridercode percent="10">d2b58365-5a73-4748-aa8f-51e5e78a7aba</ridercode></riders ><totalbasecharges>1022</totalbasecharges><servicetax>126</servicetax><totalcharges>1022</totalcharges></plan><traveldetails><departuredate>24-APR-2012</departuredate><days>6</days><arrivaldate>29-APR-2012</arrivaldate></traveldetails><insured><passport>555</passport><contactdetails><address1>Test</address1><address2>Test</address2><city>Test</city><district>Test</district><state>Test</state><pincode>3434</pincode><country>Test</country><phoneno>545435</phoneno><mobile> 45545</mobile><emailaddress>Test@hgd.com</emailaddress></contatdetails><name>Test</name><dateofbirth>05-Aug-1941</dateofbirth><age>70</age><trawelltagnumber></trawelltagnumber><nominee>self</nominee><relation></relation><pastillness></pastillness></insured><otherdetails><policycomment></policycomment><universityname></universityname><universityaddress></universityaddress></otherdetails></policy>'
    var iv = "dd5ed2bda24549b6";
    var key = "b32b543e45bc41cc99f29af3be5b0742";
    var cipherName = "rijndael-128";
    var mode = "cbc";

    key = [].slice.call(key)
    iv = [].slice.call(iv);
    clearMessage = [].slice.call(clearMessage);
    var encryptedByteArray = mcrypt.encrypt(clearMessage, iv, key, cipherName, mode);
    // console.log("encrypt");
    // console.log(encryptedByteArray);
    // //console.log(base64.encode(encryptedByteArray));
    // console.log("encrypt");


    var headers = {
      'Accept-Encoding': 'gzip'
    };

    var ins = { Data: base64.encode(encryptedByteArray), Ref: 'dd5ed2bd-a245-49b6-b735-82a25dcfc7ad' };

    var url = 'http://karvatgroup.org/trawelltag/v3/AgentAPIV3.asmx?WSDL'
    var options = {
      method: 'post',
      body: ins,
      json: true,
      url: url,
      headers: headers,
      encoding: null
    }
    var buffer = [];

    console.log("encrypt 123");


    requests(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }
      var headers = res.headers
      var statusCode = res.statusCode

      console.log('statusCode: ', statusCode)
      console.log('body: ', body)

      console.log(res.headers['content-encoding'])
      //now body it is gzip stream buffer
      zlib.gunzip(body, function (err, dezipped) {
        response.send(dezipped.toString());
      });

    })


  })
})



app.post('/postDataService', function (request, response) {
  debugger;




  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });
  request.on('end', function () {
    console.log("112");
    console.log('body: ' + data);


    console.log(JSON.parse(data));
    var sql = 'SELECT id,first_name,last_name,userid,address1,address2,city,country_name,contry_code,nationality,email,phone FROM trip360.users_tbl where userid="' + JSON.parse(data).UserName + '" and password="' + JSON.parse(data).Password + '"';
    console.log(sql);

    con = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "Gauti@123",
      databese: 'trip360'
    })
    con.connect(function (err) {
      console.log("Connected!");
      con.query(sql, function (err, result) {
        console.log(err);
        if (err) {
          response.send({ data: { error: "Database connection failure" } });
        } else {
          console.log(result);
          if (result.length == 0) {
            response.send({ data: { error: "Invalid Userid and Password" } });
          } else {
            var resDataUser = result[0];
            var userDetails = response;

            var headers = {
              'Accept-Encoding': 'gzip'
            };

            let parms = {
              "ClientId": "ApiIntegrationNew",
              "UserName": "SAKSHI",
              "Password": "SAKSHI@1234",
              "EndUserIp": JSON.parse(data).EndUserIp
            }
            console.log(parms);
            var url = 'http://api.tektravels.com/SharedServices/SharedData.svc/rest/Authenticate'
            var options = {
              method: 'post',
              body: parms,
              json: true,
              url: url,
              headers: headers,
              encoding: null
            }
            var buffer = [];

            requests(options, function (err, res, body) {
              if (err) {
                console.error('error posting json: ', err)
                throw err
              }
              var headers = res.headers
              var statusCode = res.statusCode

              console.log('statusCode: ', statusCode)
              console.log('body: ', body)

              console.log(res.headers['content-encoding'])
              //now body it is gzip stream buffer
              zlib.gunzip(body, function (err, dezipped) {
                var datas = [dezipped.toString(), resDataUser];
                response.send(datas);
              });

            })

            // requests(options, function (err, res, body) {
            //   if (err) {
            //     response.send({ data: { error: err } });
            //     //throw err
            //   }else{
            //   //now body it is gzip stream buffer
            //   zlib.gunzip(body, function (err, dezipped) {
            //     response.send(dezipped.toString());
            //   });
            //   }
            // })
          }
        }
      });
    });




  })
})

app.post('/postSearchService', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body: ' + data);



    var headers = {
      'Accept-Encoding': 'gzip'
    };

    var url = 'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Search'
    var options = {
      method: 'post',
      body: JSON.parse(data),
      json: true,
      url: url,
      headers: headers,
      encoding: null
    }
    var buffer = [];
    requests(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }
      var headers = res.headers
      var statusCode = res.statusCode

      console.log('statusCode: ', statusCode)
      console.log('body: ', body)

      console.log(res.headers['content-encoding'])
      //now body it is gzip stream buffer
      zlib.gunzip(body, function (err, dezipped) {
        response.send(dezipped.toString());
      });

    })


  })
})

app.post('/postFareQuote', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body: ' + data);



    var headers = {
      'Accept-Encoding': 'gzip'
    };

    var url = 'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareQuote'
    var options = {
      method: 'post',
      body: JSON.parse(data),
      json: true,
      url: url,
      headers: headers,
      encoding: null
    }
    var buffer = [];
    requests(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }
      var headers = res.headers
      var statusCode = res.statusCode

      console.log('statusCode: ', statusCode)
      console.log('body: ', body)

      console.log(res.headers['content-encoding'])
      //now body it is gzip stream buffer
      zlib.gunzip(body, function (err, dezipped) {
        response.send(dezipped.toString());
      });

    })


  })
})


app.post('/bookFlight', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body1: ' + data);



    var headers = {
      'Accept-Encoding': 'gzip'
    };

    var url = 'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Book'
    var options = {
      method: 'post',
      body: JSON.parse(data),
      json: true,
      url: url,
      headers: headers,
      encoding: null
    }
    var buffer = [];
    requests(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }
      var headers = res.headers
      var statusCode = res.statusCode

      console.log('statusCode: ', statusCode)
      console.log('body: ', body)

      console.log(res.headers['content-encoding'])
      //now body it is gzip stream buffer
      zlib.gunzip(body, function (err, dezipped) {
        response.send(dezipped.toString());
      });

    })


  })
})

app.post('/cancelTicket', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body1: ' + data);



    var headers = {
      'Accept-Encoding': 'gzip'
    };

    var url = 'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/SendChangeRequest'
    var options = {
      method: 'post',
      body: JSON.parse(data),
      json: true,
      url: url,
      headers: headers,
      encoding: null
    }
    var buffer = [];
    requests(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }
      var headers = res.headers
      var statusCode = res.statusCode

      console.log('statusCode: ', statusCode)
      console.log('body: ', body)

      console.log(res.headers['content-encoding'])
      //now body it is gzip stream buffer
      zlib.gunzip(body, function (err, dezipped) {
        response.send(dezipped.toString());
      });

    })


  })
});




app.post('/getBookings', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body1: ' + data);
    data = JSON.parse(data);
    var userid = data.userid;

    var sql1 = 'SELECT * FROM trip360.book_tbl where userid="' + userid + '" order by id desc;';
    var sql2 = 'SELECT * FROM trip360.flightdetail_tbl where userid="' + userid + '"';
    var sql3 = 'SELECT * FROM trip360.passengers_tbl where userid="' + userid + '"';
    con = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "Gauti@123",
      databese: 'trip360'
    });
    var results = [];
    con.connect(function (err) {
      console.log("Connected!");
      con.query(sql1, function (err, result) {
        if (err) {
          response.send({ data: { error: "Database connection failure" } });
        } else {
          results.push(result);
          con.connect(function (err) {
            console.log("Connected!");
            con.query(sql2, function (err, result) {
              if (err) {
                response.send({ data: { error: "Database connection failure" } });
              } else {
                results.push(result);
                con.connect(function (err) {
                  console.log("Connected!");
                  con.query(sql3, function (err, result) {
                    if (err) {
                      response.send({ data: { error: "Database connection failure" } });
                    } else {
                      results.push(result);
                      console.log(result)
                      response.send(JSON.stringify(results));
                    }
                  });
                });
              }
            });
          });
        }
      });
    });
  })
})

app.post('/refundMoney', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body1: ' + data);
    data = JSON.parse(data);
    var payment_id = data.payment_id;
    var amount = data.amount;
    var notes = data.notes;
    var email = data.email;
    var journey = data.journey;
    var tpnr = data.tPNR;
    var airlinePNR = data.airlinePNR;
    var customerCareNumber = data.customerCareNumber;
    var uniqueID = data.uniqueID;
    var bookingId = data.bookingID;
     var userid = data.userid; 
    var dates=data.date;

    instance.payments.refund(payment_id, { amount, notes });

    var travel = "";
    for (var v = 0; v < journey.length; v++) {
      travel += "from " + journey[v].origin + " to " + journey[v].destination + "<br>";
    }
    var ref = "";
    ref += "<b>Refrerence Number: " + tpnr + "</b><br>";
    var airline = "";
    airline += "<b>airline PNR: " + airlinePNR + "</b><br>";

    var datasend = {
      from: 'noreply@trip360.in',
      to: email,
      subject: 'Flight Ticket',
      html: "<html>Hi,<br><br> your journey <br>  " + travel + " has been cancelled.<br>" + ref + " <br/> " + airline + "<br/><b>for enquiry contact : " + customerCareNumber + "</b></html>",
    };

    var sql = 'UPDATE trip360.book_tbl SET ticketStatus="Cancelled" where uniqueID="' + uniqueID + '"';
    con = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "Gauti@123",
      databese: 'trip360'
    });
    con.connect(function (err) {
      console.log("Connected!");
      con.query(sql, function (err, result) {
        if (err) {
          response.send({ data: { error: "Database connection failure" } });
        } else {
          mailgun.messages().send(datasend, function (error, body) {
            var sql2 = 'INSERT INTO trip360.refund_tbl(userid,bookingid,' +
              'refunddate,refundstatus,refundamount,notes,uniqueID)VALUES(' +
              ' "' + userid + '" ,"' + bookingId + '"  ,"' + dates+ '" ,' +
              ' "1" ,"' + amount + '"  ,"' + notes + '","' + uniqueID + '"  )';
               console.log(sql2);
            con.query(sql2, function (err, result) {
              if (err) {
                console.log(sql2);
                response.send({ data: { error: "Database connection failure" } });
              } else {
                response.send({ data: 'Success' });
              }
            });

          });
        }
      });
    });
  })
})


app.post('/registerUser', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body1: ' + data);
    data = JSON.parse(data);
    var first_name = data.first_name;
    var last_name = data.last_name;
    var userid = data.userid;
    var password = data.password;
    var address1 = data.address1;
    var address2 = data.address2;
    var city = data.city;
    var contry_code = data.contry_code;
    var country_name = data.country_name;
    var nationality = data.nationality;
    var email = data.email;
    var phone = data.phone;

    var sql = 'INSERT INTO trip360.users_tbl(first_name,last_name,userid,password,address1,address2,' +
      'city,contry_code,country_name,nationality,email,phone,isactive)' +
      'VALUES(  "' + first_name + '" ,"' + last_name + '"  ,"' + userid + '" ,' +
      '"' + password + '" ,"' + address1 + '"  ,"' + address2 + '" ,' +
      '"' + city + '" ,"' + contry_code + '"  ,"' + country_name + '" ,' +
      '"' + nationality + '" ,"' + email + '"  ,"' + phone + '" ,"1")';

    con = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "Gauti@123",
      databese: 'trip360'
    });
    con.connect(function (err) {
      console.log("Connected!");
      con.query(sql, function (err, result) {
        if (err) {
          console.log(err);
          response.send({ data: { error: "Database connection failure" } });
        } else {
          response.send({ data: 'Success' });
        }
      });
    });
  })
})


app.post('/resetUser', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body1: ' + data);
    data = JSON.parse(data);
    var userid = data.userid;
    var password = data.password;

    var sql = 'update trip360.users_tbl set password="' + password + '" where userid="' + userid + '" ';

    con = mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "Gauti@123",
      databese: 'trip360'
    });
    con.connect(function (err) {
      console.log("Connected!");
      con.query(sql, function (err, result) {
        if (err) {
          response.send({ data: { error: "Database connection failure" } });
        } else {
          response.send({ data: 'Success' });
        }
      });
    });
  })
})

app.post('/getTicket', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body1: ' + data);

    var headers = {
      'Accept-Encoding': 'gzip'
    };

    var url = 'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/Ticket'
    var options = {
      method: 'post',
      body: JSON.parse(data),
      json: true,
      url: url,
      headers: headers,
      encoding: null
    }
    var buffer = [];
    requests(options, function (err, res, body) {
      if (err) {
        console.error('error posting json: ', err)
        throw err
      }
      var headers = res.headers
      var statusCode = res.statusCode

      console.log('statusCode: ', statusCode)
      console.log('body: ', body)

      console.log(res.headers['content-encoding'])
      //now body it is gzip stream buffer
      zlib.gunzip(body, function (err, dezipped) {
        response.send(dezipped.toString());
      });
    })
  })
})


app.post('/sendTicket', function (request, response) {
  debugger;
  var data = '';
  request.on('data', function (chunk) {
    console.log("111");
    data += chunk;
  });

  request.on('end', function () {
    console.log("112");
    console.log('body123: ' + data);

    console.log(JSON.parse(data));
    data = JSON.parse(data);
    var count = 0;

    for (var att = 0; att < data.length; att++) {
      var dataTotal = data[att];
      var flightDetailsFE = data[att].filghtDetails;
      var PassengerDetailsFE = data[att].passengerDetails;
      let basicFare = data[att].basicFare;
      let fuelSurCharge = data[att].fuelSurchare;
      let JNTax = data[att].jnTax;
      let meals = data[att].meals;
      let baggage = data[att].baggage;
      let tax = data[att].otherCharges;
      let gross = data[att].grossFare;
      let mop = data[att].MOP;
      let issueExchange = data[att].issueInExchangeFor;
      let tourCode = data[att].tourCode;
      let gatewayChanges = data[att].gatewayChanges;
      let issueDate = data[att].issuedOn;
      let flightName = data[att].issuedBy;
      let pnr = "** " + data[att].airlinePNR + " **";
      let customerContact = data[att].customerPhoneNumber;
      let emailId = data[att].emailId;

      var PassengerDetails = [];
      var fareDetailsDetails = [];
      var modeDetails = [];
      var flightDetails = [];

      con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "Gauti@123",
        databese: 'trip360'
      });
      var sql = 'SELECT tPNR FROM trip360.book_tbl order by id desc limit 1';
      con.connect(function (err) {
        console.log("Connected!");
        con.query(sql, function (err, result) {
          if (err) {
            response.send({ data: { error: "Database connection failure" } });
          } else {
            let TPNRID = 10000;
            if (result.length > 0) {
              TPNRID = result[0].tPNR;
              TPNRID += 1;
            }
            var attachNumber = TPNRID;
            let tpnr = "** " + TPNRID + " **";
            console.log(TPNRID);
            console.log(dataTotal);

            sql = 'insert into trip360.book_tbl( uniqueID,tPNR,issuedOn,' +
              'issuedBy, airlinePNR, customerPhoneNumber, ticketStatus,' +
              'basicFare, fuelSurchare, jnTax, meals, baggage, otherCharges, grossFare,' +
              'MOP, issueInExchangeFor, tourCode, gatewayChanges, emailId, EndUserIp,' +
              'TokenId, TraceId, BookingId, paymentId, userid,phoneNumber) values ("' + dataTotal.uniqueID + '" ,"' + TPNRID + '" , ' +
              ' "' + dataTotal.issuedOn + '" ,"' + dataTotal.issuedBy + '"  ,"' + dataTotal.airlinePNR + '" ,' +
              ' "' + dataTotal.customerPhoneNumber + '" ,"' + dataTotal.ticketStatus + '"  ,"' + parseFloat(dataTotal.basicFare) + '" ,' +
              ' "' + parseFloat(dataTotal.fuelSurchare) + '" ,"' + parseFloat(dataTotal.jnTax) + '"  ,"' + dataTotal.meals + '" ,' +
              ' "' + dataTotal.baggage + '" ,"' + parseFloat(dataTotal.otherCharges) + '"  ,"' + parseFloat(dataTotal.grossFare) + '" ,' +
              ' "' + dataTotal.MOP + '" ,"' + dataTotal.issueInExchangeFor + '"  ,"' + dataTotal.tourCode + '" ,' +
              ' "' + dataTotal.gatewayChanges + '" ,"' + dataTotal.emailId + '"  ,"' + dataTotal.EndUserIp + '", ' +
              ' "' + dataTotal.TokenId + '" ,"' + dataTotal.TraceId + '"  ,"' + dataTotal.BookingId + '" ,' +
              ' "' + dataTotal.paymentId + '" ,"' + parseInt(dataTotal.userid) + '" ,"' + dataTotal.phoneNumber + '")';
            console.log(sql);


            con.connect(function (err) {
              console.log("Connected!");
              con.query(sql, function (err, result) {
                if (err) {
                  response.send({ data: { error: "Database connection failure" } });
                } else {




                  var headerFilghtDetails = {
                    "Origin": "50-50",
                    "Destination": "50-45",
                    "FI.No.": "40-53",
                    "Dep.Date&&Time": "65-65",
                    "Arr.Date&&Time": "65-52",
                    "Class": "40-43",
                    "FareBasis": "45-42",
                    "Oper.By": "40-47",
                    "Dep.Terminal": "55-55",
                    "Arr.Terminal": "55-0"
                  }

                  console.log("test");
                  console.log(flightDetailsFE);

                  for (var v = 0; v < flightDetailsFE.length; v++) {
                    // let obj = {};
                    var origin = String(flightDetailsFE[v].origin);
                    var destination = String(flightDetailsFE[v].destination);
                    var flightNumber = String(flightDetailsFE[v].flightNumber);
                    var depatureTime = String(flightDetailsFE[v].depatureTime);
                    var arrivalTime = String(flightDetailsFE[v].arrivalTime);
                    var cls = String(flightDetailsFE[v].class);
                    var fareBasis = String(flightDetailsFE[v].fareBasis);
                    var operatedBy = String(flightDetailsFE[v].operatedBy);
                    var depatureTerminal = String(flightDetailsFE[v].depatureTerminal);
                    var arrivalTerminal = String(flightDetailsFE[v].arrivalTerminal);

                    // obj[origin] = "50-50";
                    // obj[destination] = "50-45";
                    // obj[flightNumber] = "40-53";
                    // obj[depatureTime] = "65-65";
                    // obj[arrivalTime] = "65-52";
                    // obj[cls] = "40-43";
                    // obj[fareBasis] = "45-42";
                    // obj[operatedBy] = "40-47";
                    // obj[depatureTerminal] = "55-55";
                    // obj[arrivalTerminal] = "55-0";

                    var obj = [
                      { key: origin, value: "50-50" },
                      { key: destination, value: "50-45" },
                      { key: flightNumber, value: "40-53" },
                      { key: depatureTime, value: "65-65" },
                      { key: arrivalTime, value: "65-52" },
                      { key: cls, value: "40-43" },
                      { key: fareBasis, value: "45-42" },
                      { key: operatedBy, value: "40-47" },
                      { key: depatureTerminal, value: "55-55" },
                      { key: arrivalTerminal, value: "55-0" }
                    ]

                    flightDetails.push(obj);
                  }





                  var headerPassengerDetails = {
                    "Passenger Name": "75-57",
                    "Type": "40-45",
                    "Ticket No.": "50-35",
                    "FF": "20-35",
                    "Meal Code": "50-40",
                    "Basic": "30-30",
                    "Fuel": "30-30",
                    "JN": "30-30",
                    "Meals": "30-35",
                    "Baggage": "40-35",
                    "Seat": "30-30",
                    "Taxes": "30-30",
                    "Gross": "30-30",
                    "Seat": "30-30",
                    "Bgs": "30-30",
                  }


                  console.log("test1");
                  console.log(PassengerDetailsFE);
                  console.log(PassengerDetailsFE.length);

                  for (var v = 0; v < PassengerDetailsFE.length; v++) {
                    let obj = [];
                    var name = String(PassengerDetailsFE[v].name);
                    var type = String(PassengerDetailsFE[v].type);
                    var ticketNumber = String(PassengerDetailsFE[v].ticketNumber);
                    var FF = String(PassengerDetailsFE[v].FF);
                    var mealCode = String(PassengerDetailsFE[v].mealCode);
                    var basic = String(PassengerDetailsFE[v].basic);
                    var fuel = String(PassengerDetailsFE[v].fuel);
                    var JN = String(PassengerDetailsFE[v].JN);
                    var mls = String(PassengerDetailsFE[v].meals);
                    var bag = String(PassengerDetailsFE[v].baggage);
                    var seat = String(PassengerDetailsFE[v].seat);
                    var taxes = String(PassengerDetailsFE[v].taxes);
                    var grs = String(PassengerDetailsFE[v].gross);
                    var bgs = String(PassengerDetailsFE[v].bgs);

                    let obs = {};
                    obs[name] = "75-57";
                    obj.push(obs);
                    obs = {};
                    obs[type] = "40-45";
                    obj.push(obs);
                    obs = {};
                    obs[ticketNumber] = "50-35";
                    obj.push(obs);
                    obs = {};
                    obs[FF] = "20-35";
                    obj.push(obs);
                    obs = {};
                    obs[mealCode] = "50-40";
                    obj.push(obs);
                    obs = {};
                    obs[basic] = "30-30";
                    obj.push(obs);
                    obs = {};
                    obs[fuel] = "30-30";
                    obj.push(obs);
                    obs = {};
                    obs[JN] = "30-30";
                    obj.push(obs);
                    obs = {};
                    obs[mls] = "30-35";
                    obj.push(obs);
                    obs = {};
                    obs[bag] = "40-35";
                    obj.push(obs);
                    obs = {};
                    obs[seat] = "30-30";
                    obj.push(obs);
                    obs = {};
                    obs[taxes] = "30-30";
                    obj.push(obs);
                    obs = {};
                    obs[grs] = "30-30";
                    obj.push(obs);
                    obs = {};
                    obs[bgs] = "30-30";
                    obj.push(obs);
                    PassengerDetails.push(obj);
                  }


                  console.log("test2");

                  var obj = {};
                  var rate = "INR           " + basicFare
                  obj["Basic Fare"] = "150-125";
                  obj[rate] = "100-0";
                  fareDetailsDetails.push(obj);

                  obj = {};
                  rate = "INR           " + fuelSurCharge
                  obj["Fuel Surcharge"] = "150-125";
                  obj[rate] = "100-0";
                  fareDetailsDetails.push(obj);

                  obj = {};
                  rate = "INR           " + JNTax
                  obj["JN Tax"] = "150-125";
                  obj[rate] = "100-0";
                  fareDetailsDetails.push(obj);

                  obj = {};
                  rate = "INR           " + meals
                  obj["Meals"] = "150-125";
                  obj[rate] = "100-0";
                  fareDetailsDetails.push(obj);

                  obj = {};
                  rate = "INR           " + baggage
                  obj["Baggage"] = "150-125";
                  obj[rate] = "100-0";
                  fareDetailsDetails.push(obj);

                  obj = {};
                  rate = "INR           " + tax
                  obj["Taxes & Other Charges"] = "150-125";
                  obj[rate] = "100-0";
                  fareDetailsDetails.push(obj);

                  obj = {};
                  rate = "INR           " + gross
                  obj["Gross Fare "] = "150-125";
                  obj[rate] = "100-0";
                  fareDetailsDetails.push(obj);


                  obj = {};
                  rate = "Mode of Payment: " + mop;
                  obj[rate] = "100-0";
                  modeDetails.push(obj);

                  obj = {};
                  rate = "Issue in Exchange For: " + issueExchange;
                  obj[rate] = "100-0";
                  modeDetails.push(obj);

                  obj = {};
                  rate = "Tour Code: " + tourCode;
                  obj[rate] = "100-0";
                  modeDetails.push(obj);

                  obj = {};
                  rate = "Gateway Charges: " + gatewayChanges;
                  obj[rate] = "100-0";
                  modeDetails.push(obj);

                  const pdfDoc = new HummusRecipe('./flighttickets/trip_360_1.pdf', './flighttickets/flight_' + attachNumber + '.pdf').editPage(1);

                  console.log("test2.1");

                  if (!tpnr) tpnr = "-";
                  pdfDoc.text(tpnr, 437, 50, {
                    fontSize: 12,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  console.log("test2.222222");
                  if (!issueDate) issueDate = "-";
                  pdfDoc.text(issueDate, 472, 69, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  console.log("test2.2222");
                  if (!flightName) flightName = "-";
                  pdfDoc.text(flightName, 70, 109, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  console.log("test2.222");
                  if (!pnr) pnr = "-";
                  pdfDoc.text(pnr, 250, 124, {
                    fontSize: 12,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  console.log("test2.22");
                  if (!customerContact) customerContact = "-";
                  pdfDoc.text(customerContact, 120, 150, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  console.log("test2.2");
                  let x_axis = 40;
                  let y_axis = 180.00;
                  for (var v in headerFilghtDetails) {   // header Filght Details
                    const splitWidth = String(headerFilghtDetails[v]).split('-')
                    console.log(splitWidth[0]);
                    pdfDoc

                      .text(v, x_axis, y_axis, {
                        fontSize: 7,
                        bold: true,
                        font: 'Helvatica',
                        align: 'center center',
                        opacity: 0.8,
                        textBox: {
                          width: parseInt(splitWidth[0]),
                          lineHeight: 6,
                          padding: [5, 5],
                          style: {
                            lineWidth: 1,
                            stroke: '#191919',
                            opacity: 0.1,
                            fill: '#484C56'
                          }
                        }
                      });
                    x_axis = x_axis + parseInt(splitWidth[1]);
                  }
                  console.log("test3");
                  console.log(flightDetails);

                  for (var fly = 0; fly < flightDetails.length; fly++) {
                    y_axis += 17;
                    x_axis = 40;
                    var flightDetailsInfo = flightDetails[fly];
                    for (var flys = 0; flys < flightDetailsInfo.length; flys++) {   //  Filght Details Info
                      const splitWidth = String(flightDetailsInfo[flys].value).split('-');

                      if (flightDetailsInfo[flys].key == "depatureTerminal" || flightDetailsInfo[flys].key == "arrivalTerminal") {
                        flightDetailsInfo[flys].key = "-";
                      }
                      pdfDoc
                        .text(flightDetailsInfo[flys].key, x_axis, y_axis, {
                          fontSize: 7,
                          bold: true,
                          font: 'Helvatica',
                          align: 'center center',
                          opacity: 0.8,
                          textBox: {
                            width: parseInt(splitWidth[0]),
                            lineHeight: 6,
                            padding: [5, 5],
                            style: {
                              lineWidth: 1,
                              stroke: '#191919',
                              opacity: 0.1
                            }
                          }
                        });
                      x_axis = x_axis + parseInt(splitWidth[1]);
                    }
                  }

                  x_axis = 50;
                  y_axis = y_axis + 30;

                  console.log("test4");
                  console.log(headerPassengerDetails);

                  for (var v in headerPassengerDetails) {   // header Passenger Details
                    const splitWidth = String(headerPassengerDetails[v]).split('-')

                    pdfDoc

                      .text(v, x_axis, y_axis, {
                        fontSize: 7,
                        bold: true,
                        font: 'Helvatica',
                        align: 'center center',
                        opacity: 0.8,
                        textBox: {
                          width: parseInt(splitWidth[0]),
                          lineHeight: 6,
                          padding: [5, 5],
                          style: {
                            lineWidth: 1,
                            stroke: '#191919',
                            opacity: 0.1,
                            fill: '#484C56'
                          }
                        }
                      });
                    x_axis = x_axis + parseInt(splitWidth[1]);
                  }



                  console.log("test5");
                  console.log(PassengerDetails);

                  for (var fly = 0; fly < PassengerDetails.length; fly++) {
                    y_axis += 17;
                    x_axis = 50;
                    var PassengerDetailsInfo = PassengerDetails[fly];
                    for (var v = 0; v < PassengerDetailsInfo.length; v++) {   //  Filght Details Info
                      let objs = PassengerDetailsInfo[v];
                      let name = Object.keys(objs)[0];
                      let value = objs[name]
                      let splitWidth = String(value).split('-');

                      if (name == "FF" || name == "mealCode" || name == "seat") { name = "-"; }
                      if (name == "fuel" || name == "JN" || name == "meals" || name == "baggage") { name = "0"; }
                      pdfDoc
                        .text(name, x_axis, y_axis, {
                          fontSize: 7,
                          bold: true,
                          font: 'Helvatica',
                          align: 'center center',
                          opacity: 0.8,
                          textBox: {
                            width: parseInt(splitWidth[0]),
                            lineHeight: 6,
                            padding: [5, 5],
                            style: {
                              lineWidth: 1,
                              stroke: '#191919',
                              opacity: 0.1
                            }
                          }
                        });
                      x_axis = x_axis + parseInt(splitWidth[1]);
                    }
                  }

                  y_axis += 30;
                  var stand_a_y = y_axis;

                  console.log("test6");
                  console.log(fareDetailsDetails);

                  for (var fly = 0; fly < fareDetailsDetails.length; fly++) { //  Fare Details Info
                    y_axis += 17;
                    x_axis = 90;
                    var fareDetailsDetailsInfo = fareDetailsDetails[fly];
                    for (var v in fareDetailsDetailsInfo) {
                      const splitWidth = String(fareDetailsDetailsInfo[v]).split('-');
                      pdfDoc
                        .text(v, x_axis, y_axis, {
                          fontSize: 7,
                          bold: true,
                          font: 'Helvatica',
                          align: 'center center',
                          opacity: 0.8,
                          textBox: {
                            width: parseInt(splitWidth[0]),
                            lineHeight: 6,
                            padding: [5, 5],
                            style: {
                              lineWidth: 1,
                              stroke: '#191919',
                              opacity: 0.1
                            }
                          }
                        });
                      x_axis = x_axis + parseInt(splitWidth[1]);
                    }
                  }
                  var stand_b_y = y_axis;

                  y_axis = stand_a_y;

                  console.log("test7");
                  console.log(modeDetails);

                  for (var fly = 0; fly < modeDetails.length; fly++) { //  mode Details Info
                    y_axis += 17;
                    x_axis = 400;
                    var modeDetailsInfo = modeDetails[fly];
                    for (var v in modeDetailsInfo) {
                      const splitWidth = String(modeDetailsInfo[v]).split('-');
                      pdfDoc
                        .text(v, x_axis, y_axis, {
                          fontSize: 7,
                          bold: true,
                          font: 'Helvatica',
                          align: 'center center',
                          opacity: 0.8,
                          textBox: {
                            width: parseInt(splitWidth[0]),
                            lineHeight: 6,
                            padding: [5, 5],
                            style: {
                              lineWidth: 1,
                              stroke: '#191919',
                              opacity: 0.1
                            }
                          }
                        });
                      x_axis = x_axis + parseInt(splitWidth[1]);
                    }
                  }

                  console.log("test8");


                  y_axis = stand_b_y + 30
                  x_axis = 65;
                  pdfDoc.text("Rules and Regulations", x_axis, y_axis, {
                    fontSize: 10,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8,
                    underline: true
                  });
                  x_axis = 140;
                  y_axis = y_axis + 15
                  pdfDoc.text("o All Passengers must carry a Valid Photo Identity Proof at the time of Check In.", x_axis, y_axis, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  x_axis = 187;
                  y_axis = y_axis + 10
                  pdfDoc.text("o Check in Gates opens 2hours prior to scheduled departure and closes strictly 60 minutes prior to departure.", x_axis, y_axis, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  x_axis = 185;
                  y_axis = y_axis + 10
                  pdfDoc.text("o Flight timings are subject to change without prior notice. Please recheck with the carrier prior to departure.", x_axis, y_axis, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  x_axis = 132;
                  y_axis = y_axis + 10
                  pdfDoc.text("o For Fare Rules / Cancellation policy- refer to fare rules laid by the carrier.", x_axis, y_axis, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  x_axis = 112;
                  y_axis = y_axis + 10
                  pdfDoc.text("o Please refer to the Conditions of Carriage laid by the carrier.", x_axis, y_axis, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });

                  y_axis = y_axis + 20
                  x_axis = 75;
                  pdfDoc.text("Airline Contact information", x_axis, y_axis, {
                    fontSize: 10,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8,
                    underline: true
                  });
                  x_axis = 68;
                  y_axis = y_axis + 15
                  pdfDoc.text("http://www.spicejet.com/tnc.asp", x_axis, y_axis, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });

                  x_axis = 176;
                  y_axis = y_axis + 10
                  pdfDoc.text("Please reference the Airline PNR Number when communicating with the airline regarding this booking.", x_axis, y_axis, {
                    fontSize: 7,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });

                  y_axis = y_axis + 30
                  pdfDoc.text("** THANK YOU FOR BOOKING WITH US **", "center", y_axis, {
                    fontSize: 14,
                    bold: true,
                    font: 'Helvatica',
                    align: 'center center',
                    opacity: 0.8
                  });
                  pdfDoc.endPage().endPDF();

                  console.log("test9");

                  var filepath = path.join(__dirname, 'flighttickets', 'flight_' + attachNumber + '.pdf');
                  var datasend = {
                    from: 'noreply@trip360.in',
                    to: emailId,
                    subject: 'Flight Ticket',
                    text: 'PFA',
                    attachment: filepath
                  };

                  mailgun.messages().send(datasend, function (error, body) {
                    count += 1;
                    if (data.length === count) {
                      var len1 = flightDetailsFE.length;
                      var len2 = PassengerDetailsFE.length;
                      var count1 = 0;
                      var count2 = 0;
                      for (var j = 0; j < flightDetailsFE.length; j++) {
                        // let obj = {};
                        var origin = String(flightDetailsFE[j].origin);
                        var destination = String(flightDetailsFE[j].destination);
                        var originCode = String(flightDetailsFE[j].originCode);
                        var destinationCode = String(flightDetailsFE[j].destinationCode);
                        var flightNumber = String(flightDetailsFE[j].flightNumber);
                        var depatureTime = String(flightDetailsFE[j].depatureTime);
                        var arrivalTime = String(flightDetailsFE[j].arrivalTime);
                        var cls = String(flightDetailsFE[j].class);
                        var fareBasis = String(flightDetailsFE[j].fareBasis);
                        var operatedBy = String(flightDetailsFE[j].operatedBy);
                        var depatureTerminal = String(flightDetailsFE[j].depatureTerminal);
                        var arrivalTerminal = String(flightDetailsFE[j].arrivalTerminal);

                        var sql1 = 'INSERT INTO trip360.flightdetail_tbl' +
                          '(origin,destination,flightNumber,depatureTime,arrivalTime,class,' +
                          'fareBasis,operatedBy,' +
                          'arrivalTerminal,depatureTerminal,tPNR,userid,Ocode,Dcode)VALUES(' +
                          ' "' + origin + '" ,"' + destination + '"  ,"' + flightNumber + '", ' +
                          ' "' + depatureTime + '" ,"' + arrivalTime + '"  ,"' + cls + '", ' +
                          ' "' + fareBasis + '" ,"' + operatedBy + '" , ' +
                          ' "' + arrivalTerminal + '" ,"' + depatureTerminal + '"  ,"' + parseInt(TPNRID) + '", ' +
                          ' "' + parseInt(dataTotal.userid) + '","' + originCode + '" ,"' + destinationCode + '" )';

                        con.connect(function (err) {
                          console.log(sql1);
                          con.query(sql1, function (err, result) {

                            if (err) {
                              response.send({ data: { error: "Database connection failure" } });
                            } else {
                              count1 += 1;
                              if (len1 == count1) {

                                for (var v = 0; v < PassengerDetailsFE.length; v++) {
                                  let obj = [];
                                  var firstname = String(PassengerDetailsFE[v].firstname);
                                  var middlename = String(PassengerDetailsFE[v].middlename);
                                  var lastname = String(PassengerDetailsFE[v].lastname);
                                  var title = String(PassengerDetailsFE[v].title);

                                  var name = String(PassengerDetailsFE[v].name);
                                  var type = String(PassengerDetailsFE[v].type);
                                  var ticketNumber = String(PassengerDetailsFE[v].ticketNumber);
                                  var FF = String(PassengerDetailsFE[v].FF) == 'FF' ? '0' : String(PassengerDetailsFE[v].FF);
                                  var mealCode = String(PassengerDetailsFE[v].mealCode) == 'mealCode' ? '' : String(PassengerDetailsFE[v].mealCode);
                                  var basic = String(PassengerDetailsFE[v].basic);
                                  var fuel = String(PassengerDetailsFE[v].fuel) == 'fuel' ? '0' : String(PassengerDetailsFE[v].fuel);
                                  var JN = String(PassengerDetailsFE[v].JN) == 'JN' ? '0' : String(PassengerDetailsFE[v].JN);
                                  var mls = String(PassengerDetailsFE[v].meals) == 'meals' ? '0' : String(PassengerDetailsFE[v].meals);
                                  var bag = String(PassengerDetailsFE[v].baggage) == 'baggage' ? '' : String(PassengerDetailsFE[v].baggage);
                                  var seat = String(PassengerDetailsFE[v].seat) == 'seat' ? '' : String(PassengerDetailsFE[v].seat);
                                  var taxes = String(PassengerDetailsFE[v].taxes);
                                  var grs = String(PassengerDetailsFE[v].gross);
                                  var bgs = String(PassengerDetailsFE[v].bgs);

                                  var sql2 = ' INSERT INTO trip360.passengers_tbl' +
                                    '(tPNR,firstname,middlename,' +
                                    'lastname,title,type,ticketNumber,' +
                                    'FF,mealCode,basic,' +
                                    'JN,meals,baggage,seat,' +
                                    'taxes,bgs,gross,userid,fuel)VALUES(' +
                                    ' "' + parseInt(TPNRID) + '" ,"' + firstname + '"  ,"' + middlename + '" ,' +
                                    ' "' + lastname + '" ,"' + title + '"  ,"' + type + '" ,' +
                                    ' "' + ticketNumber + '" ,"' + FF + '" , ' +
                                    ' "' + mealCode + '" ,"' + parseFloat(basic) + '"  ,"' + parseFloat(JN) + '" ,' +
                                    ' "' + mls + '" ,"' + bag + '"  ,"' + seat + '", ' +
                                    ' "' + parseFloat(taxes) + '" ,"' + bgs + '"  ,"' + parseFloat(grs) + '" ,' +
                                    ' "' + parseInt(dataTotal.userid) + '", "' + parseFloat(fuel) + '")';

                                  con.connect(function (err) {
                                    console.log(sql2);
                                    con.query(sql2, function (err, result) {
                                      if (err) {
                                        response.send({ data: { error: "Database connection failure" } });
                                      } else {
                                        count2 += 1;
                                        if (len2 == count2) {
                                          response.send({ data: 'Success' });
                                        }
                                      }
                                    })
                                  });
                                }
                              }
                            }
                          })
                        });
                      }
                    }
                  });
                }
              });
            });
          }
        });
      });
    }
  })
})

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'))
})
