import React, { useState, useEffect } from 'react'
import { i18n } from '../i18n'

const Header = () => {
    const [isRTL, setIsRTL] = useState(false)

    useEffect(() => {
        let isRTL = i18n.language === 'ar' ? true : false;
        setIsRTL(isRTL)
    })

    return (
        <>
            <div className={`header ${isRTL ? 'rtl' : 'ltr'}`}>
                <div>
                    <img
                        src="/img/logo.png"
                        alt="SAMACO TOYS & LEISURE"
                        style={{
                            width: 161,
                            height: 50,
                            objectFit: 'contain',
                            marginLeft: isRTL ? 0 : 260,
                            marginRight: isRTL ? 260 : 0
                        }} />
                </div>
                <div style={{ marginRight: isRTL ? 0 : 100, marginLeft: isRTL ? 100 : 0 }}>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>

            <style jsx>{`
                .header {
                    position: fixed;
                    display: flex;
                    justify-content: space-between;
                    padding-top: 75px;
                    padding-bottom: 75px;
                    width: 100%;
                }

                i {
                    font-size: 24px;
                    margin-left: ${isRTL ? '0px' : '40px'};
                    margin-right: ${isRTL ? '40px' : '0px'};
                }
            `}</style>
        </>
    )
}

export default Header
