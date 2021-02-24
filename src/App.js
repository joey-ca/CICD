import React from 'react';
import './app.css';
import Main from './main';
import { ReactComponent as ReloadIcon } from './img/arrow-clockwise.svg';
import { ReactComponent as BarIcon } from './img/reception-4.svg';
import { ReactComponent as DownloadIcon } from './img/box-arrow-in-down.svg';
import { ReactComponent as ExitIcon } from './img/box-arrow-right.svg';
import { ReactComponent as ShapeIcon } from './img/columns-gap.svg';
import { ReactComponent as EmailIcon } from './img/envelope-fill.svg';
import { ReactComponent as GlobeIcon } from './img/globe.svg';
import { ReactComponent as InfoIcon } from './img/info-circle-fill.svg';
import { ReactComponent as PinIcon } from './img/pin-fill.svg';
import { ReactComponent as PrinterIcon } from './img/printer.svg';
import { ReactComponent as QuestionIcon } from './img/question-circle.svg';
import { ReactComponent as SliderIcon } from './img/sliders.svg';
import { ReactComponent as SquareIcon } from './img/square-fill.svg';
import { ReactComponent as PinIcon2 } from './img/pin.svg';

export default function App(props){
	return (
		<div>
			<ul id="nav-left">
				<li></li>
				<li><a href="#/"><PinIcon /></a></li>
				<li><a href="#/"><BarIcon /></a></li>
				<li><a href="#/"><EmailIcon /></a></li>
				<li id="shape-icon"><a href="#/"><ShapeIcon /></a></li>
				<li><a href="#/"><ReloadIcon /></a></li>
			</ul>
			<div id="main">
				<div id="main-top">
					<h3>Diagnostic Tool</h3>
					<ul id="nav-top">
						<li id="login-status">Logged in as General User</li>
						<li id="slider-icon"><a href="#/"><SliderIcon /></a></li>
						<li><a href="#/"><DownloadIcon /></a></li>
						<li><a href="#/"><PrinterIcon /></a></li>
						<li><a href="#/"><QuestionIcon /></a></li>
						<li><a href="#/"><ExitIcon /></a></li>
					</ul>
				</div>
				<div id="main-bottom">
					<h4>PERFORMANCE MANAGEMENT</h4>
					<div id="heading-bg">
						<div id="heading">
							<GlobeIcon />
							<h5>Diagnostic Tool</h5>
							<PinIcon2 />
						</div>
					</div>
					<main>
						<Main />
					</main>
				</div>
			</div>
		</div>
	);
}