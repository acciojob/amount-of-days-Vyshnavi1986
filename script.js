//your JS code here. If required.
const readline=require('readline');
const r1=readlne.createinterface({input:process.stdin,output:process.stdout});
r1.on('line',(year)=>
	{
		let y=year;
		if (y%4==0)
		{
		window.alert("366")	;
		}
		else
			window.alert("365");
	});