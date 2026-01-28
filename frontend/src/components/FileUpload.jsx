// The 'upload-file-area' div takes up the entire page

// The 'upload-file-field' div sits inside of the parent div
// It's the actual box that the user sees and uploads files 
function FileUpload() {
    return  (
        <div id="upload-file-area">
            <div id="upload-file-field">
                <div id="inside-border-dashes">
                    <p id="upload-new-resume">Upload New Resume</p>
                    <p id="drag-and-drop-caption">Drag and drop your file here, or click to open your file managers</p>
                    <div id="upload-file-button-div-wrapper"><button id="upload-file-button">Choose file</button></div>
                    <p id="supported-formats-caption">Supported formats</p>
                </div>
            </div>
        </div>
    );
}

export default FileUpload;