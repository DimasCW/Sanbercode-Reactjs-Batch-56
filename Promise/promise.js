const myCountPromise = (kali) => {
    return new Promise((resolve, reject) => {
        if (kali !== undefined){
            setTimeout(() => {
                resolve(kali * 2)
            },2000)
            
        }else{
            reject("Maaf tidak ada nilai didalam parameter")
        }
    })
}

myCountPromise(2)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })