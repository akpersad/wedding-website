import React, { Component } from "react";

import "./count-down.scss";

class CountDown extends Component {
	constructor(props) {
		// Required step: always call the parent class' constructor
		super(props);

		// Set the state directly. Use props if necessary.
		this.state = {
			countdownYears: 0,
			countdownMonths: 0,
			countdownDays: 0,
			countdownHours: 0,
			countdownMinutes: 0,
			countdownSeconds: 0,
			weddingDate: new Date("8/28/21 16:00")
		};
	}

	componentDidMount() {
		this.initiateCountdown();
	}

	initiateCountdown() {
		setInterval(
			function() {
				const { weddingDate } = this.state;
				const currentDate = new Date();

				let d = Math.abs(weddingDate - currentDate) / 1000; // delta
				const r = {}; // result
				const s = {
					// structure
					year: 31536000,
					month: 2592000,
					week: 604800, // uncomment row to ignore
					date: 86400, // feel free to add your own row
					hour: 3600,
					minute: 60,
					second: 1
				};

				Object.keys(s).forEach(function(key) {
					r[key] = Math.floor(d / s[key]);
					d -= r[key] * s[key];
				});

				this.setState({
					countdownYears: r.year,
					countdownMonths: r.month,
					countdownDays: r.date,
					countdownHours: r.hour,
					countdownMinutes: r.minute,
					countdownSeconds: r.second
				});
			}.bind(this),
			1000
		);
	}

	render() {
		const {
			countdownYears,
			countdownMonths,
			countdownDays,
			countdownHours,
			countdownMinutes,
			countdownSeconds
		} = this.state;
		return (
			<>
				<section className="section counter-area center-text">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="heading">
									<h2 className="title">Do not miss it!</h2>
								</div>
							</div>

							<div className="col-sm-1" />
							<div className="col-sm-10">
								<div className="remaining-time">
									<div id="clock">
										<div className="time-sec">
											<span className="title">{countdownYears}</span>
											<span className="time-word">years</span>
										</div>
										<div className="time-sec">
											<span className="title">{countdownMonths}</span>
											<span className="time-word">months</span>
										</div>
										<div className="time-sec">
											<span className="title">{countdownDays}</span>
											<span className="time-word">days</span>
										</div>
										<div className="time-sec">
											<span className="title">{countdownHours}</span>
											<span className="time-word">hours</span>
										</div>
										<div className="time-sec">
											<span className="title">{countdownMinutes}</span>
											<span className="time-word">minutes</span>
										</div>
										<div className="time-sec">
											<span className="title">{countdownSeconds}</span>
											<span className="time-word">seconds</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default CountDown;
