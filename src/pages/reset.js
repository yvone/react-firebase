import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Reset() {
    const handleSubmit = async (event) => {
		event.preventDefault();
		const {email} = event.target.elements;
        
        console.log('RESET PASSWORD:', email.value);
	}

    const disabled = false;
    const bgColor = disabled ? '#BDC3CB' : '#3a86ff';

	return (
		<div
            style={{
                padding: '5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    padding: '1rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(1, 1fr)',
                    gridAutoRows: 'minmax(3rem, auto)',
                    rowGap: '1rem',
                    border: `1px solid ${bgColor}`,
                    backgroundImage: `repeating-linear-gradient(-45deg, ${bgColor}, ${bgColor} 0.25px, transparent 0, transparent 50%)`,
                    backgroundSize: '12px 12px',
                    alignItems: 'center',
                    justifyItems: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}
                >
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        name="email"
                        className="writing"
                        disabled={disabled}
                    />
                </div>

                <button
                    className={disabled ? "disabled" : "magic"}
                    type="submit"
                    style={{
                        gridRowStart: '2',
                        width: '100%',
                    }}
                    disabled={disabled}
                >
                    Send password reset email
                </button>
			    <p>Don't have an account? <Link to="/register">Register</Link> now.</p>
            </form>
        </div>
	);
}

export default Reset;