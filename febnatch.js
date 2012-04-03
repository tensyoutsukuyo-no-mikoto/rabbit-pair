// gizumoさん、中身を改変させていただきました。
// var x=0;
// var y=1;
var month = 1;
var years = 0;
var number_of_pairs = 1;
var before_number_of_pairs = 0;
while(years < 2){
	// x=x+y;
	// y=x+y;
	// console.log(x,y);

	if(month > 12){
		years = years + 1;
		month = 1;
	}

	var b = number_of_pairs;
	number_of_pairs
          = number_of_pairs + before_number_of_pairs;
	before_number_of_pairs = b;

	console.log("years:" + years);
        console.log("month:" + month);
	console.log("number_of_pairs:" + number_of_pairs);
	console.log("before_number_of_pairs:" + before_number_of_pairs);
	console.log("");

	month = month + 1;

}