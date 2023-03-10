import React, { useState } from "react";
import connect from "../assets/employer.png";
import {useNavigate} from "react-router-dom"

function SignCompanies({onSignUpEmployer }) {

  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);

  let navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    if (password === passwordConfirmation ){
      fetch("/employersignup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          firstname,
          secondname,
          email,
          password,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((employer) =>{
            onSignUpEmployer(employer)
            navigate("/employerdash")
          });
        }else{
          r.json().then((err) => {
            setErrors((err))

          })

      }
      });
    }  else {
      setErrors({passwordconfirmation:"passwords dont match"})
    }

  }



  return (
    <section class="vh-80">
      <div class="container py-5 h-100">

        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img src={connect} class="img-fluid" alt="Phone image"></img>
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <h4 style={{ color: "darkblue" }} className="text-center">
                Employer Registration
              </h4>
              <div className="col">
                <input onChange={(e) =>{
                setName(e.target.value)
                setErrors([])
                }}
                  type="text"
                  className="form-control form-control-lg mb-2"
                  placeholder="Company Name"
                  value={name}
                  required
                />
                {errors.name ? <p className="text-danger">{`name: ${errors.name}`}</p>:null}
              </div>
              <div className="col">
                <input onChange={(e) =>{
                setFirstname(e.target.value)
                setErrors([])
                }}
                  type="text"
                  className="form-control form-control-lg mb-2"
                  placeholder="Contact Person First Name"
                  value={firstname}
                  required
                />
                 {errors.firstname ? <p className="text-danger">{`firstname: ${errors.firstname}`}</p>:null}
              </div>
              <div className="col">
                <input
                onChange={(e) =>{
                setSecondname(e.target.value)
                setErrors([])
                }}
                  type="text"
                  className="form-control form-control-lg mb-2"
                  placeholder="Contact Person Second Name"
                  value={secondname}
                  required
                />
                 {errors.secondname ? <p className="text-danger">{`secondname: ${errors.secondname}`}</p>:null}
              </div>
              <div className="col">
                <input
                onChange={(e) =>{
                setEmail(e.target.value)
                setErrors([])
                }}
                  type="text"
                  className="form-control form-control-lg"
                  id="confirmPassword"
                  placeholder="Email"
                  value={email}
                  required
                />
                 {errors.email? <p className="text-danger">{`email: ${errors.email}`}</p>:null}
              </div>

              <div className="row mt-2">
                <div className="col">
                  <input
                  onChange={(e) =>{
                setPassword(e.target.value)
                setErrors([])
                }}
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Password"
                    value={password}
                    required
                  />

                </div>
                <div className="col">
                  <input
                  onChange={(e) =>{
                setPasswordConfirmation(e.target.value)
                setErrors([])
                }}
                    type="password"
                    className="form-control form-control-lg"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={passwordConfirmation}
                    required
                  />

                </div>
                {errors.passwordconfirmation? <p className="text-danger">{` ${errors.passwordconfirmation}`}</p>:null}
                {errors.password? <p className="text-danger">{`paswword: ${errors.password}`}</p>:null}
              </div>

              <div>
                <button
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  style={{ width: "100%" }}
                  onClick={(e)=>{handleSubmit(e)}}
                >
                  Sign in
                </button>
              </div>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">
                  HAVE AN ACCOUNT?
                </p>
              </div>
              <div>
                <a
                  class="btn btn-primary btn-lg btn-block mb-1"
                  style={{ backgroundColor: "#3b5998", width: "100%" }}
                  href="#!"
                  role="button"
                >
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignCompanies;
