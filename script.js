function trailingZeros(n) {
  //your JS code here. If required.
	let cnt=0;

	while(n>4){
		cnt++;
		n-=5;
	}
 return cnt;
}
const input = prompt("Enter a number");
alert(trailingZeros(input));
