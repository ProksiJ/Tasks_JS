fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
  .then(response => response.json())
  .then(result => {
    if(result.getUsersData == true){
      fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
      .then(response => response.json())
      .then(result =>console.log(result))
    }
  })
