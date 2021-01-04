import React, { Component } from 'react'
import "./img/facebook.svg";
import "./img/instagram.svg";

class Body extends Component {
    render() {
        return (
            <div>
                <div id="main">
                    <div class="row">
                        <div class="col-3 personal-information">
                            <div class="profile">
                                <h5>
                                    PROFILE
                                </h5>
                                <div class="border-dot"></div>

                                <div class="information">
                                    <h6>NAME</h6>
                                    <p>Hartono</p>
                                </div>

                                <div class="information">
                                    <h6>DATE OF BIRTH</h6>
                                    <p>08 November 1996</p>
                                </div>

                                <div class="information">
                                    <h6>ADDRESS</h6>
                                    <p>Jl. 20 Desember No.81, Pegadungan, Kalideres, Jakarta Barat.</p>
                                </div>

                                <div class="information">
                                    <h6>GIT HUB</h6>
                                    <a href="https://github.com/cimiko">github.com/cimiko</a>
                                </div>
                            </div>

                            <div class="profile-information">
                                <h5>
                                    AWARDS
                            </h5>
                                <div class="border-dot"></div>

                                <div class="information">
                                    <h6>JUARA 3 NETWORKING</h6>
                                    <a href="http://www.bsi.ac.id/">bsi.ac.id</a>
                                </div>
                            </div>

                            <div class="profile-information">
                                <h5>
                                    CONTACT
                            </h5>
                                <div class="border-dot"></div>

                                <div class="information">
                                    <div class="row">
                                        <div class="col-9">
                                            <h6>PHONE NUMBER</h6>
                                            <p>0812-1327-3727</p>
                                        </div>
                                        <div class="col-3">
                                            <i class="fas fa-phone-square-alt"></i>
                                        </div>

                                        <div class="col-9">
                                            <h6>EMAIL</h6>
                                            <a href="mailto:private.hartono@gmail.com">private.hartono@gmail.com</a>
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
                                            <h6>FACEBOOK</h6>
                                            <a href="https://www.facebook.com/hartono.selalu">華黃 (Hartono Wijaya)</a>
                                        </div>
                                        <div class="col-3">
                                            <img src="facebook.svg" alt=""/>
                                        </div>

                                            <div class="col-9 mt-3">
                                                <h6>INSTAGRAM</h6>
                                                <a href="https://www.instagram.com/jishucimiko/">jishucimiko</a>
                                            </div>
                                            <div class="col-3 mt-3">
                                                <img src="instagram.svg" alt=""/>
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
                                                <h6 class="judul-exp">CV KOBE PLASTIC</h6>
                                                <p class="content-exp">Mei 2014 - Jan 2015</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">MOLDER DRAFTER</h6>
                                                <p class="content-exp">
                                                    <ul id="list">
                                                        <li>Membuat design mainan.</li>
                                                        <li>Mengimplementasikan design ke molding.</li>
                                                        <li>Mengubah design molding ke dalam G-Code.</li>
                                                        <li>Membuat molding menggunakan mesin CNC.</li>
                                                    </ul>
                                                </p>
                                            </div>

                                            <div class="col-4">
                                                <h6 class="judul-exp">PT JAYASAKTI SUKSES MANDIRI</h6>
                                                <p class="content-exp">Jun 2018 - Ags 2018</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">DRAFTER</h6>
                                                <p class="content-exp">
                                                    <ul id="list">
                                                        <li>Membuat gambar kerja GreenHouse.</li>
                                                        <li>Membuat gambar part-part GreenHouse.</li>
                                                        <li>Menggambar Masterplan GreenHouse.</li>
                                                        <li>Membuat design detail 2D & 3D.</li>
                                                    </ul>
                                                </p>
                                            </div>

                                            <div class="col-4">
                                                <h6 class="judul-exp">PT BALADHIKA KARYA RAHARJA</h6>
                                                <p class="content-exp">Ags 2018 - Nov 2018</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">SALES EXECUTIVE</h6>
                                                <p class="content-exp">
                                                    <ul id="list">
                                                        <li>Memasarkan dan menawarkan Property.</li>
                                                        <li>Mencari Customer dan database baru.</li>
                                                        <li>Membantu Customer dalam pengajuan akad kredit.</li>
                                                    </ul>
                                                </p>
                                            </div>

                                            <div class="col-4">
                                                <h6 class="judul-exp">PT MAHKOTA SENTOSA UTAMA</h6>
                                                <p class="content-exp">Des 2018 - Sep 2019</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">FIELD COLLECTION</h6>
                                                <p class="content-exp">
                                                    <ul id="list">
                                                        <li>Melakukan follow-up kepada customer Bank Nobu untuk melakukan akad kredit.</li>
                                                        <li>Membantu dan melengkapi data customer untuk akad kredit Bank Nobu.</li>
                                                        <li>Membantu Bank Nobu untuk melakukan akad kredit.</li>
                                                    </ul>
                                                </p>
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
                                                <h6 class="judul-exp">SD</h6>
                                                <p class="content-exp">2002 - 2008</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">ATISA DIPAMKARA</h6>
                                                <p class="content-exp">
                                                    Kabupaten Tangerang, Indonesia
                                    </p>
                                            </div>

                                            <div class="col-4">
                                                <h6 class="judul-exp">SMP</h6>
                                                <p class="content-exp">2008 - 2011</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">PERGURUAN BUDDHI</h6>
                                                <p class="content-exp">
                                                    Tangerang, Indonesia
                                    </p>
                                            </div>

                                            <div class="col-4">
                                                <h6 class="judul-exp">SMK</h6>
                                                <p class="content-exp">2011 - 2014</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">YUPPENTEK 1 (Teknik Mesin)</h6>
                                                <p class="content-exp">
                                                    Tangerang, Indonesia
                                    </p>
                                            </div>

                                            <div class="col-4">
                                                <h6 class="judul-exp">Bootcamp</h6>
                                                <p class="content-exp">Nov 2019 - Mar 2020</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">EDU-TECH (Fullstack Developer)</h6>
                                                <p class="content-exp">
                                                    Tangerang, Indonesia
                                    </p>
                                            </div>

                                            <div class="col-4">
                                                <h6 class="judul-exp">Bootcamp</h6>
                                                <p class="content-exp">Oct 2020 - Present</p>
                                            </div>
                                            <div class="col-8">
                                                <h6 class="judul-exp">G2 Academy (Fullstack Web & Mobile Development)</h6>
                                                <p class="content-exp">
                                                    Jakarta, Indonesia
                                    </p>
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
                    </div>
        )
    }
}

export default Body;