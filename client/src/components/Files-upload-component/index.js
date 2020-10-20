import React, { Component } from 'react';
import axios from 'axios';

const style = {
    height: "200px",
    maxWidth: "200px",
    borderRadius: "100px"
}
export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
    }

    onFileChange(e) {
        const formData = new FormData()
        formData.append('profileImg', e.target.files[0])

        axios.put("/api/userPicture/", formData)
            .then(res => {
                window.location.reload(false);
            })
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center">User Settings</h1>
                <form className="my-0 pt-3 pb-0 ">
                    <div className="d-flex justify-content-center mb-4 mt-2">
                        <img src={this.props.user.profileImg}
                            className="mx-auto d-block" style={style} alt="avatar" />
                    </div>
                    <div className="d-flex flex-column mx-auto w-50">
                        <label for="files" className="btn text-white col-6 mx-auto" style={{ backgroundColor: "#0060a4" }}>Select Image</label>
                        <input id="files" style={{ visibility: "hidden" }} type="file" onChange={this.onFileChange} className="px-0 mx-0" />
                    </div>
                </form>
            </div>
        )
    }
}