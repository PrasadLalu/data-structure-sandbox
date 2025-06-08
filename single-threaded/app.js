
function addSync(a, b) {
    return a + b;
}

console.log('--Start Synchronous--');
const syncResult = addSync(10, 20);
console.log(syncResult);
console.log('--End Asynchronous--');
console.log('\n\n\n');

function addAsync(a, b, callback) {
    setTimeout(() => {
        let result = a + b;
        callback(result);
    }, 0);
}


console.log('--Start Asynchronous--');

addAsync(10, 20, (result) => {
    console.log(result);
});

console.log('--End Asynchronous--');

function addPromise(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b);
      }, 0)
    })
  }
  
  console.log('Start')
  addPromise(10, 20).then(res => console.log(res));
  console.log('End')
