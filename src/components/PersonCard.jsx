import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state= {
            
            age : this.props.person.age
        }


    }
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title text-center">{this.props.person.lastName}, {this.props.person.firstName}</h4>
                    <p className="card-text">Age: {this.state.age}</p>
                    <p className="card-text">Hair Color: {this.props.person.hairColor}</p>
                    <button 
                    className="btn btn-outline-dark"
                    onClick={() => this.setState({age:this.state.age +1})}
                    >Birthday Button for {this.props.person.firstName}
                    </button>
                </div>
            </div>
        )
    }

}

export default PersonCard;