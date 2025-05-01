import React, { useState } from 'react';

const FeedbackButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = () => {
        console.log('User Feedback:', feedback);
        // You can send this feedback to your server or analytics
        setIsOpen(false);
        setFeedback('');
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#f59e0b',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    fontSize: '24px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                }}
            >
                💬
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '20px',
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        zIndex: 1000
                    }}
                >
                    <h4>Feedback</h4>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        rows={4}
                        cols={30}
                        placeholder="Your feedback..."
                        style={{ width: '100%', marginBottom: '10px' }}
                    />
                    <br />
                    <button onClick={handleSubmit} style={{ marginRight: '10px' }}>
                        Submit
                    </button>
                    <button onClick={() => setIsOpen(false)}>Close</button>
                </div>
            )}
        </>
    );
};

export default FeedbackButton;
