
import { useState } from "react";
import Day from "./Day";

function Demo()
{
    const [days, setDays] = 
                useState(["Mon","Tue","Wed","Thur","Fri"]);
    const Remove = (dayToBeRemoved)=>{
        var filteredDays = new Array();
        for(let i=0;i<days.length; i++)
        {
            if(days[i]!== dayToBeRemoved)
            {
                filteredDays.push(days[i]);
            }
        }
        setDays(filteredDays);
    }
    return <>
             <center>
             {
                days.map(day=>
                {
                   // debugger;
                   return <Day key={day} 
                               day={day} 
                               Delete={Remove}/>
                })
             } 
             </center>
           </>
}

export default Demo;

//------------------------------------------------
// import { useState } from "react";

// function Demo()
// {
//     const [days, setDays] = 
//                 useState(["Mon","Tue","Wed","Thur","Fri"]);
//     const Remove = (dayToBeRemoved)=>{
//         var filteredDays = new Array();
//         for(let i=0;i<days.length; i++)
//         {
//             if(days[i]!== dayToBeRemoved)
//             {
//                 filteredDays.push(days[i]);
//             }
//         }
//         setDays(filteredDays);
//     }
//     return <>
//              <center>
//              {
//                 days.map(day=>{
//                    return <div key={day}>
//                                 <h1>{day}</h1>
//                                 <button onClick={()=>{
//                                     Remove(day);
//                                 }}> Delete</button>
//                             </div>
//                 })
//                   } 
//              </center>
//            </>
// }

// export default Demo;