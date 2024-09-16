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
        <div className="full-container">
            <h1>Friend Form</h1>
            <h3>Add yourself to my friends!</h3>
            <div className="form-container">
                <form onSubmit={submit} className="form">
                    <div className="input-container">
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
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={change}
                                />
                        </label>
                        <label>
                                <input 
                                    type="checkbox"
                                    name="terms"
                                    checked={values.terms}
                                    onChange={change}
                                />
                            Agree to Terms of Service
                        </label>
                        <button disabled={disabled}>Submit!</button>
                        <div className="error-text">
                            <p>{errors.first_name}</p>
                            <p>{errors.email}</p>
                            <p>{errors.password}</p>
                            <p>{errors.terms}</p>
                        </div>
                    </div>
                    {/* <div className="music-container">
                        <h3>Favorite types of music</h3>
                        <label> Country
                            <input 
                                type="checkbox"
                                name="country"
                                checked={values.country}
                                onChange={change}
                            />
                        </label>
                        <label> Hip-Hop
                            <input 
                                type="checkbox"
                                name="hiphop"
                                checked={values.hiphop}
                                onChange={change}
                            />
                        </label>
                        <label> Jazz
                            <input 
                                type="checkbox"
                                name="jazz"
                                checked={values.jazz}
                                onChange={change}
                            />
                        </label>
                        <label> Rock
                            <input 
                                type="checkbox"
                                name="rock"
                                checked={values.rock}
                                onChange={change}
                            />
                        </label>
                        <label> Metal
                            <input 
                                type="checkbox"
                                name="metal"
                                checked={values.metal}
                                onChange={change}
                            />
                        </label>
                    </div> */}
                </form>
            </div>
        </div>
    )
}