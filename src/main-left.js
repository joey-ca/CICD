import React from 'react';
import './main-left.css';
import Filters from './filters';
import DonutChart from './donut-chart';

export default function MainLeft(props){
	return (
		<div id="main-left">
			<Filters />
			<div className="donut-chart-group">
				<DonutChart data={props.data} id={0} change={props.change} fo={true} />
				<DonutChart data={props.data} id={1} change={props.change} />
				<DonutChart data={props.data} id={2} change={props.change} />
			</div>
			<div className="donut-chart-group">
				<DonutChart data={props.data} id={3} change={props.change} />
				<DonutChart data={props.data} id={4} change={props.change} />
				<DonutChart data={props.data} id={5} change={props.change} />
			</div>
			<span>2</span>
		</div>
	);
}
