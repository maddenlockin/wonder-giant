import React, { Component } from 'react';
import Call from '../components/calls/Call';
import CallList from '../components/calls/CallList';
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
        call: { 'Beep Beep': 'It\'s Jeep'}

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = async(e) => {
        e.preventDefault();
        this.setState({ loading:true })
        const call = await callApi(
            this.state.url,
            this.state.body,
            this.state.method
            );
        console.log(call);
        this.setState({ loading:false, call });
    }

    render() {
        console.log(this.state);
        const { loading, call } = this.state;
        return (
            <div className={styles.container}>
                <Header />
                <section className='main'>
                    <CallList />
                    <div>
                        <Controls onChange={this.handleChange} onSubmit={this.handleSubmit} />
                        { loading 
                            ? <div className={styles.call}>loading...</div>
                            : <Call call={call} />
                        }
                    </div>
                </section>
            </div>
        )
    }
}