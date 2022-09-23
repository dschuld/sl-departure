
fetch('https://no84anjvv1.execute-api.eu-central-1.amazonaws.com/Prod/hello?siteId=9509')
.then((response) => response.json())
  .then((data) => (Date.parse(data["ResponseData"]["Trains"][0].ExpectedDateTime)- Date.now()) / 60000)
  .then(data => console.log(Math.ceil(data) + "(" + data + ")" ));

  console.log('test')