import React from 'react'
import './Section_First.css';
// import ImageGallery from './ImageGallery';
import img1 from '../../assets/img1.png'
function Section_First() {
    return (
        <div className='section_one_main_div'>

            <div className='section_one_left_div'>
                <div>
                    <h1>Everything you are. In one, simple link in bio.</h1>
                </div>
                <div>
                    <h6>Join 35M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</h6>
                </div>
                <div className='section_one_button_class'>
                    <div><input type='text' placeholder='linktr.ee/yourname' /></div>
                    <div><button>Claim your Linktree</button></div>
                </div>
            </div>

            <div className='section_one_right_div'>
                {/* <img src= {img1} /> */}
            </div>
        </div>
    )
}

export default Section_First