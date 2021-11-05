import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from '../../index.css';

export default function Call({ call }) {
    return <div className={styles.call}><ReactJson src={call} /></div>
}
Call.propTypes = {
    call: PropTypes.node.isRequired
}