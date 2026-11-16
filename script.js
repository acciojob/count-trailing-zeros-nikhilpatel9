function trailingZeros(n) {
  //your JS code here. If required.
	    n = Number(n);              // Fix Bug 1: coerce prompt() string to number
    if (!Number.isInteger(n) || n < 0) return 0;

	let cnt=0;

	while(n>4){
		cnt++;
		n-=5;
	}
 return cnt;
}
const input = prompt("Enter a number");
alert(trailingZeros(input));
