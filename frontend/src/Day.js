function Day(props)
{
    debugger;

    const Change = ()=>{
        props.day = "Something else";
    }
    return <div>
                <h1>{props.day}</h1>
                <button onClick={()=>{
                    props.Delete(props.day);
                }}> Delete</button>
                <button onClick={Change}>Change Value Locally</button>
            </div>
}

export default Day;