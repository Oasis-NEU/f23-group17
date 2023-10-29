import React, {useState} from "react";

class ClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value:''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});

    }

    handleSubmit(event) {
        alert("A course was added: " + this.state.value);
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Class Name:
                    <input type="text" value={this.state.value} placeholder="ex. CS 1800" onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="Add Class"></input>

            </form>

        );
    }
}

export default ClassForm;