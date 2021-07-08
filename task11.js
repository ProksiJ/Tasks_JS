function getResolvedPromise (status) {
    return new Promise((resolve, reject) => {
        if (status > 300) { 
            reject(status)
        }else resolve(status)
})
    .finally(() => console.log("Promise done"))
}

getResolvedPromise(400)