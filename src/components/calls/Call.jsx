import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

export default function Call({ call }) {
    return <div><ReactJson src={call} /></div>
}
Call.propTypes = {
    call: PropTypes.any.isRequired
}