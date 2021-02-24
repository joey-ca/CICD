import React from 'react';
import './filters.css';
import { ReactComponent as SquareIcon } from './img/square-fill.svg';
import { ReactComponent as SquareIcon2 } from './img/square-fill-2.svg';
import { ReactComponent as InfoIcon } from './img/info-circle-fill.svg';

export default function Filters(props){
	return (
		<div id="filter-wrapper">
			<span id="filter-title">Filters</span>
			<div>
				<div id="filter-1">
					<SquareIcon />
					<span>All CQA Results</span>
					<InfoIcon />
				</div>
				<div>
					<SquareIcon2 />
					<span>CQAs with Closed Loop</span>
					<InfoIcon />
				</div>
			</div>
		</div>
	);

}
