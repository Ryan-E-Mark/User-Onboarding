import React from 'react';

export default function Form(props) {

    const { values, onChange, onSubmit, disabled, errors } = props;

    const submit = evt => {
        evt.preventDefault();
        onSubmit();
    }

    const change = evt => {
        const { name, value, checked, type } = evt.target;
        const valueUsed = type === 'checkbox' ? checked : value;
        onChange(name, valueUsed);
    }

    return(
        <div>
            <h2>Friend Form</h2>
            <div className="form-container">
                <form onSubmit={submit}>
                    <label>
                        First Name
                            <input 
                                type="text" 
                                name="first_name"
                                value={values['first_name']}
                                onChange={change}
                            />
                    </label>
                    <label>
                        Email
                            <input
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={change}
                            />
                    </label>
                    <label>
                        Password
                            <input
                                type="text"
                                name="password"
                                value={values.password}
                                onChange={change}
                            />
                    </label>
                    <label>
                        Agree to Terms of Service
                            <input 
                                type="checkbox"
                                name="terms"
                                checked={values.terms}
                                onChange={change}
                            />
                    </label>
                    <button disabled={disabled}>Submit!</button>
                    <div className="error-text">
                        <p>{errors.first_name}</p>
                        <p>{errors.email}</p>
                        <p>{errors.password}</p>
                        <p>{errors.terms}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}