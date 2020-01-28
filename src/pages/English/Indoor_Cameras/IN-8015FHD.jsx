import React from "react"

import Slideshow from 'react-slidez'

import SEO from "../../../components/Layout/seo"
import Layout from "../../../components/Layout/layout"
import LANOverview from "../../../components/English/IN-8015FHD/LANOverview"
import LANCable from "../../../components/English/IN-8015FHD/LANCable"
import LANAntenna from "../../../components/English/IN-8015FHD/LANAntenna"
import LANPower from "../../../components/English/IN-8015FHD/LANPower"
import LANRouter from "../../../components/English/IN-8015FHD/LANRouter"
import LANSearch from "../../../components/English/IN-8015FHD/LANSearch"
import LANLogin from "../../../components/English/IN-8015FHD/LANLogin"
import LANWizard1 from "../../../components/English/IN-8015FHD/LANWizard1"
import LANWizard2 from "../../../components/English/IN-8015FHD/LANWizard2"
import LANWizard3 from "../../../components/English/IN-8015FHD/LANWizard3"
import LANWizard4 from "../../../components/English/IN-8015FHD/LANWizard4"
import LANWizard5 from "../../../components/English/IN-8015FHD/LANWizard5"
import LANFlash from "../../../components/English/IN-8015FHD/LANFlash"
import LANUpdate1 from "../../../components/English/IN-8015FHD/LANUpdate1"
import LANUpdate2 from "../../../components/English/IN-8015FHD/LANUpdate2"
import LANUpdate3 from "../../../components/English/IN-8015FHD/LANUpdate3"



export default class SecondPage extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <Layout>
          <SEO title="IN-8015 Full HD" />
          <Slideshow
            showIndex
            showArrows
            autoplay
            enableKeyboard
            useDotIndex
            slideInterval={8000}
            defaultIndex={1}
            effect={'right'}
            height={'100%'}
            width={'100%'} >
            <LANOverview />
            <LANCable />
            <LANAntenna />
            <LANRouter />
            <LANPower />
            <LANSearch />
            <LANLogin />
            <LANWizard1 />
            <LANWizard2 />
            <LANWizard3 />
            <LANWizard4 />
            <LANWizard5 />
            <LANFlash />
            <LANUpdate1 />
            <LANUpdate2 />
            <LANUpdate3 />
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
          </Slideshow>
        </Layout>
      )
    }
    return null
  }
}