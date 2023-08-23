function DashboardRow(props)
{
    return <tr>
                    <td>
                        {props.emp.ENo}
                    </td>
                    <td>
                        {props.emp.EName}
                    </td>
                    <td>
                        {props.emp.EAddress}
                    </td>
                    <td>
                    <button className='btn btn-danger'
                    onClick={()=>{
                     props.deleteEmp(props.emp.ENo)
                    }}>
                    Delete
                    </button>
                    </td>

                    <td>
                    <button className='btn btn-warning'
                    onClick={()=>{
                    props.edit(props.emp.ENo)
                    }}>
                    Edit
                    </button>
                    </td>
           </tr>
}
export default DashboardRow;