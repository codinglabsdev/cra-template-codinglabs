/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DefaultLayout from '~/layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = useSelector(state => state.auth.auth);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={props => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
