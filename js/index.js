const dataTemp = [];
const dataTime = [];
const dataKelembaban = [];
const dataAir = [];
const data = firebase.database().ref("user").child("data");
x=0;
data.on('child_added', function(snapshot) {
	temp = snapshot.child("temperature").val();
	kelembaban = snapshot.child("kelembaban").val();
	air = snapshot.child("kadar air").val();
	dataTemp.push(temp);
	dataKelembaban.push(kelembaban);
	dataAir.push(air);
	dataTime.push(x);
	x=x+1
	chart1.render()
	chart2.render();
	chart3.render();
});

var options1 = {
  chart: {
	height: 350,
	type: 'line',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	curve: 'straight',
	colors: "#ff0000"
  },
  series: [{
	name: "Desktops",
	data: dataTemp,
  }],
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: dataTime,
  }
}
var chart1 = new ApexCharts(
  document.querySelector("#chart1"),
  options1
);


//graph 2
var options2 = {
  chart: {
	height: 350,
	type: 'line',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	curve: 'straight',
	colors: "#ffa500"
  },
  series: [{
	name: "Desktops",
	data: dataKelembaban,
  }],
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: dataTime,
  }
}
var chart2 = new ApexCharts(
  document.querySelector("#chart2"),
  options2
);


//graph 3
var options3 = {
  chart: {
	height: 350,
	type: 'line',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  stroke: {
	curve: 'straight'
  },
  series: [{
	name: "Desktops",
	data: dataAir,
  }],
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: dataTime,
  }
}
var chart3 = new ApexCharts(
  document.querySelector("#chart3"),
  options3
);

chart1.render();
chart2.render();
chart3.render();



