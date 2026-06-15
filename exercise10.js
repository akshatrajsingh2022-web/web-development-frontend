//first gap= a1 b1 c1
//sec gap =a2 b2 c2
//third gap=a3 b3 c3
let first;
let second;
let third;
let rand1= Math.random();
let rand2= Math.random();
let rand3= Math.random();
// 0.33_0.66_1
//for first gap
if(rand1<0.33) first="a1";
else if(rand1>+0.33&&rand1<=0.66) first="a3";
else first="a3";

if(rand2<0.33) second="b1";
else if(rand2>+0.33&&rand2<=0.66) second="b2";
else second="b3";

if(rand3<0.33) third="c1";
else if(rand3>+0.33&&rand3<=0.66) third="c2";
else third="c3";
console.log(first,second,third);