
import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Jobcard from './Jobcard';
import Fetchjob from './Fetchjob';
import Internshipappliedcard from './Internshipappliedcard';
function ViewCompany({employers}) {
  const [jobs,setJobs] = useState([])
  const params= useParams()
  const employerselected = employers.find((employer) =>employer.id === Number(params.id));

  console.log(employerselected)
  return (
    <div className="container mt-4 mb-4">
      <h4 style={{ color: "darkblue" }}>Company Public Profile</h4>
      <div class="card shadow-sm mt-3">
        <div class="card-body">
          <div className="d-flex flex-row" style={{ gap: "15px" }}>
            <div
              style={{
                backgroundColor: "darkblue",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                textAlign: "center",
                color: "white",
                lineHeight: "150px",
                fontSize: "2rem",
              }}
              class="circle-singleline mr-auto "
            >
             {employerselected.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <p>{employerselected.name}</p>
              <p className="fw-bold" style={{ color: "darkblue" }}>
               {employerselected.companytype}
              </p>
              <p> Joined {employerselected.created_at} </p>
            </div>
          </div>
        </div>
      </div>

      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-4 mt-3"
      fill
    >
      <Tab eventKey="jobs" title="JOBS">
       {employerselected.jobs.map((j)=>{
        return <Fetchjob employerselected={employerselected} j={j}></Fetchjob>
       })}

      </Tab>
      <Tab eventKey="internship" title="INTERNSHIPS">
        {/* {employerselected.internship.map((internship)=>{
          return <Internshipappliedcard internship={internship}/>
        })} */}
      </Tab>
      <Tab eventKey="profile" title="PROFILE">

      </Tab>

    </Tabs>
    </div>
  );
}

export default ViewCompany;
