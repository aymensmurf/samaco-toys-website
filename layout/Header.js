import React, { useState, useEffect } from 'react'

const Header = ({ isRTL, handleChangeLang }) => {
    const [isMenuShown, setIsMenuShown] = useState(false);
    const [isLogoShown, setIsLogoShown] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

    })

    const handleScroll = () => {
        const pos = document.getElementById('about-us')?.offsetTop - 0;

        window.pageYOffset < 300 ? setIsLogoShown(false) : setIsLogoShown(true)
    }


    const showMenu = () => {
        try {
            const elm = document.getElementById('my-nav').style;

            elm.display = 'block'
            elm.background = '#2d4375'
            elm.width = '100%'
            elm.paddingTop = '120px'
            elm.zIndex = 99

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
                    {isLogoShown &&
                        <img src="/img/logo.svg" alt="SAMACO TOYS & LEISURE" />
                    }
                </div>




                <div className="social-media" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    {/* Social Media */}
                    <div className="hide-sm">
                        <a href="#region" className="header-social-box">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#region" className="header-social-box">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#region" className="header-social-box">
                            <i className="fab fa-twitter"></i>
                        </a>


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
                    padding-top: 20px;
                    padding-bottom: 50px;
                    width: 100%;
                    z-index: 999;
                    background: rgb(45,67,117);
                    background: linear-gradient(180deg, rgba(45,67,117,1) 44%, rgba(255,255,255,0) 100%);
                }

                .header .logo {
                    padding-right: ${isRTL ? '260px' : '0px'};
                    padding-left: ${isRTL ? '0px' : '260px'};
                }

                img {
                    width: 100px;
                    height: 45px;
                    object-fit: contain;
                    cursor: pointer;
                }

                .header .social-media {
                    padding-right: ${isRTL ? '0px' : '100px'};
                    padding-left: ${isRTL ? '100px' : '0px'};
                }

                i {
                    font-size: 20px;
                    margin-left: ${isRTL ? '0px' : '30px'};
                    margin-right: ${isRTL ? '30px' : '0px'};
                    cursor: pointer;
                    transition: .3s;
                }

                i:hover {
                    color: #EFB71C;
                }

                .lang {
                    height: 40px;
                    width: 40px;
                    background-color: rgba(45, 67, 117, 1);
                    border: 1px solid white;
                    border-radius: 66px;
                    color: white;
                    font-size: 18px;
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
                        width: 100px;
                    }
                }
            `}</style>
        </>
    )
}

export default Header
