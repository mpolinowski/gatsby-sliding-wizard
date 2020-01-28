import React from "react"
import { Link } from "gatsby"

import Layout from "../../../components/Layout/layout"
import SEO from "../../../components/Layout/seo"

import InstarWindows from "../../../images/Menu_Cards/InstarVision_Windows.png"
import InstarAndroid from "../../../images/Menu_Cards/InstarVision_Android.png"
import InstariPhone from "../../../images/Menu_Cards/InstarVision_iPhone.png"
import InstariPad from "../../../images/Menu_Cards/InstarVision_iPad.png"
import InstarMetro from "../../../images/Menu_Cards/InstarVision_Metro.png"
import InstarCloud from "../../../images/Menu_Cards/InstarVision_Cloud.png"

const SoftwareCards = () => (
  <Layout>
  <SEO title="Software" />
    <p>Welcome to the INSTAR Installation Guide.</p>
    <h3><u>Software</u></h3>
    <br/><br/>
    <ul class="category-grid-full">
        <li>
            <div class="grid-inner"><span class="category-image"><img alt="" width="" src={InstarWindows} /></span>
                <div class="inner"><Link to="/English/Software/InstarVision_Windows/"
                        class="button-more"><span class="category-name">InstarVision Windows</span></Link>
                    <br/><br/>
                    <Link to="/English/Software/InstarVision_Windows/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
        <li>  
          <div class="grid-inner"><span class="category-image"><img alt="" width="" src={InstarAndroid} /></span>
                <div class="inner"><Link to="/English/Software/InstarVision_Android/"
                        class="button-more"><span class="category-name">InstarVision Android</span></Link>
                    <br/><br/>
                    <Link to="/English/Software/InstarVision_Android/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
        <li>
          <div class="grid-inner"><span class="category-image"><img alt="" width="" src={InstariPhone} /></span>
                <div class="inner"><Link to="/English/Software/InstarVision_iPhone/"
                        class="button-more"><span class="category-name">InstarVision iPhone</span></Link>
                    <br/><br/>
                    <Link to="/English/Software/InstarVision_iPhone/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
        <li>
          <div class="grid-inner"><span class="category-image"><img alt="" width="" src={InstariPad} /></span>
                <div class="inner"><Link to="/English/Software/InstarVision_iPad/"
                        class="button-more"><span class="category-name">InstarVision iPad</span></Link>
                    <br/><br/>
                    <Link to="/English/Software/InstarVision_iPad/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
        <li>
          <div class="grid-inner"><span class="category-image"><img alt="" width="" src={InstarMetro} /></span>
                <div class="inner"><Link to="/English/Software/InstarVision_Windows_Metro/"
                        class="button-more"><span class="category-name">InstarVision Windows Metro</span></Link>
                    <br/><br/>
                    <Link to="/English/Software/InstarVision_Windows_Metro/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
        <li>
          <div class="grid-inner"><span class="category-image"><img alt="" width="" src={InstarCloud} /></span>
                <div class="inner"><Link to="/English/Software/INSTAR_Cloud/"
                        class="button-more"><span class="category-name">INSTAR Cloud</span></Link>
                    <br/><br/>
                    <Link to="/English/Software/INSTAR_Cloud/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
    </ul>
  </Layout>
)

export default SoftwareCards