const myCountPromise = (input) => {
    return new Promise((resolve, reject) => {
      if (input !== undefined) {
        setTimeout(() => {
          resolve(input * 2);
        }, 2000);
      } else {
        reject("Maaf tidak ada nilai dalam parameter");
      }
    });
  };
  
  myCountPromise(2)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });

    
