import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/Layout/layout"
import SEO from "../../components/Layout/seo"

import IndoorCams from "../../images/Menu_Cards/IN-8015FHD.png"
import OutdoorCams from "../../images/Menu_Cards/IN-9020FHD.png"
import CamSoftware from "../../images/Menu_Cards/InstarVision_Android.png"

const EnglishWiz = () => (
  <Layout>
    <SEO title="English" />
    <p>Welcome to the INSTAR Installation Guide.</p>
    <br/><br/>
    <ul class="category-grid-full">
        <li>
            <div class="grid-inner"><span class="category-image"><img alt="" width="" src={IndoorCams} /></span>
                <div class="inner"><Link to="/English/Indoor_Cameras/"
                        class="button-more"><span class="category-name">Indoor <span> Cameras</span></span></Link>
                    <ul class="subcategory-grid">
                        <li><Link to="/English/Indoor_Cameras/IN-8015FHD/"
                                class="subcategory-link"><span class="subcategory-name">IN-8015 FHD</span></Link></li>
                        <li><Link to="/English/Indoor_Cameras/IN-8001FHD/"
                                class="subcategory-link"><span class="subcategory-name">IN-8003 FHD</span></Link></li>
                    </ul><Link to="/English/Indoor_Cameras/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
        <li>
            <div class="grid-inner"><span class="category-image"><img alt="" width="" src={OutdoorCams} /></span>
                <div class="inner"><Link to="/English/Outdoor_Cameras/"
                        class="button-more"><span class="category-name">Outdoor <span> Cameras</span></span></Link>
                    <ul class="subcategory-grid">
                        <li><Link to="/English/Outdoor_Cameras/IN-9020FHD/"
                                class="subcategory-link"><span class="subcategory-name">IN-9020 FHD</span></Link>
                        </li>
                        <li><Link to="/English/Outdoor_Cameras/IN-9008FHD/"
                                class="subcategory-link"><span class="subcategory-name">IN-9008 FHD</span></Link></li>
                    </ul><Link to="/English/Outdoor_Cameras/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
        <li>
            <div class="grid-inner"><span class="category-image"><img alt="" width="" src={CamSoftware} /></span>
                <div class="inner"><Link to="/English/Software/"
                        class="button-more"><span class="category-name">Camera <span>Software</span></span></Link>
                    <ul class="subcategory-grid">
                        <li><Link to="/English/Software/InstarVision_Windows/"
                                class="subcategory-link"><span class="subcategory-name">InstarVision Windows</span></Link>
                        </li>
                        <li><Link to="/English/Software/InstarVision_Android/"
                                class="subcategory-link"><span class="subcategory-name">InstarVision Android</span></Link></li>
                    </ul><Link to="/English/Software/"
                        class="button-more"><span>View more</span></Link>
                </div>
            </div>
        </li>
    </ul>
  </Layout>
)

export default EnglishWiz