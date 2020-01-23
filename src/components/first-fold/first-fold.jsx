import React, { Component } from "react";
import PropTypes from "prop-types";
import "./first-fold.scss";

class FirstFold extends Component {
	render() {
		const { bkgdImage, cmp } = this.props;
		const style = {
			backgroundImage: `url(${bkgdImage})`
		};

		return (
			<>
				<section className="cd-section cd-section--bg-fixed" style={style}>
					<div className="container max-width-sm padding-top--xxxl">
						<div className="text-component text-center">
							<h1>Alternate Fixed &amp; Scroll Backgrounds</h1>
							<p>The effect is visible only past 1024px.</p>
							<p>
								<a href="https://codyhouse.co/gem/alternate-fixed-scroll-backgrounds/">
									Article &amp; Download
								</a>
							</p>
						</div>
					</div>
				</section>

				<section className="cd-section">
					<div className="container max-width-sm">
						<div className="text-component">
							<div>{cmp}</div>
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
	cmp: []
};

FirstFold.propTypes = {
	bkgdImage: PropTypes.string.isRequired,
	cmp: PropTypes.object
};

export default FirstFold;

if (module.hot) {
	module.hot.accept();
}
