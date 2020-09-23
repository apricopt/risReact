import React from 'react'


import Philosophynav from "../components/microcomponents/philosophynav";


function Ourphilosophy() {
    return (
        <React.Fragment>
            <div id="wrapper" class="pt_customer-service">

                <div
                    id="main"
                    role="main"
                    class="page-content clearfix page-kw_studio_page"
                >
                    <div id="primary" class="primary-content">
                        <section>
                            <div class="content-asset">
                                <Philosophynav />
                                <div>
                                    <h1> i am the our philosophy  page</h1>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Ourphilosophy
