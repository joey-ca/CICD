import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
import './donut-chart.css';

export default function DonutChart2(props){
	const wrapper = useRef(null);
	const donut_chart = useRef(null);
	const definedArea = useRef(null);
	const undefinedArea = useRef(null);

	const createDonutChart = () => {
		const data_target = props.data.gaugeData[props.id];
		const height = 120;
		const width= 80;
		const scale = d3.scaleLinear()
				.domain([0, 100])
				.range([0, Math.PI * 2]);
										
		const radius = width / 2;
		const arc = d3.arc()
				.innerRadius(radius * 0.9)
				.outerRadius(radius)
				.startAngle(([startAngle, endAngle]) => startAngle)
				.endAngle(([startAngle, endAngle]) => endAngle);

		// const chart = d3.select(donut_chart.current)	  		
	  		 d3.select(donut_chart.current).attr("height", height)
	  		 .attr("width", width)
	  		 .attr("viewBox", [-width / 2, -height / 2, width, height]);

	  // chart.select(definedArea.current)
	  		 d3.select(definedArea.current).attr("fill", "rgb(20, 60, 109)")
	       .attr("d", arc([0, scale(data_target.score)]));				    
	  // chart.select(undefinedArea.current)
	  		 d3.select(undefinedArea.current).attr("fill", "rgb(215, 215, 215)")
	       .attr("d", arc([scale(data_target.score), Math.PI * 2]));	

	  d3.select(donut_chart.current).selectAll("text")
	  		 .data(Object.entries(data_target))
	  		 .enter().append("text")
	  		 .attr("class", (d, i) => "text" + i)
	  		 .attr("transform", (d, i) => {
	  		 		switch (i) {
	  		 			case 0:
	  		 				return "translate(" + (-36) + "," + (-height / 2 + 8) + ")";
	  		 			case 1:
	  		 				return "translate(" + 0 + "," + (-8) + ")";
	  		 			case 2:
	  		 				return "translate(" + 0 + "," + 8 + ")";
	  		 			case 3:
	  		 				return "translate(" + (-30) + "," + (height / 2 - 16) + ")";
	  		 		}
	  		 })
	  		 .text((d, i) => {
	  		 		switch (i) {
	  		 			case 0:
	  		 				return d[1];
	  		 			case 1:
	  		 				return d[1] + "%";
	  		 			case 2:
	  		 				return "N/A";
	  		 			case 3:
	  		 				return d[0].charAt(0).toUpperCase() + d[0].slice(1) + ": " + d[1];
	  		 		}
	  		 });
	}

	useEffect(() => {
		createDonutChart();
	});

	return (
		<div className="donut-chart-wrapper" ref={wrapper} >
			<svg className="donut-chart" ref={donut_chart} >
				<path className="defined-area" ref={definedArea} ></path>
				<path className="undefined-area" ref={undefinedArea} ></path>
			</svg>
		</div>
	);


}