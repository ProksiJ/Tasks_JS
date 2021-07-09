function delay(delay){
    return new Promise((resolve) => {
        setTimeout(() => resolve(delay), delay);
      });
}
delay(1000).then(value => console.log(`Done with ${value}`));
