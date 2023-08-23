import React, { Component } from 'react';

class TestInput extends Component {
    state = { emp: {ENo: 0, EName:"", 
                    EAddress: ""} } 

    OnTextChange(args){
        debugger;
        //Here since its normal method and not arrow 
        //function ..value of this will come as undefined
        //we will end up in error..
        //So we will need to use replica of this method
        //using bind method ..which will attach
        //"this" to current object of the class..
        
        var copyOfExistingEmployee = {...this.state.emp};
        
        copyOfExistingEmployee[args.target.name] = 
                        args.target.value

        this.setState({emp: copyOfExistingEmployee});
    }

    VarientOfOnTextChangeBasedOnCurrentObject = 
        this.OnTextChange.bind(this);

    // OnTextChange=(args)=>{
    //     debugger;
    //     var copyOfExistingEmployee = {...this.state.emp};
        
    //     copyOfExistingEmployee[args.target.name] = 
    //                     args.target.value

    //     this.setState({emp: copyOfExistingEmployee});
    // }


    // OnTextChange=(args)=>{
    //     debugger;
    //     var copyOfExistingEmployee = {...this.state.emp};
        
    //     copyOfExistingEmployee[args.target.name] = 
    //                     args.target.value

    //     this.setState({emp: copyOfExistingEmployee});
    // }

    // OnTextChange=(args)=>{
    //     debugger;
    //     var copyOfExistingEmployee = {...this.state.emp};
       
    //     if(args.target.name == "ENo")
    //     {
    //         copyOfExistingEmployee.ENo = args.target.value;
    //     }
    //     else if(args.target.name == "EName")
    //     {
    //         copyOfExistingEmployee.EName = 
    //                                 args.target.value;
    //     }
    //     else if(args.target.name == "EAddress")
    //     {
    //         copyOfExistingEmployee.EAddress = 
    //                                 args.target.value;
    //     }

    //     this.setState({emp: copyOfExistingEmployee});
    // }

    DoChange=()=>
    {
       // this.setState({myname:"something else.."})
    }
    render() { 
        return (<center>
                    <div>
                       ENo: 
                        <input type='text'
                        value={this.state.emp.ENo}
                        //onChange={this.OnTextChange}
                        onChange={this.VarientOfOnTextChangeBasedOnCurrentObject}
                        name="ENo"/>
                        <br></br>
                      EName: 
                        <input type='text'
                        value={this.state.emp.EName}
                        //onChange={this.OnTextChange}
                        onChange={this.VarientOfOnTextChangeBasedOnCurrentObject}
                        name="EName"/>
                         <br></br>
                      EAddress: 
                        <input type='text'
                        value={this.state.emp.EAddress}
                        // onChange={this.OnTextChange}
                        onChange={this.VarientOfOnTextChangeBasedOnCurrentObject}
                        name='EAddress'/>
                         <br></br>
                        <button onClick={this.DoChange}>
                            Change Text
                        </button>
                        <h1>
                            {this.state.emp.ENo}
                            {this.state.emp.EName}
                            {this.state.emp.EAddress}
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