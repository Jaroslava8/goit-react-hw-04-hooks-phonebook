import React from 'react';

import propTypes from 'prop-types';

export default function Template({ title }) {
  return (
    <>
      <div>{title}</div>
    </>
  );
}

Template.propTypes = {
  title: propTypes.string.isRequired,
};