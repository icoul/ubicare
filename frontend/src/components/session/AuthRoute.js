import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { nvl } from 'utils/nvl';

class AuthRoute extends React.Component {
  render() {
    const { component: Component, render, authenticated, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => 
          nvl(authenticated, false) ? (
            render ? render(props) : <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.loginManager.status.valid
  }
}

export default connect(mapStateToProps)(AuthRoute);