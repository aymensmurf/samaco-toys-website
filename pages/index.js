
import React, { useState, useEffect } from 'react'

import Layout from '../layout/Layout'
import { Home, AboutUs, Founder, Philosophy, CEO, Team, Facility, Reach, Brands, Customers, Media, Contact } from '../components/index'

import { i18n, withTranslation } from '../i18n'

const Index = () => {
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    let isRTL = i18n.language === 'ar' ? true : false;
    setIsRTL(isRTL)
  })

  return (
    <Layout>

      <div className={isRTL ? 'rtl' : 'ltr'}>
        <Home isRTL={isRTL} />
        <AboutUs isRTL={isRTL} />
        <Founder isRTL={isRTL} />
        <Philosophy />
        <CEO isRTL={isRTL} />
        <Team />
        <Facility />
        <Reach />
        <Brands />
        <Customers />
        <Media />
        <Contact isRTL={isRTL}/>
      </div>

      <style>{`
        section {
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 100vh;
          padding-right: ${isRTL ? '260px' : '100px'};
          padding-left: ${isRTL ? '100px' : '260px'};
          scroll-snap-align: start;
        }
      `}</style>

    </Layout>
  )
}

export default Index
