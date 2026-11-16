function trailingZeros(n) {
  //your JS code here. If required.
	let cnt=0;
	while(n!=0){
		let t=n%10;
		if(t==0){
			cnt++;
		}else{
			break;
		}
		n=Math.floor(n/10);
	}
	alert(cnt);
	
}
const input = prompt("Enter a number");
alert(trailingZeros(input));
