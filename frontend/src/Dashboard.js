
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Header';
import Footer from './Footer';
import './common.css';
import { useEffect, useState } from 'react';
import DashboardRow from './DashboardRow';
import DashboardRecordAddition from './DashboardRecordAddition';

function Dashboard()
{
    const [emps,setEmps] =  useState([]);
    const [emp,setEmp] =  
            useState({ENo: 0, EName : "", EAddress: ""});
    const [message,setMessage] =  useState("");
    const [searchText,setSearchText] =  useState("");

    useEffect(()=>{
        setTimeout(() => 
        {
            setMessage("");
        }, 3000);
    }, [message])

   
    useEffect(()=>{
        console.log("Inside COmponent Did Mount")
        select();
    }, [])

   useEffect(()=>
    {
        console.log("Component Did Update is called..")
    }, [emps, emp, message, searchText]);

    const select=()=>
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
                    setEmps(receivedEmps);
                }
        };
        helper.open("GET", "http://127.0.0.1:9999/emps");
        helper.send();
    }

    const deleteEmp=(ENo)=>
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
                       setMessage("Delete Successfull!")
                       select();
                    }
                    else
                    {
                       setMessage("Something went wrong!")
                    }
                }
        };
        helper.open("DELETE", 
                        "http://127.0.0.1:9999/emps/"+ENo);
        helper.send();   
    }

    const insert=()=>
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
                        setMessage("Insert Successfull!")
                        select();
                        setEmp({ENo: 0, 
                                         EName : "", EAddress: ""});
                    }
                    else
                    {
                        setMessage("Something went wrong!")
                    }
                }
        };
        helper.open("POST","http://127.0.0.1:9999/emps");
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send(JSON.stringify(emp));   

        
    }
    const edit=(ENo)=>{
        debugger;
        console.log("You need to find record with ENO = " + ENo + " from - ");

        console.log(emps)

        emps.map((empToEdit)=>{
            if(empToEdit.ENo == ENo)
            {
                setMessage("Record Found!!")
                var copyOfEmpToEditFromArray  =
                   {...empToEdit} 
                setEmp(copyOfEmpToEditFromArray);
                return;
            }
        })
    }
    
    const update=()=>{
        var helper = new XMLHttpRequest();
        helper.onreadystatechange = ()=>{
            if(helper.readyState == 4 &&
                helper.status == 200)
                {
                    var responseReceived = 
                        JSON.parse(helper.responseText);
                    if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
                    {
                        setMessage("Update Successfull!")
                        select();
                        setEmp({ENo: 0, 
                                EName : "", 
                                EAddress: ""});
                    }
                    else
                    {
                        this.setMessage("Something went wrong!")
                    }
                }
        };
        helper.open("PUT","http://127.0.0.1:9999/emps/"+ emp.ENo);
        helper.setRequestHeader("Content-Type", "application/json")
        helper.send(JSON.stringify(emp));  
    }
    const OnTextChange=(args)=>{
        var copyOfEmp= 
                {...emp};
        copyOfEmp[args.target.name] = 
                args.target.value;
        setEmp(copyOfEmp);
    }
    const onSearch=(args)=>{
        debugger;
        setSearchText(args.target.value);
    }
   
    console.log("Dashboard render is getting called..")

    return (<>
                    <DashboardRecordAddition
                        emp={emp}
                            OnTextChange={OnTextChange}
                            insert={insert}
                            update={update}/>
                    <hr></hr>
                    <div className='mytable alert alert-warning'>
                       <h1> {message}</h1>
                    </div>
                    <hr></hr>
                    <div className='table-responsive'>
                    <div style={{float: "right", marginRight: 300}}>
                    Search:
                        <input type='text' 
                               value={searchText} 
                               onChange={onSearch}/>
                        <br></br>
                    </div>
                        <table className='table table-bordered myTable'>
                           <tbody>
                           {   
                               emps.map((emp)=>{
                                if(searchText!="")
                                {
                                    debugger;
                                    if(emp.EAddress.toLowerCase().
                                    includes(searchText.toLowerCase()))
                                    {
                      return <DashboardRow  key={emp.ENo} 
                                  emp={emp}
                                  deleteEmp={deleteEmp}
                                  edit={edit}/>
                                    }
                                    else
                                    {
                                        return;
                                    }
                                    
                                }
                                {
                    return <DashboardRow 
                                    key={emp.ENo} 
                                    emp={emp}
                                    deleteEmp={deleteEmp}
                                    edit={edit}/>;
                                }

                       
                                })
                            }
                           </tbody>
                        </table>
                        </div>
                   
            </>);
    }

 
export default Dashboard;