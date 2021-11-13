

// const getVar = () => {
// 	setTimeout(function(){
// 		console.log('A Function Take some time');
// 	}, 3000)
// }
// const printSomething = () => {
// 	console.log('Another Function');
// }
// getVar();
// printSomething();
// const getVarC = (callback) => {
// 	setTimeout(function() {
// 	   console.log('A Function that takes some time');
// 	   callback();
// 	}, 3000)
//  }
 
//  const printSomethingC = () => {
// 	console.log('Another Function');
//  }
 
//  getVarC(printSomethingC);
const aPromise = control => { 
	return new Promise((resolve, reject) => {
	   setTimeout(() => {
		  if(control) {
			 resolve();
		  } else {
			 reject();
		  }
	   }, 3000)
	})
 }
 aPromise(false)
  .then(() => {
     console.log('This is a Success');
  })
  .catch(() => {
     console.log('This is a Failure');
  })