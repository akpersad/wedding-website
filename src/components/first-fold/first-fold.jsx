import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/main.scss";

class FirstFold extends Component {
	render() {
		const { bkgdImage, topCmp, bottomCmp } = this.props;
		const style = {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${bkgdImage})`
		};

		return (
			<>
				<section className="cd-section cd-section--bg-fixed" style={style}>
					{topCmp}
				</section>

				<section className="cd-section">
					<div>
						<div className="text-component">
							<div>{bottomCmp}</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
								incidunt suscipit similique, dolor corrupti cumque qui consectetur
								autem laborum fuga quas ipsam doloribus sequi, mollitia, repellendus
								sapiente repudiandae labore rerum amet culpa inventore, modi non.
								Quo nisi veritatis vitae nam, labore fugit. Inventore culpa iusto,
								officia exercitationem. Voluptates quibusdam odit odio incidunt
								consequatur, consectetur aspernatur optio vitae molestias, quas
								repellendus fugit ullam culpa, eligendi et dignissimos voluptatibus
								illum? Molestias aliquam nostrum quasi ipsa culpa, iusto explicabo
								ut error, consequuntur enim temporibus, adipisci tempora voluptate,
								id consequatur mollitia eveniet blanditiis. Illo quod repellendus
								alias? Cum rem doloremque adipisci accusantium? Saepe,
								necessitatibus!
							</p>
						</div>
					</div>
				</section>
			</>
		);
	}
}

FirstFold.defaultProps = {
	bottomCmp: [],
	topCmp: []
};

FirstFold.propTypes = {
	bkgdImage: PropTypes.string.isRequired,
	topCmp: PropTypes.object,
	bottomCmp: PropTypes.object
};

export default FirstFold;

if (module.hot) {
	module.hot.accept();
}
