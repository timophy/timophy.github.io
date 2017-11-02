//stage 1
var uimod_clipmakerRate = 0;
var uimod_avgSales = 0;
var uimod_unsoldClips = 0;
//stage 2
var uimod_powerConsumptionRate = 0;
var uimod_powerProductionRate = 0;
var uimod_storedPower = 0;
var uimod_maxStorage = 0;
var uimod_acquiredMatterDisplay = 0;
var uimod_nanoWire = 0;
var uimod_performance = 0;


function uimod_ready() {
	displayMessage("<span style='color:green'>[Universal Paperclip UI Mod]</span> V3 (Nov 2nd, 2017) by Timophy")
	displayMessage("<span style='color:green'>[Universal Paperclip UI Mod]</span> Loaded")

	//every 1 second
	setInterval(function() {
		//get current values
		uimod_clipmakerRate = parseInt(document.getElementById('clipmakerRate').innerHTML.replace(/,/g , ""));
		uimod_avgSales = parseInt(document.getElementById('avgSales').innerHTML.replace(/,/g , ""));
		uimod_unsoldClips = parseInt(document.getElementById('unsoldClips').innerHTML.replace(/,/g , ""));

		//highlight low inventory (less than 10x the rate that you make paperclips)
		if(uimod_unsoldClips < uimod_clipmakerRate * 10) {
			document.getElementById('unsoldClips').style.backgroundColor = "rgb(255, 210, 210)"; //light red
		} else {
			document.getElementById('unsoldClips').style.backgroundColor = "rgb(210, 255, 210)"; //light green
		}

		//highlight sales per sec
		if((uimod_avgSales / uimod_clipmakerRate) < 0.9) {
			document.getElementById('avgSales').style.backgroundColor = "rgb(210, 255, 210)"; //light green
			document.getElementById('avgSales').style.color = "rgb(0, 0, 0)";
		} else if((uimod_avgSales / uimod_clipmakerRate) <= 1.0) {
			document.getElementById('avgSales').style.backgroundColor = "rgb(220, 210, 255)"; //light blue
			document.getElementById('avgSales').style.color = "rgb(0, 0, 0)";
		} else if((uimod_avgSales / uimod_clipmakerRate) <= 1.3) {
			document.getElementById('avgSales').style.backgroundColor = "rgb(255, 210, 210)"; //light red
			document.getElementById('avgSales').style.color = "rgb(0, 0, 0)";
		} else {
			document.getElementById('avgSales').style.backgroundColor = "rgb(255, 30, 30)"; //dark red
			document.getElementById('avgSales').style.color = "rgb(255, 255, 255)";
		}



		//get current values - 2nd stage
		uimod_powerConsumptionRate = parseInt(document.getElementById('powerConsumptionRate').innerHTML.replace(/,/g , ""));
		uimod_powerProductionRate = parseInt(document.getElementById('powerProductionRate').innerHTML.replace(/,/g , ""));
		uimod_storedPower = parseInt(document.getElementById('storedPower').innerHTML.replace(/,/g , ""));
		uimod_maxStorage = parseInt(document.getElementById('maxStorage').innerHTML.replace(/,/g , ""));
		uimod_maxStorage = parseInt(document.getElementById('maxStorage').innerHTML.replace(/,/g , ""));
		uimod_acquiredMatterDisplay = parseInt(document.getElementById('acquiredMatterDisplay').innerHTML.replace(/,/g , ""));
		uimod_nanoWire = parseInt(document.getElementById('nanoWire').innerHTML.replace(/,/g , ""));
		uimod_performance = parseInt(document.getElementById('performance').innerHTML.replace(/,/g , ""));

		//highlight power consumtion
		if((uimod_powerProductionRate / uimod_powerConsumptionRate) > 1.25) {
			document.getElementById('powerProductionRate').style.backgroundColor = "rgb(150, 255, 150)"; //green
		} else if((uimod_powerProductionRate / uimod_powerConsumptionRate) >= 1) {
			document.getElementById('powerProductionRate').style.backgroundColor = "rgb(210, 255, 210)"; //light green
		} else {
			document.getElementById('powerProductionRate').style.backgroundColor = "rgb(255, 150, 150)"; //red
		}

		//highlight power storage
		if((uimod_storedPower / uimod_maxStorage) >= 0.9) {
			document.getElementById('storedPower').style.backgroundColor = "rgb(150, 255, 150)"; //green
		} else if((uimod_storedPower / uimod_maxStorage) >= 0.5) {
			document.getElementById('storedPower').style.backgroundColor = "rgb(210, 255, 210)"; //light green
		} else if((uimod_storedPower / uimod_maxStorage) >= 0.1) {
			document.getElementById('storedPower').style.backgroundColor = "rgb(255, 210, 210)"; //light red
		} else {
			document.getElementById('storedPower').style.backgroundColor = "rgb(255, 150, 150)"; //red
		}

		//highlight 0 resources
		if(uimod_acquiredMatterDisplay == 0) {
			document.getElementById('acquiredMatterDisplay').style.backgroundColor = "rgb(255, 150, 150)"; //red
		} else {
			document.getElementById('acquiredMatterDisplay').style.backgroundColor = "rgb(150, 255, 150)"; //green
		}

		if(uimod_nanoWire == 0) {
			document.getElementById('nanoWire').style.backgroundColor = "rgb(255, 150, 150)"; //red
		} else {
			document.getElementById('nanoWire').style.backgroundColor = "rgb(150, 255, 150)"; //green
		}

		//highlight performance
		if(uimod_performance < 100) {
			document.getElementById('performance').style.backgroundColor = "rgb(255, 150, 150)"; //red
		} else {
			document.getElementById('performance').style.backgroundColor = "rgb(150, 255, 150)"; //green
		}

	}, 1000);
}

if (document.readyState !== 'loading') {
	uimod_ready()
} else {
	document.addEventListener('DOMContentLoaded', uimod_ready)
}
