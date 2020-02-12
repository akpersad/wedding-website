import React, { Component } from "react";
import PropTypes from "prop-types";

class RegistryModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	componentDidMount() {
		const { displayModal } = this.props;

		if (!window.localStorage.sawModal && displayModal) {
			this.setState({ showModal: true });
		} else if (window.localStorage.sawModal && this.checkModalExp()) {
			window.localStorage.setItem("modalDate", new Date());
		}
	}

	checkModalExp() {
		const twoWeeksAgo = new Date(Date.now() - 12096e5);
		const modalDateTime = new Date(window.localStorage.modalDate);

		return twoWeeksAgo > modalDateTime;
	}

	closeModal() {
		window.localStorage.setItem("sawModal", true);
		window.localStorage.setItem("modalDate", new Date());
		this.setState({ showModal: false });
	}

	render() {
		const { showModal } = this.state;
		return (
			<>
				<div
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
					className={`modal registry-modal fade show ${showModal ? "d-block" : "d-none"}`}
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-body">
								We&apos;re using MyRegistry to aggregate our registry links. Feel
								free to grab something off the list or contribute to our SOMETHING
								fund! Thanks so much!
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
									onClick={this.closeModal.bind(this)}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

RegistryModal.propTypes = {
	displayModal: PropTypes.bool.isRequired
};

export default RegistryModal;
