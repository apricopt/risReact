import React from 'react'


import Hero from '../components/hero'
import Twocards from '../components/twocard'
import Threecards from '../components/threecards'

function Homecontentnormal(props) {
    return (
        <div id="home-content" className="hide-mobile">


            <Hero dataToRender={props.dataToRender} />
            <Twocards dataToRender={props.dataToRender} />
            <Threecards dataToRender={props.dataToRender} />



        </div>
    )
}

export default Homecontentnormal
