import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import './area-chart.css';

export default function AreaChart(props){
	const area_chart = useRef(null);

	const createAreaChart = () => {
		const data_date = props.data.map(d => d.date);
		const data_score = props.data.map(d => d.score);
		const height = 180;
		const width= 450;
		const margin = {
			top: 30,
			right: 30,
			bottom: 30,
			left: 30
		};

		const x = d3.scalePoint()
	    .domain(data_date)
	    .range([margin.left, width - margin.right]);

	  const y = d3.scaleLinear()
	    .domain([0, d3.max(data_score)])
	    .range([height - margin.bottom, margin.top]);

	  const xAxis = d3.axisBottom(x);

		const curve = d3.curveNatural;
		const area = d3.area()
	    .curve(curve)
	    .x(d => x(d.date))
	    .y0(y(0))
	    .y1(d => y(d.score));

	  d3.select(area_chart.current)
	  		.attr("width", width)
	  		.attr("height", height)
	  		.datum(props.data);

	  d3.select(area_chart.current).select("path")  		 	      
	       .attr("fill", "url(#MyGradient)")
	       .attr("d", area);

	  const g = d3.select(area_chart.current).select("#xAxis")
			.attr("transform", `translate(0,${height - margin.bottom + 10})`)	
      .call(xAxis);

    g.selectAll("line")		
      .attr("stroke", "rgb(224, 224, 224)");
      
    g.selectAll("path")
      .attr("stroke", "rgb(224, 224, 224)");

    g.selectAll("text")
      .attr("fill", "dimgray");

	  d3.select(area_chart.current).select("#circle")
	  			.selectAll("circle")
			    .data(props.data)
			    .join("circle")
						.attr("fill", "rgb(62, 118, 189)")
						.attr("stroke", "white")
						.attr("stroke-width", "2")
			      .attr("cx", d => x(d.date))
			      .attr("cy", d => y(d.score))
			      .attr("r", 6);

	  d3.select(area_chart.current).select("#text")
	  		 .selectAll("text")
	  		 .data(props.data)
    		 .join("text")
    		 .attr("transform", d => {
    		 		return 	"translate(" + (x(d.date) - 9) + "," + (y(d.score) - 17) + ")" 
    		 })
    		 .text(d => d.score + "%")
    		 .attr("fill", "dimgray")
    		 .attr("font-size", ".7rem");
	}

	useEffect(() => {
		createAreaChart();
	});

	return (
		<div>
			<svg id="area-chart" ref={area_chart} >
				<path></path>
				<g id="xAxis"></g>
				<g id="circle"></g>
				<g id="text"></g>
				<defs>
	        <linearGradient id="MyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
	          <stop offset="0%" stopColor="rgb(22, 108, 190)" /> {/* from top to down */}
	          <stop offset="100%" stopColor="rgb(195, 218, 237)" />
	        </linearGradient>
      	</defs>
			</svg>
		</div>
	);
}
