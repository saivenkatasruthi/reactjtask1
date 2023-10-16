import React, { useState } from 'react';

const WordCounter = () => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h1>Responsive Paragraph Word Counter</h1>
            <textarea
                value={text}
                onChange={handleTextChange}
                style={{ width: '80%', height: '200px' }} // Increase the width and height
            />
            <p>Word Count: {wordCount}</p>
        </div>
    );
};

export default WordCounter;
