import React from 'react'
import { useState } from 'react'

const Register = () => {
  const [childName, setChildName] = useState("");
  const [email, setEmail] = useState("");
  const [childAge, setChildAge] = useState("");

  const handleSubmit = (e) => {

  } 
  return (
    <>
      <h1 className="jumbotron bg-primary text-center square">Register</h1>
      <div className="contact-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h4>√ Thanks for Registration. We will contact you with available time slots.
              </h4><br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="contact-area-container">
                <div className="single-title">
                  <h3>Registration Form - Free Trial Class</h3>
                </div>


                <div className="contact-form-container">
                  <form method="post" id="register" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input type="text" name="ChildName" placeholder="Child's Name *" value={childName} onChange={(e)=>setChildName(e.target.value)} required />
                      </div>

                      <div className="col-md-6">
                        <input type="email" name="Email" placeholder="Email *" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <input style={{height:"15px", width:"18px"}} type="radio" name="Gender" value="male"
                           /> Male
                        <input style={{height:"15px", width:"18px"}} type="radio" name="Gender" value="female" />
                        Female &nbsp;
                      </div>

                      <div className="col-md-6">
                        <input type="number" name="Age" placeholder="Child's Age * e.g. 12"  value={childAge} onChange={(e)=>setChildAge(e.target.value)} required />
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-md-6">
                        <input type="text" name="Address" placeholder="Address *" required />
                      </div>

                      <div className="col-md-6">
                        <input type="number" name="Pincode" placeholder="Pincode *" required />
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-md-6">
                        <input type="text" name="FatherName" placeholder="Father's Name *" required />
                      </div>

                      <div className="col-md-6">
                        <input type="text" name="MotherName" placeholder="Mother's Name *" required />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <input type="number" name="PrimaryContact"
                          placeholder="Primary Contact * (10 digits)" required />
                      </div>
                      <div className="col-md-6">
                        <input type="number" name="SecondaryContact"
                          placeholder="Secondary Contact (10 digits)" />
                      </div>
                    </div>
                    <div className="row">

                      <div className="col-md-6">
                        <input type="text" name="SchoolName" placeholder="Name of School" />
                      </div>

                      <div className="col-md-6">
                        <input type="number" name="ChildClass" placeholder="Class e.g. 9" />
                      </div>
                    </div>

                    <br />
                    <h4>Choose a trial class *</h4>
                    <br />
                    <div className="row">

                      <div className="col-md-4">
                        <input style={{height:"15px", width:"18px"}} type="radio" name="TrialClass"
                          value="mobile" required="required" /> Mobile Apps
                      </div>
                      <div className="col-md-4">
                        <input style={{height:"15px", width:"18px"}} type="radio" name="TrialClass" value="web"
                          required="required" /> Web Development
                      </div>
                      <div className="col-md-4">

                        <input style={{height:"15px", width:"18px"}} type="radio" name="TrialClass"
                          value="scratch" required="required" /> Scratch

                      </div>
                      <div className="col-md-4">

                        <input style={{height:"15px", width:"18px"}} type="radio" name="TrialClass"
                          value="Python" required="required" /> Python

                      </div>
                      <div className="col-md-4">
                        <input style={{height:"15px", width:"18px"}} type="radio" name="TrialClass"
                          value="arduino" required="required" /> Arduino (Kit Required)
                      </div>
                    </div>

                    <br />
                    <h4>How did you hear about us? *</h4>
                    <br />
                    <div className="row">

                      <div className="col-md-4">

                        <input style={{height:"15px", width:"18px"}} type="radio" name="HowHear"
                          value="website" required /> Website
                        <br />
                        <input style={{height:"15px", width:"18px"}} type="radio" name="HowHear"
                          value="friends" required /> Friends
                        <br />
                      </div>
                      <div className="col-md-4">
                        <input style={{height:"15px", width:"18px"}} type="radio" name="HowHear"
                          value="facebook" required /> Facebook
                        <br />
                        <input style={{height:"15px", width:"18px"}} type="radio" name="HowHear"
                          value="twitter" required /> Twitter
                        <br />
                      </div>
                      <div className="col-md-4">

                        <input style={{height:"15px", width:"18px"}} type="radio" name="HowHear"
                          value="newsletter" required /> Newsletter
                        <br />
                        <input style={{height:"15px", width:"18px"}} type="radio" name="HowHear" value="other"
                          required /> Other
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button type="submit" className="button-default button-yellow">
                          <i className="fa fa-send"></i> Submit
                        </button>
                      </div>
                      <br />
                    </div>
                  </form>

                </div>

              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="single-widget-item">
                <div className="single-title">
                  <h3>Details</h3>
                </div>
                <div className="single-widget-container">

                  <ul className="class-infos">
                    <li id="fee">
                      <i className="fa fa-inr"></i>2,000 (for 4 classes)
                    </li>

                    <li>
                      <i className="fa fa-clock-o"></i>1 hrs (duration)
                    </li>
                    <li>
                      <i className="fa fa-calendar"></i>1 class per week
                    </li>
                    <li>
                      <i className="fa fa-users"></i>8 - 14 yrs (age group)
                    </li>
                    <li>
                      <i className="fa fa-globe"></i>Online classes only
                    </li>

                  </ul>

                </div>
              </div>


              <div className="single-widget-item">
                <div className="single-title">
                  <h3>Prerequisite</h3>
                </div>
                <div className="single-title">
                  <h5>For Mobile App Development</h5>
                </div>
                <div className="single-widget-container">

                  <ul className="class-infos">
                    <li id="fee">
                      <i className="fa fa-wifi"></i>High speed internet</li>
                    <li>
                      <i className="fa fa-android"></i>Android phone (No iPhone)</li>
                    <li>
                      <i className="fa fa-google"></i>Gmail account</li>

                  </ul>
                </div>
                <div className="single-title">
                  <h5>For Arduino</h5>
                </div>
                <div className="single-widget-container">

                  <ul className="class-infos">
                    <li id="fee">
                      <i className="fa fa-wifi"></i>High speed internet</li>
                    <li>
                      <i className="fa fa-cogs"></i>Arduino Kit</li>
                    <li>
                      <i className="fa fa-google"></i>Gmail account</li>

                  </ul>
                </div>
              </div>


              <div className="single-widget-item">
                <div className="single-title">
                  <h3>Contact Us</h3>
                </div>
                <div className="contact-address-info">
                  <div className="contact-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <span>+91-9560248770</span>
                  </div>
                  <div className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <span>info@raspbians.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
