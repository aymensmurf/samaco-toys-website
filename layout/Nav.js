import React, { useState, useEffect } from 'react'
import { withTranslation } from '../i18n'

const Nav = ({ t, isRTL }) => {
    const [index, setIndex] = useState(0)
    const [positions, setPositions] = useState([])

    const links = [
        {
            title: t('home'),
            link: "#home",
        },
        {
            title: t('about_us'),
            link: "#about-us",
        },
        {
            title: t('founder'),
            link: "#founder",
        },
        {
            title: t('philosophy'),
            link: "#philosophy",
        },
        {
            title: t('ceo'),
            link: "#ceo",
        },
        {
            title: t('team'),
            link: "#team",
        },
        {
            title: t('facility'),
            link: "#facility",
        },
        {
            title: t('reach'),
            link: "#reach",
        },
        {
            title: t('brands'),
            link: "#brands",
        },
        {
            title: t('customers'),
            link: "#customers",
        },
        {
            title: t('media'),
            link: "#media",
        },
        {
            title: t('contact'),
            link: "#contact",
        },
    ]

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
    }, [])

    const handleScroll = () => {
        let positions = [];
        let sbp = window.pageYOffset;

        links.map(({ link }) => {
            let anchor = document.getElementById(link.replace('#', ''));

            if (anchor) {
                positions.push(anchor.offsetTop)
            }
        })
        setPositions(positions)

        if ((sbp >= positions[0]) && (sbp < positions[1])) {
            setIndex(0)
        } else if ((sbp >= positions[1]) && (sbp < positions[2])) {
            setIndex(1)
        } else if ((sbp >= positions[2]) && (sbp < positions[3])) {
            setIndex(2)
        } else if ((sbp >= positions[3]) && (sbp < positions[4])) {
            setIndex(3)
        } else if ((sbp >= positions[4]) && (sbp < positions[5])) {
            setIndex(4)
        } else if ((sbp >= positions[5]) && (sbp < positions[6])) {
            setIndex(5)
        } else if ((sbp >= positions[6]) && (sbp < positions[7])) {
            setIndex(6)
        } else if ((sbp >= positions[7]) && (sbp < positions[8])) {
            setIndex(7)
        } else if ((sbp >= positions[8]) && (sbp < positions[9])) {
            setIndex(8)
        } else if ((sbp >= positions[9]) && (sbp < positions[10])) {
            setIndex(9)
        } else if ((sbp >= positions[10]) && (sbp < positions[11])) {
            setIndex(10)
        } else if ((sbp >= positions[11])) {
            setIndex(11)
        } else {
            setIndex(-1)
        }
    }

    return (
        <>
            <nav id="my-nav" className={`${isRTL ? 'rtl' : 'ltr'}`}>
                {
                    links.map(({ title }, i) =>
                        <NavBtn
                            key={i}
                            id={i}
                            index={index}
                            title={title}
                            handleClick={() => {
                                window.scrollTo(0, positions[i] + 10)
                            }}
                            isRTL={isRTL}
                        />
                    )
                }
            </nav>

            <style jsx>{`
                nav {
                    position: fixed;
                    height: 100vh;
                    width: 250px;
                    top: 0px;
                    right: ${isRTL ? '20px' : 'auto'};
                    left: ${isRTL ? 'auto' : '20px'};
                    z-index: 99;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                
                @media only screen and (max-width: 1024px) {
                    nav {
                        display: none;
                        clear: both;
                    }
                }
                
            `}</style>
        </>
    )
}

Nav.getInitialProps = async () => ({
    namespacesRequired: ['nav'],
})

export default withTranslation('nav')(Nav)


const NavBtn = ({ id, index, title, handleClick, isRTL }) => {
    return (
        <div className="nav-btn" onClick={handleClick}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-circle" />
                <p>{title}</p>
            </div>

            <style jsx>{`
                .nav-btn {
                    padding: 4px 6px;
                    cursor: pointer;
                    transition: .5s;
                }

                .nav-btn:hover {
                    padding-right: ${isRTL ? '12px' : '0px'};
                    padding-left:  ${isRTL ? '0px' : '12px'};
                }

                .nav-btn i {
                    font-size: 8px;
                    margin-right: ${isRTL ? '0px' : '12px'};
                    margin-left:  ${isRTL ? '12px' : '0px'};
                }

                p, i {
                    color: ${(index == id) ? '#fff' : '#847F7F'};
                    font-size: 20px;
                }
                
                @media only screen and (max-width: 1600px) {
                    .nav-btn {
                        padding: 6px;
                    }

                    p {
                        font-size: 16px;
                    }
                }
            `}</style>
        </div>
    )
}