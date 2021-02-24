import React, {useState, useEffect} from 'react';
import MainLeft from './main-left';
import MainRight from './main-right';

export default function Main(props){
	const [data, setData] = useState(null);
	const [areaId, setAreaId] = useState(0);
	
	useEffect(() => {
		function fetchData(){
			fetch(process.env.PUBLIC_URL + '/data.json').then(res => res.json()).then(d => setData(d));
		}
		fetchData();
	}, []);

	const changeChart = id => {
		setAreaId(id);
	}

	let display;
	if (data) {
		display = <><MainLeft data={data} change={changeChart} /><MainRight data={data} id={areaId} /></>;
	} else {
		display = null;
	}

	const style = {
		display: "flex",
		justifyContent: "space-between"
	};

	return (
		<div style={style}>
			{display}
		</div>
	);
}