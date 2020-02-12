import React, { Component } from "react";
import { GiBowTieRibbon } from "react-icons/gi";
import { IoMdHeartHalf } from "react-icons/io";
import { randomIdGen } from "../../global/_util";

class LandingView extends Component {
	render() {
		this.state = { randomNum: randomIdGen() };
		const { randomNum } = this.state;
		const bkgdImage = `https://i.picsum.photos/id/${randomNum}/3360/1768.jpg?blur=1`;
		const style = {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${bkgdImage})`
		};

		return (
			<>
				<div
					className="min-vh-100 row align-items-center text-center landing-view-object top-view-background"
					style={style}
				>
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
