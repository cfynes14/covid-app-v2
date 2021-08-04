
// const Regional = {
//     search(){
//         fetch("https://covid-19-uk-data-by-zt.p.rapidapi.com/GetUKRegionWiseData", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "a43dcbe605mshbd9068b7ca09398p1b0658jsndae6b6dcb0f8",
//             "x-rapidapi-host": "covid-19-uk-data-by-zt.p.rapidapi.com"
//         }
//     })
//     .then(response => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.error(err);
//     });
//     }
// }

const http = require("https");

const options = {
	"method": "GET",
	"hostname": "covid-19-uk-data-by-zt.p.rapidapi.com",
	"port": null,
	"path": "/GetUKUTLAWiseData",
	"headers": {
		"x-rapidapi-key": "a43dcbe605mshbd9068b7ca09398p1b0658jsndae6b6dcb0f8",
		"x-rapidapi-host": "covid-19-uk-data-by-zt.p.rapidapi.com",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		//console.log(body.toString());
	});
});

req.end();