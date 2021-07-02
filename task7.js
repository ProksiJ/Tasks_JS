function delay(delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), delay);
      });
}
let value = 10
delay(3000).then(value => console.log(`Done with ${value}`));
