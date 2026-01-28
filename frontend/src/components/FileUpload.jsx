// The 'upload-file-area' div takes up the entire page

// The 'upload-file-field' div sits inside of the parent div
// It's the actual box that the user sees and uploads files 
import fileUploadIcon from "../assets/fileUploadIcon.png"
import { useRef } from 'react'

function FileUpload() {
    const fileInputRef = useRef(null)
    const handleUploadFileButtonClick = () => {fileInputRef.current.click()}
    const handleFileChange = (event) => { const file = event.target.files[0]; if (!file) return }

    return  (
        <div id="upload-file-area">
            <div id="upload-file-field">
                <div id="inside-border-dashes">
                    <img id="file-upload-icon" src={fileUploadIcon} alt="Upload a file icon" />
                    <p id="upload-new-resume">Upload New Resume</p>
                    <p id="drag-and-drop-caption">
                        Drag and drop your file here, or click to open your file managers
                    </p>
                    <div id="upload-file-button-div-wrapper">
                        <button id="upload-file-button" onClick={handleUploadFileButtonClick}>
                            Choose file
                        </button>
                    </div>
                    <p id="supported-formats-caption">Supported formats</p>
                    
                    {/* This is hidden, it makes it so when the button is clicked 
                    a pop up appears where the user can upload files */}
                    <input
                        ref={fileInputRef}
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                </div>
            </div>
        </div>
    );
}

export default FileUpload;