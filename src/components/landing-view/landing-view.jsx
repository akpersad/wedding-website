import React, { Component } from "react";
import { GiBowTieRibbon } from "react-icons/gi";
import { IoMdHeartHalf } from "react-icons/io";

import "../../styles/main.scss";

class LandingView extends Component {
	render() {
		return (
			<>
				<div className="min-vh-100 row align-items-center text-center landing-view-object">
					<div className="col">
						<div className="main-div_one main-div_icon">
							<GiBowTieRibbon />
						</div>

						<div className="main-div_two">
							<span>Summer/Fall 2021</span>
						</div>

						<div className="main-div_three">
							<span>Save the Date!</span>
						</div>

						<div className="main-div_four">
							<span>
								Andrew
								<span className="mx-3 main-div_icon">
									<IoMdHeartHalf />
								</span>
								Cindy
							</span>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default LandingView;
