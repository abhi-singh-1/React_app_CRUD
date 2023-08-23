import { useEffect, useState } from "react";

function Sample()
{
    //state = {message : "Hi"}.........in class component
    var [message,setMessage] =   useState("Hi");
    var [company,setCompany] =   useState("Sunbeam");

    useEffect(()=>{
        console.log("This is like Component Did Mount!!")
    },[]);//Empty array denotes call the function like 
          // componentDidMount!

    useEffect(()=>{
        console.log("This is like Component Did Update!!");
        console.log("This code executed b'coz message changed!!!!!!")
    },[message]);//This is like componentDidUpdate
                //but tied up with state change for message

    useEffect(()=>{
        console.log("This is like Component Did Update!!");
        console.log("This code executed b'coz company changed!!!!!!")
    },[company]);//This is like componentDidUpdate
                //but tied up with state change for company
            
    useEffect(()=>{
        console.log("This is like Component Did Update!!");
        console.log("This code executed b'coz company OR Message changed!!!!!!")
    },[message, company]);//This is like componentDidUpdate
                //but tied up with state change for message or company
                        
    var DoChange = ()=>
    {
        console.log("Inside button click...")
        console.log("setting state value for message & company")
        //.........below is applicable in class component
        //this.setState({message : "Hello!"})
        setMessage("Hello");
        setCompany("Infosys");
    }
    var DoChange1 = ()=>
    {
        console.log("Changing message..")
        setMessage("1234");
    }

    var DoChange2 = ()=>
    {
        console.log("changing company..")
        setCompany("Synechron");
    }


    console.log("about to render UI...")
    return <div>
                <h1>{message}</h1>
                <h1>{company}</h1>
                <button onClick={DoChange1}>Change Message </button><br></br>
            
                <button onClick={DoChange2}>Change Company</button><br></br>

                <button onClick={DoChange}>Change Message and Company</button><br></br>
            </div>
}

export default Sample;