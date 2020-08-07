import React, { useState, useEffect } from 'react'
import Head from 'next/head'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

import { i18n } from '../i18n'

const Layout = ({ children }) => {
    const [isRTL, setIsRTL] = useState(false)

    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)
    })

    function handleChangeLang(lang) {
        i18n.changeLanguage(lang);

        if (lang === 'ar') {
            setIsRTL(true)
        } else {
            setIsRTL(false)
        }
    }


    return (
        <>
            <Head>
                {/* Required meta tags */}
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <link rel="shortcut icon" href="/favicon.png" />

                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet"></link>
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>

                <title>SAMACO TOYS & LEISURE</title>
            </Head>

            <Header isRTL={isRTL} handleChangeLang={handleChangeLang} />

            <Nav isRTL={isRTL} />

            {children}

            {/* <Footer /> */}
        </>
    )
}

export default Layout
