//your JS code here. If required.
const readline=require('readline');
const r1=readlne.createinterface({input:process.stdin,output:process.stdout});
r1.on('line',(year)=>
	{
		let y=year;
		if (y%4==0)
		{
		console.log("366")	;
		}
		else
			console.log("365");
	});