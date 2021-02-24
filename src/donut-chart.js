import React, {useState, useEffect, useRef} from 'react';
import * as d3 from 'd3';
import './donut-chart.css';

export default function DonutChart(props){
	const wrapper = useRef(null);
	const donut_chart = useRef(null);
	const definedArea = useRef(null);
	const undefinedArea = useRef(null);
	const link = useRef(null);

	const [color, setColor] = useState("rgb(20, 60, 109)");
	const [divStyle, setDivStyle] = useState({backgroundColor: "initial", borderColor: "rgb(215, 215, 215)"});

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

		d3.select(donut_chart.current)
	  		.attr("height", height)
	  		.attr("width", width)
	  		.attr("viewBox", [-width / 2, -height / 2, width, height]);

	  d3.select(definedArea.current)
	  		 .attr("fill", color)
	       .attr("d", arc([0, scale(data_target.score)]));				    
	  d3.select(undefinedArea.current)
	  		 .attr("fill", "rgb(215, 215, 215)")
	       .attr("d", arc([scale(data_target.score), Math.PI * 2]));	

	  const nameTranslateX = i => {
	  	switch (i) {
	  		case 0:
	  			return -33;
	  		case 1:
	  			return -16;
	  		case 2:
	  			return -25;
	  		case 3:
	  			return -23;
	  		case 4:
	  			return -20;
	  		case 5:
	  			return -27;
	  	}
	  }

	  d3.select(donut_chart.current).selectAll("text")
	  		 .data(Object.entries(data_target))
	  		 .enter().append("text")
	  		 .attr("class", (d, i) => "text" + i)
	  		 .attr("transform", (d, i) => {
	  		 		switch (i) {
	  		 			case 0:
	  		 				return "translate(" + nameTranslateX(props.id) + "," + (-height / 2 + 10) + ")";
	  		 			case 1:
	  		 				return "translate(" + (-12) + "," + 0 + ")";
	  		 			case 2:
	  		 				return "translate(" + (-7) + "," + 10 + ")";
	  		 			case 3:
	  		 				return "translate(" + (-25) + "," + (height / 2 - 4) + ")";
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

	  d3.select(donut_chart.current).select(".text0").attr("fill", color);
	  d3.select(donut_chart.current).select(".text1").attr("fill", color);
	}

	const handleClick = e => {
		props.change(props.id);
	}

	const handleFocus = () => {
		setColor("rgb(75, 173, 233)");
		setDivStyle({backgroundColor: "rgb(243, 250, 253)", borderColor: "rgb(75, 173, 233)"});
	}

	const handleBlur = () => {
		setColor("rgb(20, 60, 109)");
		setDivStyle({backgroundColor: "initial", borderColor: "rgb(215, 215, 215)"});
	}

	useEffect(() => {
		createDonutChart();
	});

	useEffect(() => {
		if (props.fo) {
			link.current.focus();
		} 
	}, []);

	return (
		<div className="donut-chart-wrapper" style={divStyle} ref={wrapper} onClick={handleClick} >
			<a href="#/" onFocus={handleFocus} onBlur={handleBlur} ref={link} tabIndex="-1">
				<svg className="donut-chart" ref={donut_chart} >
					<path className="defined-area" ref={definedArea} ></path>
					<path className="undefined-area" ref={undefinedArea} ></path>
				</svg>
			</a>
		</div>
	);


}