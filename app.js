var express = require("express"); //requiring express module
var app = express(); //creating express instance
var fs = require("fs"); //require fs(file system) module
var request = require("request"); //requiring request module
var headers = {
    'Content-Type': 'application/jose',
    'Accept': 'application/jose',
    'BD-Traceid':'1723817310ABCD',
    'BD-Timestamp':'1723817310'
};
var result;
var dataString = 'eyJhbGciOiJIUzI1NiIsImNsaWVudGlkIjoidWZvc3NnZW52MiJ9.ewoibWVyY2lkIjoiVUZPU1NHRU5WMiIsCiJvcmRlcmlkIjoiVUFUTTR4Y2RmcmRyZmRkIiwKImFtb3VudCI6IjEwMC4wMCIsCiJvcmRlcl9kYXRlIjoiMjAyNC0wMi0yMFQxMDoxMjowMCswNTozMCIsCiJjdXJyZW5jeSI6IjM1NiIsCiJydSI6Imh0dHBzOi8vd3d3Lm1lcmNoYW50LmNvbS8iLAoiYWRkaXRpb25hbF9pbmZvIjp7CiAgImFkZGl0aW9uYWxfaW5mbzEiOiJUZXN0IiwKICAiYWRkaXRpb25hbF9pbmZvMiI6IlRlc3QxIgogIH0sCiJpdGVtY29kZSI6IkRJUkVDVCIsCiJkZXZpY2UiOnsKICAiaW5pdF9jaGFubmVsIjoiaW50ZXJuZXQiLAogICJpcCI6Ijc2Ljc2LjIxLjIxIiwKICAidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wKFdpbmRvd3NOVDEwLjA7V09XNjQ7cnY6NTEuMClHZWNrby8yMDEwMDEwMUZpcmVmb3gvNTEuMCIsCiAgImFjY2VwdF9oZWFkZXIiOiJ0ZXh0L2h0bWwiLAogICJicm93c2VyX3R6IjoiLTMzMCIsCiAgImJyb3dzZXJfY29sb3JfZGVwdGgiOiIzMiIsCiAgImJyb3dzZXJfamF2YV9lbmFibGVkIjoiZmFsc2UiLAogICJicm93c2VyX3NjcmVlbl9oZWlnaHQiOiI2MDEiLAogICJicm93c2VyX3NjcmVlbl93aWR0aCI6IjY1NyIsCiAgImJyb3dzZXJfbGFuZ3VhZ2UiOiJlbi1VUyIsCiAgImJyb3dzZXJfamF2YXNjcmlwdF9lbmFibGVkIjoidHJ1ZSIKICB9Cn0.TCSShBWnGC9_NzZ1xgDJDP9DUdJzN2qNLoyzBNoGIN8';

var options = {
    url: 'https://uat1.billdesk.com/u2/payments/ve1_2/orders/create',
    method: 'POST',
    headers: headers,
    body: dataString
};

function callback(error, response, body) {

    if (!error && response.statusCode == 200) {
        console.log(body);
        result=body;
    }else{
        console.log(response.body);
        result=response.body;
    }
   // return result;

}



app.get("/check", function(req, res) {
    console.log('called');
    
 //calling request function
 //request(options, callback);
 postData(res);


});

app.listen(3000, function() {
 console.log("Node server is running..");
});

async function postData(res) {
    //This data will be sent to the server with the POST request.
  
  
    const options = {
      method: 'POST',
      body: dataString,
      headers: { 
        'Content-Type': 'application/jose',
        'Accept': 'application/jose',
        'BD-Traceid':'1723817310ABCD',
        'BD-Timestamp':'1723817310'
    }
    }
  
    const url = 'https://uat1.billdesk.com/u2/payments/ve1_2/orders/create';
  
    try {
      const response = await fetch(url, options)
      const jsonResponse = await response.text();
      res.writeHead(200, {'Content-Type': 'application/jose'});
      console.log('JSON response', jsonResponse);
     // const jsonresponse2=JSON.parse(jsonResponse);
    res.write(jsonResponse);
    res.write('end');
    res.end();
      console.log('JSON response', jsonResponse);
    } catch(err) {
      console.log('ERROR', err);
    }
  }











//curl -d 'eyJhbGciOiJIUzI1NiIsImNsaWVudGlkIjoidWZvc3NnZW52MiJ9.ewoibWVyY2lkIjoiVUZPU1NHRU5WMiIsCiJvcmRlcmlkIjoiVUFUTTR4Y2RmcmRyZmRkIiwKImFtb3VudCI6IjEwMC4wMCIsCiJvcmRlcl9kYXRlIjoiMjAyNC0wMi0yMFQxMDoxMjowMCswNTozMCIsCiJjdXJyZW5jeSI6IjM1NiIsCiJydSI6Imh0dHBzOi8vd3d3Lm1lcmNoYW50LmNvbS8iLAoiYWRkaXRpb25hbF9pbmZvIjp7CiAgImFkZGl0aW9uYWxfaW5mbzEiOiJUZXN0IiwKICAiYWRkaXRpb25hbF9pbmZvMiI6IlRlc3QxIgogIH0sCiJpdGVtY29kZSI6IkRJUkVDVCIsCiJkZXZpY2UiOnsKICAiaW5pdF9jaGFubmVsIjoiaW50ZXJuZXQiLAogICJpcCI6Ijc2Ljc2LjIxLjIxIiwKICAidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wKFdpbmRvd3NOVDEwLjA7V09XNjQ7cnY6NTEuMClHZWNrby8yMDEwMDEwMUZpcmVmb3gvNTEuMCIsCiAgImFjY2VwdF9oZWFkZXIiOiJ0ZXh0L2h0bWwiLAogICJicm93c2VyX3R6IjoiLTMzMCIsCiAgImJyb3dzZXJfY29sb3JfZGVwdGgiOiIzMiIsCiAgImJyb3dzZXJfamF2YV9lbmFibGVkIjoiZmFsc2UiLAogICJicm93c2VyX3NjcmVlbl9oZWlnaHQiOiI2MDEiLAogICJicm93c2VyX3NjcmVlbl93aWR0aCI6IjY1NyIsCiAgImJyb3dzZXJfbGFuZ3VhZ2UiOiJlbi1VUyIsCiAgImJyb3dzZXJfamF2YXNjcmlwdF9lbmFibGVkIjoidHJ1ZSIKICB9Cn0.TCSShBWnGC9_NzZ1xgDJDP9DUdJzN2qNLoyzBNoGIN8' -H 'Content-Type: application/jose' -H 'Accept: application/jose'  -X POST https://uat1.billdesk.com/u2/payments/ve1_2/orders/create
