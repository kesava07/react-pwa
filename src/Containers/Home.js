import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-3  my-2">
                        <div className="card shadow-sm" >
                            <img className="card-img-top" src={require('../assets/img-1.jpg')} alt="Card" />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="/" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  my-2">
                        <div className="card shadow-sm" >
                            <img className="card-img-top" src={require('../assets/img-2.jpg')} alt="Card" />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="/" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  my-2">
                        <div className="card shadow-sm" >
                            <img className="card-img-top" src={require('../assets/img-3.jpg')} alt="Card" />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="/" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  my-2">
                        <div className="card shadow-sm" >
                            <img className="card-img-top" src={require('../assets/img-4.jpg')} alt="Card" />
                            <div className="card-body">
                                <h4 className="card-title">John Doe</h4>
                                <p className="card-text">Some example text.</p>
                                <a href="/" className="btn btn-primary">See Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br/><br/>
            </div>
        )
    }
}
