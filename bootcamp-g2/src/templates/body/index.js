import React, { Component } from 'react';
import {Information, InformationLink, Experience, Skill } from '../../component'
import './style.css';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: ""
    }
    // this.valueName = ""
  }

  onChangeInput = (e) => {
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
      // this.valueName = e.target.value
    })
    // this.setState({
    //   name: e.target.value
    //   // this.valueName = e.target.value
    // })
    // if (e.target.name === "name") {
    //   this.setState({
    //       name: e.target.value
    //     })
    // }else if(e.target.email == "email"){
    //   this.setState({
    //     email: e.target.value
    //   })
    // }else if(e.target.address == "address"){
    //   this.setState({
    //     address: e.target.value
    //   })
    // }
  }
  render() {
    return (
      <>
        <main>
          <div id="main">
            <div class="row">
              <div class="col-3 personal-information">
                <div class="profile">
                  <h5>
                    PROFILE
                            </h5>
                  <div class="border-dot"></div>

                  <Information judul="NAME" isiJudul="Hartono" />
                  <Information judul="DATE OF BIRTH" isiJudul="08 November 1996" />
                  <Information judul="ADDRESS" isiJudul="Jl. 20 Desember No.81, Pegadungan, Kalideres, Jakarta Barat." />
                  <InformationLink judul="GIT HUB" isiJudul="github.com/cimiko" isiHref="https://github.com/cimiko" />
                </div>

                <div class="profile-information">
                  <h5>
                    AWARDS
                            </h5>
                  <div class="border-dot"></div>

                  <InformationLink judul="JUARA 3 NETWORKING" isiJudul="bsi.ac.id" isiHref="http://www.bsi.ac.id/" />
                </div>

                <div class="profile-information">
                  <h5>
                    CONTACT
                            </h5>
                  <div class="border-dot"></div>

                  <div class="information">
                    <div class="row">
                      <div class="col-9">
                        <Information judul="PHONE NUMBER" isiJudul="0812-1327-3727" />
                      </div>
                      <div class="col-3">
                        <i class="fas fa-phone-square-alt"></i>
                      </div>

                      <div class="col-9">
                        <InformationLink judul="EMAIL" isiJudul="private.hartono@gmail.com" isiHref="mailto:private.hartono@gmail.com" />
                      </div>
                      <div class="col-3">
                        <i class="fas fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="profile-information">
                  <h5>
                    SOCIAL
                            </h5>
                  <div class="border-dot"></div>

                  <div class="information">
                    <div class="row">
                      <div class="col-9">
                        <InformationLink judul="FACEBOOK" isiJudul="華黃 (Hartono Wijaya)" isiHref="https://www.facebook.com/hartono.selalu" />
                      </div>
                      <div class="col-3">
                        <img src="./img/facebook.svg" alt="" />
                      </div>

                      <div class="col-9 mt-3">
                        <InformationLink judul="INSTAGRAM" isiJudul="jishucimiko" isiHref="https://www.instagram.com/jishucimiko/" />
                      </div>
                      <div class="col-3 mt-3">
                        <img src="./img/instagram.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-9 experience">
                <div id="job-title">
                  <h4>ARSITEKTUR DRAFTER</h4>
                </div>

                <div class="border-list"></div>

                <div class="work-experience">
                  <div class="judul">
                    <h4><span class="icon">
                      <i class="fas fa-briefcase"></i>
                    </span>
                                    &nbsp; WORK EXPERIENCE
                                </h4>
                    <div class="border-dot"></div>
                  </div>
                  <div class="row content-experience">
                    <div class="col-4">
                      <Experience judul="CV KOBE PLASTIC" isi="Mei 2014 - Jan 2015" />
                    </div>
                    <div class="col-8">
                      <h6 class="judul-exp">MOLDER DRAFTER</h6>
                      <ul class="content-exp" id="list">
                        <li>Membuat design mainan.</li>
                        <li>Mengimplementasikan design ke molding.</li>
                        <li>Mengubah design molding ke dalam G-Code.</li>
                        <li>Membuat molding menggunakan mesin CNC.</li>
                      </ul>
                    </div>

                    <div class="col-4">
                      <Experience judul="PT JAYASAKTI SUKSES MANDIRI" isi="Jun 2018 - Ags 2018" />
                    </div>
                    <div class="col-8">
                      <h6 class="judul-exp">DRAFTER</h6>
                        <ul class="content-exp" id="list">
                          <li>Membuat gambar kerja GreenHouse.</li>
                          <li>Membuat gambar part-part GreenHouse.</li>
                          <li>Menggambar Masterplan GreenHouse.</li>
                          <li>Membuat design detail 2D & 3D.</li>
                        </ul>
                    </div>

                    <div class="col-4">
                      <Experience judul="PT BALADHIKA KARYA RAHARJA" isi="Ags 2018 - Nov 2018" />
                    </div>
                    <div class="col-8">
                      <h6 class="judul-exp">SALES EXECUTIVE</h6>
                        <ul class="content-exp" id="list">
                          <li>Memasarkan dan menawarkan Property.</li>
                          <li>Mencari Customer dan database baru.</li>
                          <li>Membantu Customer dalam pengajuan akad kredit.</li>
                        </ul>
                    </div>

                    <div class="col-4">
                      <Experience judul="PT MAHKOTA SENTOSA UTAMA" isi="Des 2018 - Sep 2019" />
                    </div>
                    <div class="col-8">
                      <h6 class="judul-exp">FIELD COLLECTION</h6>
                        <ul class="content-exp" id="list">
                          <li>Melakukan follow-up kepada customer Bank Nobu untuk melakukan akad kredit.</li>
                          <li>Membantu dan melengkapi data customer untuk akad kredit Bank Nobu.</li>
                          <li>Membantu Bank Nobu untuk melakukan akad kredit.</li>
                        </ul>
                    </div>
                  </div>
                </div>

                <div class="education">
                  <div class="judul">
                    <h4><span class="icon">
                      <i class="fas fa-book"></i>
                    </span>
                                    &nbsp; EDUCATION
                                </h4>
                    <div class="border-dot"></div>
                  </div>
                  <div class="row content-experience">
                    <div class="col-4">
                      <Experience judul="SD" isi="2002 - 2008" />
                    </div>
                    <div class="col-8">
                      <Experience judul="ATISA DIPAMKARA" isi="Kabupaten Tangerang, Indonesia" />
                    </div>

                    <div class="col-4">
                      <Experience judul="SMP" isi="2008 - 2011" />
                    </div>
                    <div class="col-8">
                      <Experience judul="PERGURUAN BUDDHI" isi="Tangerang, Indonesia" />
                    </div>

                    <div class="col-4">
                      <Experience judul="SMK" isi="2011 - 2014" />
                    </div>
                    <div class="col-8">
                      <Experience judul="YUPPENTEK 1 (Teknik Mesin)" isi="Tangerang, Indonesia" />
                    </div>

                    <div class="col-4">
                      <Experience judul="Bootcamp" isi="Nov 2019 - Mar 2020" />
                    </div>
                    <div class="col-8">
                      <Experience judul="EDU-TECH (Fullstack Developer)" isi="Tangerang, Indonesia" />
                    </div>

                    <div class="col-4">
                      <Experience judul="Bootcamp" isi="Oct 2020 - Present" />
                    </div>
                    <div class="col-8">
                      <Experience judul="G2 Academy (Fullstack Web & Mobile Development)" isi="Jakarta, Indonesia" />
                    </div>
                  </div>
                </div>

                <div class="skills">
                  <div class="judul">
                    <h4><span class="icon">
                      <i class="fas fa-lightbulb"></i>
                    </span>
                                    &nbsp; SKILLS
                                </h4>
                    <div class="border-dot"></div>
                  </div>
                  <div class="row content-experience">
                    <h5 class="judul-exp">PROFESSIONAL SKILLS</h5>
                    <div class="col-6">
                      <div class="row">
                        <div class="col-6">
                          <p class="content-skill">
                            Microsoft Office
                                            </p>
                        </div>
                        {/* <Skill black="5" count="7"/> */}
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Autocad 2D & 3D
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Google SketchUp
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            MasterCam
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            FluidSim
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            HTML & CSS
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            JavaScript
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            JQUERY
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            PHP
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col-6">
                          <p class="content-skill">
                            Laravel
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Python
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Express Js
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Java
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            UI/UX
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            SEO
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            SAP ERP
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Adobe Photoshop
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Adobe Illustrator
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row content-experience">
                    <h5 class="judul-exp">PERSONAL SKILLS</h5>
                    <div class="col-6">
                      <div class="row">
                        <div class="col-6">
                          <p class="content-skill">
                            Organisation
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Communication
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Interpersonal Skills
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Multitasking
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>


                      </div>
                    </div>
                    <div class="col-6">
                      <div class="row">
                        <div class="col-6">
                          <p class="content-skill">
                            Transferable Skills
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Computer Skills
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Problem-solving
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>

                        <div class="col-6">
                          <p class="content-skill">
                            Management Skills
                                            </p>
                        </div>
                        <div class="col-6 skill-indicator">
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="fas fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                          <i class="far fa-circle"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Body;