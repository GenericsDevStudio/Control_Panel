assets/demo/demo.js

Чтобы сменить данные графиков:

1. chartLinePurple: смените значения data в var data

Example: var data = {
	labels:
	datasets:[{
		...
		...
		data: [80, 100, 70, 80, 120, 80],  //строка 377
	}]
};

2. chartLineGreen: По анологии с первым

Example: var data = {
	labels:
	datasets:[{
		...
		...
		data: [80, 100, 70, 80, 120, 80],  //строка 413
	}]
};

3. CountryChart: По анологии с предыдущими

Example: var myChart = {
	data:{
		labels:
		datasets:[{
			...
			...
			data: [80, 100, 70, 80, 120, 80],  //строка 455
		}]
	},
};

4. chartBig1: смените значения в массиве chart_data

Example: 
	var chart_data = [0, 0, 45, 16, 0, 20, 0, 0, 0, 0, 0, 0];  //строка 461
