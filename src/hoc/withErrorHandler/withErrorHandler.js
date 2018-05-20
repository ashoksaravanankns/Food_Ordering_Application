import React from 'react';
import Aux from '../Aux/Aux';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends React.Component {
		state = {
			error: null
		};
		componentDidMount() {
			axios.interceptors.request.use((request) => {
				this.setState({ error: null });
				return request;
			});
			axios.interceptors.response.use(
				(response) => response,
				(error) => {
					this.setState({ error: error });
				}
			);
		}
		errorConfirmedHandler = (props) => {
			this.setState({ error: null });
		};
		render() {
			return (
				<Aux>
					<Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
						<span
							style={{
								float: 'right',
								color: ' #524b4b',
                                fontSize: '20px',
                                cursor:'pointer'
                            }}
                            onClick={this.errorConfirmedHandler}
						>
							&times;
						</span>
						{this.state.error ? this.state.error.message : null}
					</Modal>
					<WrappedComponent {...this.props} />
				</Aux>
			);
		}
	};
};

export default withErrorHandler;
