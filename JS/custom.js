// javaScript input

var a,b,c,sum,avg;
a=prompt("enter 1 subject marks");
b=prompt("enter 2 subject marks");
c=prompt("enter 3 subject marks");
sum=eval(a)+eval(b)+eval(c);
document.write("the sum is"+sum+"<br>");
avg=sum/3;
document.write("the perceentage is "+avg+"<br>");
if (avg>=75){
    document.write("A grade");
}
else if (avg>=60){
    document.write("B grade");
}
else if (avg>=45){
    document.write("C grade");
}
else if (avg>=30){
    document.write("Pass");
}
else {
    document.write("fail");
}
