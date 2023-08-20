import Swal from "sweetalert2";
import './App.css';
import React from 'react'
function Carousel(){
   const Alert=()=>{
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
   }
   return(
    <div ClassName="abu">
    <button onClick={Alert}style={{margin:5,width:100}}>Alert</button>
    </div>
   );
}
export default Carousel