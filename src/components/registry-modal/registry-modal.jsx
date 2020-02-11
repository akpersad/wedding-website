import React, { Component } from "react";
import PropTypes from "prop-types";

class RegistryModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal: false
		};
	}

	closeModal() {
		debugger;
	}

	render() {
		const { displayModal } = this.props;
		return (
			<>
				<div
					id="exampleModalCenter"
					tabIndex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
					className={`modal registry-modal fade show ${
						displayModal ? "d-block" : "d-none"
					}`}
				>
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title" id="exampleModalLongTitle">
									Modal title
								</h5>
								<button
									type="button"
									className="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">...</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									data-dismiss="modal"
									onClick={this.closeModal}
								>
									Close
								</button>
								<button type="button" className="btn btn-primary">
									Save changes
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
