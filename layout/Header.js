import React, { useState } from 'react'

const Header = ({ isRTL, handleChangeLang }) => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    const showMenu = () => {
        try {
            const elm = document.getElementById('my-nav').style;

            elm.display = 'block'
            elm.background = '#2d4375'
            elm.width = '100%'
            elm.paddingTop = '120px'

            setIsMenuShown(true)
        } catch (error) { }
    }

    const hideMenu = () => {
        try {
            const elm = document.getElementById('my-nav').style;

            elm.display = 'none'
            elm.background = 'transparent'
            elm.width = '250px'

            setIsMenuShown(false)
        } catch (error) { }
    }

    return (
        <>
            <div className={`header ${isRTL ? 'rtl' : 'ltr'}`}>
                <div className="logo" onClick={() => { window.scrollTo(0, 0) }}>
                    <img src="/img/logo.png" alt="SAMACO TOYS & LEISURE" />
                </div>
                <div className="social-media" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {/* Social Media */}
                    <div className="hide-sm">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                    </div>

                    {/* Language */}
                    {
                        isRTL ?
                            <button className='lang' onClick={() => handleChangeLang('en')}> EN </button>
                            :
                            <button className='lang' onClick={() => handleChangeLang('ar')}> AR </button>
                    }

                    {/* Menu */}
                    <div className="display-menu">
                        {
                            isMenuShown ?
                                <button className='lang' onClick={hideMenu}>
                                    <i className="fas fa-times" style={{ marginRight: 0, marginLeft: 0 }}></i>
                                </button>
                                :
                                <button className='lang' onClick={showMenu}>
                                    <i className="fas fa-bars" style={{ marginRight: 0, marginLeft: 0 }}></i>
                                </button>
                        }
                    </div>
                </div>
            </div>

            <style jsx>{`
                .header {
                    position: fixed;
                    display: flex;
                    justify-content: space-between;
                    padding-top: 40px;
                    padding-bottom: 30px;
                    width: 100%;
                    z-index: 999;
                }

                .header .logo {
                    padding-right: ${isRTL ? '260px' : '0px'};
                    padding-left: ${isRTL ? '0px' : '260px'};
                }

                img {
                    width: 161px;
                    height: 50px;
                    object-fit: contain;
                }

                .header .social-media {
                    padding-right: ${isRTL ? '0px' : '100px'};
                    padding-left: ${isRTL ? '100px' : '0px'};
                }

                i {
                    font-size: 24px;
                    margin-left: ${isRTL ? '0px' : '40px'};
                    margin-right: ${isRTL ? '40px' : '0px'};
                }

                .lang {
                    height: 50px;
                    width: 50px;
                    background-color: rgba(45, 67, 117, 1);
                    border: 1px solid white;
                    border-radius: 66px;
                    color: white;
                    font-size: 20px;
                    cursor: pointer;
                    margin-left: ${isRTL ? '0px' : '40px'};
                    margin-right: ${isRTL ? '40px' : '0px'};
                }

                @media only screen and (max-width: 600px) {
                    .lang {
                        margin-left: ${isRTL ? '0px' : '20px'};
                        margin-right: ${isRTL ? '20px' : '0px'};
                    }
                }

                @media only screen and (max-width: 425px) {
                    img {
                        width: 120px;
                    }
                }
            `}</style>
        </>
    )
}

export default Header
