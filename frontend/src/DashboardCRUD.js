import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';
import './common.css';

class Dashboard extends Component 
{
    state = { emps : [], 
              emp : {ENo: 0, EName : "", EAddress: ""},
              message: "",
              searchText : ""} 

    setMessage=(stringMessage)=>{
        this.setState({message: stringMessage})
        setTimeout(() => {
            this.setState({message: ""});
        }, 3000);
    }

    componentDidMount()
    {
        debugger;
        console.log("Inside COmponent Did Mount")
        this.select();
    }
    componentDidUpdate()
    {
        console.log("Component Did Update is called..")
    }
    select=()=>
    {
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if (helper.readyState == 4 && 
                helper.status == 200 )
                {
                    debugger;
                    var result = 
                        JSON.parse(helper.responseText);
                    var receivedEmps = result;
                    console.log("Setting Emps to Array received from reqres.in website..")
                    debugger;
                    this.setState({emps: receivedEmps})
                }
        };
        helper.open("GET", "http://127.0.0.1:9999/emps");
        helper.send();
    }
    delete=(ENo)=>
    {
        debugger;
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 &&
                helper.status == 200)
                {
                    var responseReceived = 
                        JSON.parse(helper.responseText);
                    if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
                    {
                        this.setMessage("Delete Successfull!")
                        this.select();
                    }
                    else
                    {
                        this.setMessage("Something went wrong!")
                    }
                }
        };
        helper.open("DELETE", 
                        "http://127.0.0.1:9999/emps/"+ENo);
        helper.send();   
    }
    insert=()=>
    {
        // this.state.empToBeAdded .. hold record's data
        // to be send to Node Server!
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 &&
                helper.status == 200)
                {
                    var responseReceived = 
                        JSON.parse(helper.responseText);
                    if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
                    {
                        this.setMessage("Insert Successfull!")
                        this.select();
                        this.setState({emp:
                                        {ENo: 0, 
                                         EName : "", EAddress: ""} });
                    }
                    else
                    {
                        this.setMessage("Something went wrong!")
                    }
                }
        };
        helper.open("POST","http://127.0.0.1:9999/emps");
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send(JSON.stringify(
                    this.state.emp));   

        
    }
    edit=(ENo)=>{
        debugger;
        console.log("You need to find record with ENO = " + ENo + " from - ");

        console.log(this.state.emps)

        this.state.emps.map((empToEdit)=>{
            if(empToEdit.ENo == ENo)
            {
                this.setMessage("Record Found!!")
                var copyOfEmpToEditFromArray  =
                   {...empToEdit} 
                this.setState({emp:copyOfEmpToEditFromArray });
                return;
            }
        })
    }
    update=()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 &&
                helper.status == 200)
                {
                    var responseReceived = 
                        JSON.parse(helper.responseText);
                    if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
                    {
                        this.setMessage("Update Successfull!")
                        this.select();
                        this.setState({emp:
                                        {ENo: 0, 
                                         EName : "", EAddress: ""} });
                    }
                    else
                    {
                        this.setMessage("Something went wrong!")
                    }
                }
        };
        helper.open("PUT","http://127.0.0.1:9999/emps/"+this.state.emp.ENo);
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send(JSON.stringify(
                    this.state.emp));  
    }
    OnTextChange=(args)=>{
        var copyOfEmp= 
                {...this.state.emp};
        copyOfEmp[args.target.name] = 
                args.target.value;
        this.setState({emp:copyOfEmp});
    }
    onSearch=(args)=>{
        debugger;
        this.setState({searchText : args.target.value})
    }
    render() 
    { 
        debugger;
        console.log("Dashboard render is getting called..")
        return (<>
                    <Header></Header>
                    <hr></hr>
                    <div className='myTable'>
                    <div className="form-group">
                        <input type="number" className="form-control" 
                        name="ENo" 
                        placeholder="Enter ENo"
                        value={this.state.emp.ENo}
                        onChange={this.OnTextChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" 
                        name="EName" 
                        placeholder="Enter EName"
                        value={this.state.emp.EName}
                        onChange={this.OnTextChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" 
                        name="EAddress" 
                        placeholder="Enter EAddress"
                        value={this.state.emp.EAddress}
                        onChange={this.OnTextChange}/>
                    </div>
                    <button className="btn btn-primary"
                             onClick={this.insert}>
                        Add Record
                    </button>

                    <button  className="btn btn-success"
                             style={{margin: 10 }}
                             onClick={this.update}>
                        Update Record
                    </button>
                    </div>
                        
                    <hr></hr>
                    <div className='mytable alert alert-warning'>
                       <h1> {this.state.message}</h1>
                    </div>
                    <hr></hr>
                    <div className='table-responsive'>
                    <div style={{float: "right", marginRight: 300}}>
                    Search:
                        <input type='text' 
                               value={this.state.searchText} 
                               onChange={this.onSearch}/>
                        <br></br>
                    </div>
                        <table className='table table-bordered myTable'>
                           <tbody>
                           {   
                                this.state.emps.map((emp)=>{
                                if(this.state.searchText!="")
                                {
                                    debugger;
                                    if(emp.EAddress.toLowerCase().
                                    includes(this.state.searchText.toLowerCase()))
                                    {
                                        return <tr key={emp.ENo}>
                                        <td>
                                            {emp.ENo}
                                        </td>
                                        <td>
                                            {emp.EName}
                                        </td>
                                        <td>
                                            {emp.EAddress}
                                        </td>
                    <td>
                        <button className='btn btn-danger'
                        onClick={()=>{
                                this.delete(emp.ENo)
                                     }}>
                        Delete
                        </button>
                    </td>
    
                    <td>
                        <button className='btn btn-warning'
                        onClick={()=>{
                                this.edit(emp.ENo)
                                }}>
                        Edit
                        </button>
                    </td>
                                        </tr>
                                    }
                                    else
                                    {
                                        return;
                                    }
                                    
                                }
                                {
                                    return <tr key={emp.ENo}>
                                    <td>
                                        {emp.ENo}
                                    </td>
                                    <td>
                                        {emp.EName}
                                    </td>
                                    <td>
                                        {emp.EAddress}
                                    </td>
                <td>
                    <button className='btn btn-danger'
                    onClick={()=>{
                            this.delete(emp.ENo)
                                 }}>
                    Delete
                    </button>
                </td>

                <td>
                    <button className='btn btn-warning'
                    onClick={()=>{
                            this.edit(emp.ENo)
                            }}>
                    Edit
                    </button>
                </td>
                                    </tr>
                                }

                       
                                })
                            }
                           </tbody>
                        </table>
                        </div>
                    <hr></hr>
                    <Footer></Footer>
                </>);
    }
}
 
export default Dashboard;