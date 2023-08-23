import React, { Component } from 'react';

class Emp extends Component 
{
    constructor(){
        super();
        console.log("Inside CONSTRUCTOR of EMP")
    }
    state={EName : "Satish"}

    DoSomething=()=>{
        console.log("button click code called..")
        this.setState({EName : "Abhimanyu"});
    }

    // shouldComponentUpdate()
    // {
    //     return false;
    // }
    // componentDidMount(){
    //     console.log("Inside componentDidMount")
    // }

    // componentDidUpdate(){
    //     console.log("Inside componentDidUpdate")
    // }

    

    render() {
        console.log("render called...")
        return (<>
                    <h1>Emp detail</h1>
                    <h2>Hi {this.state.EName}</h2>
                    <button onClick={this.DoSomething}>
                        Click Me
                    </button>
                </>); 
    }
}
 
export default Emp;