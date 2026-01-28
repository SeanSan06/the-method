// The 'upload-file-area' takes up the entire page

// The 'upload-file-field' sits inside of the parent div
// It's the actual box where files are uploaded
function FileUpload() {
    return  (
        <div id="upload-file-area">
            <div id="upload-file-field">
                <div id="border-dashes">
                    <p>Upload New Resume</p>
                    <p>Drag and drop your file here, or click to open your file managers</p>
                    <button>Choose file</button>
                    <p>Supported formats</p>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;