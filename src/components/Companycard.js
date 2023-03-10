import React from 'react'

export default function Companycard({employer}) {

  return (

    <div class="card mt-3"  >
        <div class="card-body">
            <div className='d-flex flex-row'
                        style=  {{gap:"15px"}}>
                <div
                        style={{backgroundColor:"darkblue",  width:   "70px",  height: "70px", borderRadius: "50%",textAlign:"center",color:"white",lineHeight:"70px",fontSize:"2rem"}} class="circle-singleline mr-auto ">
                              {employer.firstname.charAt(0)}  {employer.secondname.charAt(0)}

                </div>
                <div>
                <p className='fw-bold'  style={{color:"darkblue"}}>{employer.name} Company</p>
                    <p>{employer.companytype}</p>

                </div>
          </div>
          <div className='mt-1'>
            <p><span className='fw-bold'>TOTAL JOBS POSTED:{employer.totaljobsposted}</span></p>
            <p><span className='fw-bold'>TOTAL INTERNSHIPS POSTED:{employer.totalinternshipsposted}</span></p>
          </div>

          <div className='mt-1'>
            <p>{employer.description}</p>
          </div>
       </div>
       <div class="card-body d-flex flex-row justify-content-between"
            style=  {{backgroundColor:"#EEEEEE",height:"60px"}}>
          <div>

          </div>
          <div>
             <a href="#" class="card-link">View Company</a>
             <a href="#" class="card-link">Save Company</a>
          </div>
        </div>
    </div>


  )
}
