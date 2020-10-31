import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);


    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{this.props.person.lastName}, {this.props.person.firstName}</h4>
                    <p className="card-text">Age: {this.props.person.age}</p>
                    <p className="card-text">Hair Color: {this.props.person.hairColor}</p>
                </div>
            </div>
        )
    }

}

export default PersonCard;