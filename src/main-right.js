import React from 'react';
import './main-right.css';
import Button from './button';
import AreaChart from './area-chart';

export default function MainRight(props){
	let display, title;

	switch (props.id) {
		case 0: 
			display = <AreaChart data={props.data.areaData['Quality Score']} />;
			title = "QUALITY SCORE";
			break;
		case 1: 
			display = <AreaChart data={props.data.areaData['Basics']} />;
			title = "BASICS";
			break;
		case 2: 
			display = <AreaChart data={props.data.areaData['Interaction']} />;
			title = "INTERACTION";
			break;
		case 3: 
			display = <AreaChart data={props.data.areaData['Expertise']} />;
			title = "EXPERTISE";
			break;
		case 4: 
			display = <AreaChart data={props.data.areaData['Process']} />;
			title = "PROCESS";
			break;
		case 5: 
			display = <AreaChart data={props.data.areaData['Knowledge']} />;
			title = "KNOWLEDGE";
			break;
	}

	return (
		<div id="main-right">
			<div id="button-group">
				<span>{title + " TREND"}</span>
				<Button color="rgb(196, 218, 237)" name="Day" />
				<Button color="rgb(22, 108, 190)" name="Week" />
				<Button color="rgb(20, 60, 109)" name="Month" />
				<Button color="rgb(22, 108, 190)" name="Quarter" />
				<Button color="rgb(22, 108, 190)" name="Half" />
				<Button color="rgb(22, 108, 190)" name="Year" />
			</div>
			{display}
		</div>
	);
}