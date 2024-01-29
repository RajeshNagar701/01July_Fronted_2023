/*

Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processorSass is completely compatible with all 
versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

npm i sass

save file style.scss extension 

*/

import React from 'react'

import './mysass.scss';

function Sass_css() {
  return (
    <div>
        <h1 className='myhead'>Hi i am sass css</h1>
        <hr />
        <h1>Nested css</h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
            </ul>
        </nav>
        <hr />

        <h1 className='mytext'>Hi i am text nested</h1>
        <hr />
        <button className='btn-basic'>Basic Button</button>
        <button className='btn-red'>Red Button</button>
        <button className='btn-green'>Green Button</button>
        <button className='btn-blue'>Blue Button</button>
        <button className='btn-pink'>Pink Button</button>
        <button className='btn-orange'>Orange Button</button>
    </div>

  )
}

export default Sass_css