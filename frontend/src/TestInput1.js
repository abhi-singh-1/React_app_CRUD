import React, { Component } from 'react';

class TestInput extends Component {
    state = { myname: "abcd" } 

    OnTextChange=(args)=>{
       // debugger;
        
        this.setState({myname:args.target.value})
    }

    DoChange=()=>
    {
        this.setState({myname:"something else.."})
    }
    render() { 
        return (<center>
                    <div>
                        <input type='text'
                        value={this.state.myname}
                        onChange={this.OnTextChange}/>

                        <button onClick={this.DoChange}>
                            Change Text
                        </button>
                        <h1>
                            {this.state.myname}
                        </h1>
                    </div>
                </center>);
    }
}
 
export default TestInput;


// import React, { Component } from 'react';

// class TestInput extends Component {
//     state = { myname: "abcd" } 

//     DoChange=()=>
//     {
//         this.setState({myname:"something else.."})
//     }
//     render() { 
//         return (<center>
//                     <div>
//                         <input type='text'
//                                value={this.state.myname}/>
//                         <button onClick={this.DoChange}>
//                             Change Text
//                         </button>
//                         <h1>Data typed is shown here..</h1>
//                     </div>
//                 </center>);
//     }
// }
 
// export default TestInput;