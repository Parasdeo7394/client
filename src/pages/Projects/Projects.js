import React from 'react';
import {BsGithub} from 'react-icons/bs';
import './Projects.css';
import Spin from 'react-reveal/Spin';

const Projects = () => {
  return (
    <>
       <div className="container project" id='projects'>
          <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>TOP RECENT PROJECTS</h2>
                <hr />
                <p className='pb-3 text-center'><u style={{color:'blue', fontSize:'24px'}}> [1]DRESS SHOPPING WEBSITE FOR WOMEN </u> : These are some features
                (a) AUTHENTIFICATION (b) AUTHORIZATION (c) AUTHENTIFICATION
                (Separate Dahboard for Users) (d) AUTHENTIFICATION(Separate Dahboard for Admin) with Create category,create Product ,Users order (e)search ,Filter (f) Category & Product Api CRUD (g)Add to Cart (h) Shpopping Cart (i) Payment Gateway Integration (j) users order list (k) Admin Mangage order starus
                <hr />
                <u style={{color:'blue', fontSize:'24px'}}>[2]AUTHENTIFICATION </u> : These are some features (a)Register (b)Login (c)User Dashboard (d)Logout (e)Forgot Password (f)Send Reset Password link to email (g)Reset Password
                </p>
                {/* card design */}
                <div className="row" id='ads'>
                  <Spin>
                    <div className="col-md-4">
                      <div className="card rounded">
                        <div className="card-image">
                          <span className="card-notify-badge">Full stack</span>
                          <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" alt="project1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                          <span className="card-detail-badge">Node</span>
                          <span className="card-detail-badge">Express</span>
                          <span className="card-detail-badge">react</span>
                          <span className="card-detail-badge">Mongodb</span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h6 className="text-uppercase"> DRESS SHOPPING WEBSITE FOR WOMEN</h6>
                          </div>
                          <div class="card-body">
                             <a href="https://github.com/Parasdeo7394/Mern_Ecommerce_Web"><BsGithub color='black' size={30} className='ms-2'/></a>
                             <a className='ad-btn' href="https://weak-zipper-toad.cyclic.app/">view</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card rounded">
                        <div className="card-image">
                          <span className="card-notify-badge">Full stack</span>
                          <img src="https://img.freepik.com/free-photo/showing-cart-trolley-shopping-online-sign-graphic_53876-133967.jpg" alt="project1" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                          <span className="card-detail-badge">Node</span>
                          <span className="card-detail-badge">Express</span>
                          <span className="card-detail-badge">react</span>
                          <span className="card-detail-badge">Mongodb</span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h6 className="text-uppercase">AUTHENTIFICATION</h6>
                          </div>
                          <div class="card-body">
                             <a href="https://github.com/Parasdeo7394/MERN_AUTHENTIFICATION"><BsGithub color='black' size={30} className='ms-2'/></a>
                             <a className='ad-btn' href="#">view</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="card rounded">
                        <div className="card-image">
                          <span className="card-notify-badge">UI/UX</span>
                          <img src="https://img.freepik.com/premium-photo/online-job-search-modish-website-worker-search-job-opportunities_31965-60442.jpg" alt="project3" />
                        </div>
                        <div className="card-image-overly m-auto mt-3">
                          <span className="card-detail-badge">Figma</span>
                          <span className="card-detail-badge">Adobe XD</span>
                          
                          <span className="card-detail-badge">Photoshop</span>
                        </div>
                        <div className="card-body text-center">
                          <div className="ad-title m-auto">
                            <h5 className="text-uppercase">Job Portal</h5>
                          </div>
                          <div class="card-body">
                             <BsGithub color='black' size={30} className='ms-2'/>
                             <a className='ad-btn' href="https://www.behance.net/parasdeo7394">view</a>
                          </div>
                        </div>
                         
                      </div>
                    </div>
                  </Spin>
                </div>
        </div>
                             
                             
                          
    </>
  )
}

export default Projects