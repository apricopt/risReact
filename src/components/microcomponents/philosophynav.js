import React from 'react'


import { NavLink } from 'react-router-dom'

function Philosophynav() {
    return (
        <div className="refinement Home category-refinement">
            <ul id="category-level-1">
                <li>
                    <NavLink exact to={"/ourphilosophy"}>
                        <span className="menu-font-italic">our</span>&nbsp;<span className="menu-font-caps">Philosophy</span></NavLink>
                </li>
                <li>
                    <NavLink exact to={"/vcafe"}>
                        <span className="menu-font-italic">V</span>&nbsp;<span className="menu-font-caps">Cafe</span></NavLink>
                </li>
                {/*<li>
                  <a class="refinement-link" href="https://www.kellywearstler.com/on/demandware.store/Sites-KellyWearstler-Site/default/Page-Show?cid=kw_projects">
                      <span class="menu-font-italic">the</span>&nbsp;<span class="menu-font-caps">Projects</span></a>
                  </a>
              </li>*/}

                <li>
                    <NavLink exact to={"/welnessroom"}>
                        <span className="menu-font-italic">Welness</span>&nbsp;<span className="menu-font-caps">Room</span></NavLink>
                </li>
            </ul>
        </div>

    )
}

export default Philosophynav
