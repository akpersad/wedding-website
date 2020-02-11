import React, { Component } from "react";

import { GiChurch, GiCherish, GiKnifeFork, GiFireworkRocket } from "react-icons/gi";
import { FaCocktail } from "react-icons/fa";

class Timeline extends Component {
	render() {
		return (
			<>
				<div className="timeline">
					<div className="timeline-container left">
						<div className="content">
							<h1 className="icon-red text-center">
								<GiChurch />
							</h1>
							<h2 className="text-center">Ceremony</h2>
							<p>
								Ceremony Information: Please meet here. Lorem ipsum dolor sit amet,
								quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim
								ea mazim fierent detracto.
							</p>
						</div>
					</div>

					<div className="timeline-container right">
						<div className="content">
							<h1 className="icon-red text-center">
								<FaCocktail />
							</h1>
							<h2 className="text-center">Cocktail Hour</h2>
							<p>
								Cocktail Hour: Please drink and mingle. Lorem ipsum dolor sit amet,
								quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim
								ea mazim fierent detracto.
							</p>
						</div>
					</div>

					<div className="timeline-container left">
						<div className="content">
							<h1 className="icon-red text-center">
								<GiCherish />
							</h1>
							<h2 className="text-center">Reception</h2>
							<p>
								Reception: Please recieve. Lorem ipsum dolor sit amet, quo ei simul
								congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
								fierent detracto.
							</p>
						</div>
					</div>

					<div className="timeline-container right">
						<div className="content">
							<h1 className="icon-red text-center">
								<GiKnifeFork />
							</h1>
							<h2 className="text-center">Dinner</h2>
							<p>
								Dinner: Please recieve. Lorem ipsum dolor sit amet, quo ei simul
								congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
								fierent detracto.
							</p>
						</div>
					</div>

					<div className="timeline-container left">
						<div className="content">
							<h1 className="icon-red text-center">
								<GiFireworkRocket />
							</h1>
							<h2 className="text-center">Dancing!</h2>
							<p>
								Dancing!: Please recieve. Lorem ipsum dolor sit amet, quo ei simul
								congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim
								fierent detracto.
							</p>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Timeline;
