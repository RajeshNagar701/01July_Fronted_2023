/*

This project supports CSS Modules alongside regular stylesheets using the [name].module.css 
file naming convention. CSS Modules allows the scoping of CSS by automatically creating a 
unique classname of the format [filename]\_[classname]\_\_[hash].

CSS Modules let you use the same CSS class name in different files without worrying 
about naming clashes. Learn more about CSS Modules

*/

import React from 'react'

// MODULE CSS IMPORT
import S1 from './mystyle1.module.css'
import S2 from './mystyle2.module.css'

function Module_css() {
  return (
    <div>
        <h1 className={S1.bigblue}>Hi i am css from mystyle1 </h1>
        <h1 className={S2.bigblue}>Hi i am css from mystyle2 </h1>
    </div>
  )
}

export default Module_css