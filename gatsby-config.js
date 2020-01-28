module.exports = {
  siteMetadata: {
    title: `INSTAR Wizard`,
    description: `INSTAR ist eine der bekanntesten Marken für hochwertige Sicherheitstechnik die in Deutschland entwickelt wird. INSTAR bietet IP Kameras / Überwachungskameras für den Innen und Außenbereich und bietet zudem eine einzigartige Cloud Aufnahmeplattform inkl. einer Fehlalarm und Objekterkennung. Alle INSTAR Kameras sind "nicht" Cloud gebunden und können problemlos auch ohne Internet im lokalen Netzwerk per LAN, WLAN oder mit PoE eingebunden werden. Egal welche Überwachungskamera von INSTAR Sie verwenden, alle Kameras sind kompatibel mit Drittanbietersystemen wie z.B. Synology, QNAP, Asustor, Netgear, Luxone, KNX, Homeatic und vielen weiteren. Als Anbieter von WLAN Netzwerkkameras, HD IP Kameras, steuerbare IP Kameras, IP Kameras mit Infrarot Nachtsicht sowie PoE Injektoren, Gigabit PoE Injectoren, Powerline Adapter, Router, Switches, Bewegungsmelder mit PIR und Mikrowellen, Mikrofone, Objektive, eine patentierte Heizung bietet INSTAR auch weiteres Zubehör für Ihre IP Überwachungskamera an.`,
    author: `Mike Polinowski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/INSTAR-Logo-210px.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
