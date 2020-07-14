import React from 'react'
import Head from 'next/head'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="shortcut icon" href="/favicon.png" />

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet"></link>

                <title>SAMACO TOYS & LEISURE</title>
            </Head>

            <Header />

            <Nav />
            
            {children}

            <Footer />
        </>
    )
}

export default Layout
