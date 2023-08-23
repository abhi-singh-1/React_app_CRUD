function DashboardRecordAddition(props)
{
    return (<div className='myTable'>
    <div className="form-group">
        <input type="number" className="form-control" 
        name="ENo" 
        placeholder="Enter ENo"
        value={props.emp.ENo}
        onChange={props.OnTextChange}/>
    </div>
    <div className="form-group">
        <input type="text" className="form-control" 
        name="EName" 
        placeholder="Enter EName"
        value={props.emp.EName}
        onChange={props.OnTextChange}/>
    </div>
    <div className="form-group">
        <input type="text" className="form-control" 
        name="EAddress" 
        placeholder="Enter EAddress"
        value={props.emp.EAddress}
        onChange={props.OnTextChange}/>
    </div>
    <button className="btn btn-primary"
             onClick={props.insert}>
        Add Record
    </button>

    <button  className="btn btn-success"
             style={{margin: 10 }}
             onClick={props.update}>
        Update Record
    </button>
</div>)
}

export default DashboardRecordAddition;