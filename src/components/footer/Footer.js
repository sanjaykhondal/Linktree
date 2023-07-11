import React from 'react';
import './Footer.css'
import footer_log from '../../assets/footer_log.png';
import flag1 from '../../assets/flag1.png';
import flag2 from '../../assets/flag2.png';
import app_store from '../../assets/app_store.png';
import google_play_store from '../../assets/google_play_store.png';
import linktree_logo from '../../assets/linktree_logo.png';
import twitter_logo from '../../assets/twitter_logo.png'
import tiktok_log from '../../assets/tiktok_logo.png';
import insta_logo from '../../assets/insta_logo.png';
function Footer() {
    return (
        <div className='footer_section'>

            <div className='footer_section_one'>
                <div>
                    <h1>Jumpstart your corner of the internet today</h1>
                </div>
                <div className='footer_section_one_button_class'>
                    <div><input type='text' placeholder='linktr.ee/yourname' /></div>
                    <div><button>Claim your Linktree</button></div>
                </div>
            </div>

            <div className='footer_section_two'>

                <div class="container">
                    <footer class="py-5">
                        <div class="row">

                            <div class="col-3">
                                <h5>Company</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 ">The Linktree Blog</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Engineering Blog</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Marketplace</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Whats New</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Press</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Careers</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Social Good</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Contact</a></li>
                                </ul>
                            </div>

                            <div class="col-3">
                                <h5>Community</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Linktree Creator Service Program</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Linktree for Enterprise</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">2022 Creator Report</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Charities</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Creator Profile Directory </a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Explore Templates</a></li>
                                </ul>
                            </div>

                            <div class="col-3">
                                <h5>Support</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Help Topics</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Getting Started</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Linktree Pro</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Features & How-Tos</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Report a Violation</a></li>
                                </ul>
                            </div>

                            <div class="col-3">
                                <h5>Trust & Legal</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Terms & Conditions</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Privacy Notice</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Cookie Notice</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Trust Center</a></li>
                                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Cookie Preferences</a></li>
                                </ul>
                            </div>


                        </div>

                        <div className='social-link'>
                            <div className='social-link-div1'>

                                <div>
                                    <button className="button1">
                                        <a className="btn" href="#">Log in</a>
                                    </button>
                                </div>
                                <div>
                                    <button className="button2">
                                        <a className="btn text-dark" href="#">Get started for free</a>
                                    </button>
                                </div>

                            </div>

                            <div className='social-link-div2'>
                                <ul>
                                    <li><a href='#'><img src={google_play_store} /></a></li>
                                    <li><a href='#'><img src={app_store} /></a></li>
                                    <li><a href='#'><img src={linktree_logo} /></a></li>
                                    <li><a href='#'><img src={twitter_logo} /></a></li>
                                    <li><a href='#'><img src={tiktok_log} /></a></li>
                                    <li><a href='#'><img src={insta_logo} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>

            </div>

            <div className='footer_section_three'>
                <img src={footer_log}></img>
            </div>

            <div className='footer_section_four'>
                <div className='flag_class' >
                    <img src={flag1} />
                    <img src={flag2} />
                </div>
                <div>
                    <h6>
                        We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 Sackville st, Collingwood VIC 3066
                    </h6>
                </div>
            </div>


        </div>
    )
}

export default Footer