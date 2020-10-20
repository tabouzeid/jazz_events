import React, { Component } from 'react';
import axios from 'axios';

export default class FilesUploadComponent extends Component {

    constructor(props) {
        super(props);

        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            profileImg: ''
        }
    }

    onFileChange(e) {
        this.setState({ profileImg: e.target.files[0] })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', this.state.profileImg)
        
        axios.put("/api/userPicture/", formData)
        .then(res => {
            console.log(res);
            window.location.reload(false);
        })
        // axios.put("http://localhost:3000/api/user", formData, {
        //     profileImg: this.state.profileImg.name
        // }).then(res => {
        //     console.log(res)
        // })
        // console.log(this.state.profileImg.name);
        // axios.put("/api/user", {
        //     profileImg: this.state.profileImg.name
        // }).then(res => {
        //     console.log(res)
        // })
    }

    
    render() {
        console.log(this.state);
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="file" onChange={this.onFileChange} />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary" type="submit">Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}