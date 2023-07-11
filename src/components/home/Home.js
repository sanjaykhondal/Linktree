import React from 'react'
import Nav from '../nav/Nav'
import Section_First from '../section_first/Section_First'
import Section_Second from '../section_second/Section_Second'
import Section_Third from '../section_third/Section_Third'
import Section_Fourth from '../section_fourth/Section_Fourth'
import Footer from '../footer/Footer'
import Accordion_Page from '../accordion_page/Accordion_Page'
function Home() {
    return (
        <div>
            <Nav />
            <Section_First />
            <Section_Second />
            <Section_Third />
            <Section_Fourth />
            <Accordion_Page/>
            <Footer />
        </div>
    )
}

export default Home