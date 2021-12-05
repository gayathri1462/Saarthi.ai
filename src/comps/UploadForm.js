import React, { useState } from 'react';


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['audio/mpeg'];
    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an audio file (mp3)');
        }

    }
    return ( <
        form >
        <
        label >
        <
        input type = "file"
        onChange = { handleChange }
        /> < /
        label > <
        div className = "output" > {
            error && < div className = "error" > < h3 > { error } < /h3>< /div >
        } {
            file && < div > < h3 > { file.name } < /h3>< /div >
        }

        <
        /div> < /
        form >
    );
}

export default UploadForm;