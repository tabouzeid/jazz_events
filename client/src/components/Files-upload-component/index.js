import React, { Component } from 'react';
import axios from 'axios';

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
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form className="md-form">
                            <div className="file-field">
                                <div className="mb-4">
                                    <img src={this.props.user.profileImg}
                                        className="rounded-circle z-depth-0 mx-auto d-block" alt="avatar" />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <div className="btn btn-mdb-color btn-rounded float-left">
                                        <label for="files" className="btn btn-info">Select Image</label>
                                        <input id="files" style={{ visibility: "hidden" }} type="file" onChange={this.onFileChange} />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}