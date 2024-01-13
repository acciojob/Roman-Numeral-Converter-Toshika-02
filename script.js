function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	 for (let i = 0; i < obj.length; i++) {
        let currentVal = obj[i][1];
        if (currentVal === num) {
            return obj[i];
        }
        if (currentVal > num) {
            return obj[i - 1];
        }
    }

    return obj[obj.length - 1];
}

let r = convertToRoman(383939);

let n = 34, ans = "";

while (n != 0) {
    let roman = convertToRoman(n);
    // n = 12
    // getClosestRepresentation(12) => roman = [ "X" , 10 ]
    ans += roman[0]; // ans += "X" 
    n -= roman[1] // n = 12 - 10 = 2
}
console.log(ans);

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

 console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
