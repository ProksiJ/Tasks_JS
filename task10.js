async function request(urls){
    console.time('request')
    let requests = urls.map(url => fetch(url));
    await Promise.all(requests)
        .then(responses => responses.forEach(
        response => console.log(`${response.url}: ${response.status}`)
    ));
    console.timeEnd('request')
}

const url = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK'
];

request(url)
