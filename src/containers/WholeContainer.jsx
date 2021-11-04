import React, { Component } from 'react';
import Call from '../components/calls/Call';
import CallList from '../components/calls/CallList';
import Controls from '../components/calls/Controls';
import Header from '../components/Header';

export default class WholeContainer extends Component {
    state= {

    }

    handleChange = (e) => {

    }

    handleClick = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <Header />
                <section>
                    <CallList />
                    <div>
                        <Controls />
                        <Call />
                    </div>
                </section>
            </>
        )
    }
}