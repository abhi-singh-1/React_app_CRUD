import React, { Component } from 'react';
import './common.css';


function Header()
{
    return (<div className='header'>
                <center> <h1>Header</h1></center>
            </div>);
}
export default Header;


// class Header extends Component {
//     render() 
//     { 
//         debugger;
//         console.log("Header Render is getting called..")
//         return (<div className='header'>
//                    <center> <h1>Header</h1></center>
//                 </div>);
//     }
// }
// export default Header;