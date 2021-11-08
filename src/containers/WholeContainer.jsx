import React, { Component } from 'react';
import Display from '../components/calls/Display';
import CallList from '../components/calls/Display';
import Controls from '../components/calls/Controls';
import Header from '../components/Header';
import { callApi } from '../services/Fetch';
import styles from '../index.css'

export default class WholeContainer extends Component {
    state= {
        loading: false,
        url: '',
        method: '',
        body: '',
        callList: [],
        display: { 'Beep Beep': 'It\'s Jeep'}

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = async(e) => {
        e.preventDefault();
        this.setState({ loading:true })
        const display = await callApi(
            this.state.url,
            this.state.body,
            this.state.method
            );
        console.log(display);
        this.setState({ loading:false, display });
    }

    render() {
        console.log(this.state);
        const { loading, display } = this.state;
        return (
            <div className={styles.container}>
                <Header />
                <section className={styles.main}>
                    <CallList />
                    <div>
                        <Controls onChange={this.handleChange} onSubmit={this.handleSubmit} />
                        { loading 
                            ? <div className={styles.display}>loading...</div>
                            : <Display display={display} />
                        }
                    </div>
                </section>
            </div>
        )
    }
}