function promiseA() {
    return new Promise(function (resolve, reject) {
        //cal service return 1
        setTimeout(function () {
            console.log('*Promis a');
            console.log('input : null');
            console.log('output : ' + '1');
            resolve(1);
        }, 2000);
    });
}
function promiseB(input) {
    return new Promise(function (resolve, reject) {
        //calservice 
        setTimeout(function () {
            console.log('*Promis b');
            console.log('input : ' + input.toString());
            var output = input.toString() + 'b';
            console.log('output : ' + output);
            resolve(output);
        }, 2000);
    });
}
function promiseC(input) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('*Promis c');
            console.log('input : ' + input);
            var output = input + 'c';
            console.log('output : ' + input);
            resolve(output);
        }, 4000);
    });
}
function task1() {
    promiseA().then(function (valA) {
        return promiseB(valA);
    }).then(function (valB) {
        return promiseC(valB);
    }).then(function (valC) {
        console.log("Result : " + valC);
    });
}
function task2() {
    var promA = promiseA();
    promA.then(function (valA) {
        return promiseC(valA);
    }).then(function (result) {
        console.log("Result C : " + result);
    });
    promA.then(function (valA) {
        return promiseB(valA);
    }).then(function (result) {
        console.log("Result B : " + result);
    });
}
function promiseD(results) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('*Promis d');
            console.log('input : ' + results[0].toString() + results[1].toString() + results[2].toString());
            var output = results[0].toString() + results[1].toString() + results[2].toString() + 'd';
            console.log('output : ' + output);
            resolve(output);
        }, 1000);
    });
}
function task3() {
    var promA = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 1);
    });
    var promB = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 2);
    });
    var promC = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'c');
    });
    var reject = new Promise(function (resolve, reject) {
        reject("reject");
    });
    var promD = Promise.all([promA, promB, promC]).then(function (results) {
        return promiseD(results);
    }, function (reason) {
        console.log(reason);
    }).then(function (output) {
        console.log("Result : " + output);
    });
}

function task4() {
    var promA = new Promise(function (resolve, reject) {
        setTimeout(resolve, 100, 'a');
    });
    var outB = promA.then(function (outputA) {
        console.log(outputA);
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, 'b');
        });
    });
    outB.then(function (outputB) {
        console.log(outputB);
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 2000, 'c');
        });
    }).then(function (outputC) {
        console.log(outputC);
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, 'e');
        });
    }).then(function (outputE) {
        console.log(outputE);
    });
    var outD = outB.then(function (outputB) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, 'd');
        });
    }).then(function (outputD) {
        console.log(outputD);
    });
    outD.then(function (outputD) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 1000, 'f');
        });
    }).then(function (outputF) {
        console.log(outputF);
    });
    outD.then(function (outputD) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, 'g');
        });
    }).then(function (outputG) {
        console.log(outputG);
    });
}
/*  ===============      Task  5  ========================== */


function task5() {
    var promiA = new Promise(function (resolve, reject) {
        setTimeout(resolve, 3000, 'a');
    });
    var reject = new Promise(function (resolve, reject) {
        reject("reject");
    });
    var promiB = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'b');
    });
    var promiC = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'c');
    });
    var promiD = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'd');
    });
   
    var promiH = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'h');      
        
    });
    var promiG = new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'g');
    });
    
    var outThree = promiA.then(function (outputA) {
        console.log(outputA);
        return  Promise.all([promiB, promiC, promiD]).then(function (outPutThree) {
                return outPutThree[0] + outPutThree[1] + outPutThree[2];
    });
    }).then(function (outPutThree) {
        console.log(outPutThree);
        return new Promise(function (resolve, reject) {
          setTimeout(resolve, 1000, 'e');
         }); 
    }).then(function (outPutE) {
        console.log(outPutE);
        return new Promise(function (resolve, reject) {
        setTimeout(resolve, 1000, 'f');
    });
    }).then(function (outPutF) {
          console.log(outPutF);  
        //   return [promiH, promiG];
          return [new Promise(function (resolve, reject) {
                     setTimeout(resolve, 1000, 'h');      
        
                 }), new Promise(function (resolve, reject) {
                    setTimeout(resolve, 1000, 'g');
              })]
    }).then(function (outPutH_G) {
       console.log(outPutH_G[0]._handler);
       console.log(outPutH_G[1]._handler);
        
        return new Promise(function (resolve, reject) {
                setTimeout(resolve, 1000, 'i');
         });
    }).then(function (outPutI) {
        console.log(outPutI);
    });
  
    promisG
}
task5();

