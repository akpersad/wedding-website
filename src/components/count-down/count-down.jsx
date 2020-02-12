import React, { Component } from "react";
import { GiDiamondRing } from "react-icons/gi";

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

	componentWillUnmount() {
		clearInterval(this.timer);
	}

	initiateCountdown() {
		this.timer = setInterval(
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

	displayCountdownNodes() {
		const {
			countdownYears,
			countdownMonths,
			countdownDays,
			countdownHours,
			countdownMinutes,
			countdownSeconds
		} = this.state;

		const stateArr = [
			countdownYears,
			countdownMonths,
			countdownDays,
			countdownHours,
			countdownMinutes,
			countdownSeconds
		];
		const timeWords = ["years", "months", "days", "hours", "minutes", "seconds"];
		const returnArr = stateArr.map((value, index) => {
			return (
				<div key={timeWords[index]} className="time-sec">
					<span className="title">{value}</span>
					<span className="time-word">{timeWords[index]}</span>
				</div>
			);
		});

		return returnArr;
	}

	render() {
		return (
			<>
				<section className="count-down-object section counter-area center-text">
					<div className="container">
						<div className="row justify-content-around">
							<div className="col-sm-12">
								<div className="heading">
									<h2 className="title">Countdown to Party Time!</h2>
									<h2 className="divider line double-razor">
										<GiDiamondRing />
									</h2>
								</div>
							</div>

							<div className="col-sm-6">
								<div className="remaining-time">
									<div id="clock">{this.displayCountdownNodes()}</div>
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
