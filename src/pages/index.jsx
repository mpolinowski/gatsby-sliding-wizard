import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/layout"
import SEO from "../components/Layout/seo"

import Germany from "../images/Menu_Cards/Germany.png"
import Britain from "../images/Menu_Cards/Britain.png"
import France from "../images/Menu_Cards/France.png"

const IndexPage = () => (
  <Layout>
    <SEO title="English" />
    <p>Welcome to the INSTAR Installation Guide.</p>
    <SEO title="Home" />
    <h3>Willkommen beim INSTAR Installation Assistant.</h3>
    <h5>Wählen Sie Ihre Sprache</h5>
    <br/><br/>
    <ul class="category-grid-full">
        <li>
          <Link to="/German/" class="button-more">
            <div class="grid-inner">
                <span class="category-image"><img alt="" width="" src={Germany} /></span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/English/" class="button-more">
            <div class="grid-inner">
                <span class="category-image"><img alt="" width="" src={Britain} /></span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/French/" class="button-more">
            <div class="grid-inner">
                <span class="category-image"><img alt="" width="" src={France} /></span>
            </div>
          </Link>
        </li>
    </ul>
  </Layout>
)

export default IndexPage
