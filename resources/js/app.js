
const country_name_element=document.querySelector(".country .name");
const total_cases_element=document.querySelector(".total-cases .value");
const new_cases_element=document.querySelector(".total-cases .new-value");
const recovered_element=document.querySelector(".recovered .value");
const new_recovered_element=document.querySelector(".recovered .new-value");
const deaths_element=document.querySelector(".deaths .value");
const new_deaths_element=document.querySelector(".deaths .new-value");

let app_data=[],
	cases_list=[],
	recovered_list=[],
	deaths_list=[],
	dates=[];

//Default country is India
	
let user_country="India";	
console.log(user_country);

function fetchData(user_country){
	cases_list=[];
	recovered_list=[];
	deaths_list=[];
	dates=[];

fetch(`https://corona.lmao.ninja/v2/countries/${user_country}`)
.then((response)=>{
	return response.json();
})
.then((data)=>{
	document.getElementById("countryy").innerHTML=data.country;
	document.getElementById("valuee").innerHTML=data.cases;
	document.getElementById("new-valuee").innerHTML=data.todayCases;
	document.getElementById("deathss").innerHTML=data.deaths;
	document.getElementById("new-deathss").innerHTML=data.todayDeaths;
	document.getElementById("recoveredd").innerHTML=data.recovered;
	document.getElementById("new-recovered").innerHTML=data.todayRecovered;
	document.getElementById("actives").innerHTML=data.active;
	document.getElementById("tests").innerHTML=data.tests;
	document.getElementById("critic").innerHTML=data.critical;
	dates=Object.keys(data);
		console.log("Dates= "+dates);
		dates.forEach(date =>{
			let DATA=data[date];
			app_data.push(DATA);
			cases_list.push(parseInt(DATA.cases));
			recovered_list.push(parseInt(DATA.recovered));
			deaths_list.push(parseInt(DATA.total_deaths));
		})
})
	
	.catch(error =>{
		alert(error);
	})
}

fetchData(user_country);
