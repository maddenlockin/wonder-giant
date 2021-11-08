/* main form */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../index.css';

export default function Controls({ onChange, onSubmit }) {
    return (
        <form className={styles.controls} onChange={onChange} onSubmit={onSubmit}>
            <input 
            type='text' 
            aria-label='url' 
            name='url' 
            placeholder='URL' />
            <section>
                <div>
                    <label htmlFor='get'>GET
                        <input 
                        aria-label='get-radio-button'
                        type='radio' 
                        id='get' 
                        name='method' 
                        value='GET' 
                        onChange={onChange}/>
                    </label>
                    <label htmlFor='post'>POST
                        <input 
                        aria-label='post-radio-button'
                        type='radio' 
                        id='post' 
                        name='method' 
                        value='POST' 
                        onChange={onChange} />
                    </label>
                    <label htmlFor='put'>PUT
                        <input 
                        aria-label='put-radio-button'
                        type='radio' 
                        id='put' 
                        name='method' 
                        value='PUT' 
                        onChange={onChange} />
                    </label>
                    <label htmlFor='patch'>PATCH
                        <input 
                        aria-label='patch-radio-button'
                        type='radio' 
                        id='patch' 
                        name='method' 
                        value='PATCH' 
                        onChange={onChange} />
                    </label>
                    <label htmlFor='delete'>DELETE
                        <input 
                        aria-label='delete-radio-button'
                        type='radio' 
                        id='delete' 
                        name='method' 
                        value='DELETE' 
                        onChange={onChange} />
                    </label>
                </div>
                <button aria-label='submit'>Send</button>
            </section>
            <textarea 
                name='body' 
                aria-label='body' 
                placeholder='raw JSON body' 
                onChange={onChange}></textarea>
        </form>
    )
}

Controls.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}