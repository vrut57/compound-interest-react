var React = require('react');

var chart = React.createClass({
	componentDidUpdate: function(){
		console.log("draw on the canvas");

			console.log("In Chart");
			

		//Complete array with data 
		var dataToPaint = [];
		for(var i = 0; i < this.props.data.length; i++){		
			var thisDeposit = 0;
			if(!!dataToPaint[i - 1]){
				thisDeposit = (+dataToPaint[i - 1].balance * 1.06) + +this.props.data[i];
			}
			else{
				thisDeposit = +this.props.data[i];
			}

			dataToPaint.push({
				time: i,
				balance: thisDeposit
			})
		}

		console.log(dataToPaint);

		d3.select(".graph-container").selectAll("*").remove();


		var g = d3.select(".graph-container")
					.append("g")
					.attr("transform", "translate(50, 50)");

		console.log(d3.extent(dataToPaint, function(d){return d.time}));
		console.log(d3.extent(dataToPaint, function(d){return parseInt(d.balance)}));

		var x = d3.scaleLinear().domain(d3.extent(dataToPaint, function(d){return d.time})).rangeRound([0, 500]);
		var y = d3.scaleLinear().domain(d3.extent(dataToPaint, function(d){return d.balance})).rangeRound([300, 0]);

		var line = d3.line()
		.x(function(d){
			return x(d.time);
		})
		.y(function(d){
			return y(d.balance);
		});

		 g.append("g")
			.attr("transform", "translate(0,300)")
			.call(d3.axisBottom(x))
			.select(".domain")
			.remove();

		g.append("g")
			.call(d3.axisLeft(y))
			.append("text")
			.attr("fill", "#000")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("text-anchor", "end")
			.text("Balance ($)");

		  g.append("path")
		      .datum(dataToPaint)
		      .attr("fill", "none")
		      .attr("stroke", "steelblue")
		      .attr("stroke-linejoin", "round")
		      .attr("stroke-linecap", "round")
		      .attr("stroke-width", 1.5)
		      .attr("d", line);

		      console.log("Exiting chart...");

	},
	componentDidMount: function(){

	},
	render: function(){
		return (
		<div className="buttons">
			<svg className="graph-container"></svg>
	      </div>
		);
	}
});


module.exports = chart;

