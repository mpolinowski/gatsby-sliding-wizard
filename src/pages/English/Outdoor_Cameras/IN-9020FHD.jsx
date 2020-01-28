import React from "react"

import Slideshow from 'react-slidez'

import SEO from "../../../components/Layout/seo"
import Layout from "../../../components/Layout/layout"
// import ComponentOne from "../../../components/English/IN-8015FHD/ComponentOne"
// import ComponentTwo from "../../../components/English/IN-8015FHD/ComponentTwo"
// import ComponentThree from "../../../components/English/IN-8015FHD/ComponentThree"

export default class SecondPage extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
        <Layout>
        <React.Fragment>
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
            {/* <ComponentOne />
            <ComponentTwo />
            <ComponentThree /> */}
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/>
          </Slideshow>
        </React.Fragment>
        </Layout>
      )
    }
    return null
  }
}