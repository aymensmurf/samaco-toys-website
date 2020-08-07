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
            <nav id="my-nav">
                <div style={{
                    height: '100%',
                    display: "grid",
                    gridTemplateRows: 'repeat(3, 1fr)'
                }}>
                    <div className="fix-nav-border">
                        <div className="nav-grid-2">
                            <div>
                                <div style={{
                                    borderRight: '4px solid #EFB71C',
                                    height: '100%'
                                }} />
                            </div>
                            <div>
                                <div
                                    style={{
                                        borderLeft: '1px solid white',
                                        height: '100%'
                                    }}>
                                    <div style={{
                                        borderLeft: '4px solid #EFB71C',
                                        height: '100%'
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="nav-grid-2">
                        <div
                            className={`numbers ${isRTL ? 'rtl' : 'ltr'}`}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                position: 'relative'
                            }}>
                            {links.map(
                                ({ title }, i) =>
                                    <Number
                                        key={i}
                                        id={i}
                                        index={index}
                                        isRTL={isRTL}
                                    />
                            )}
                        </div>
                        <div
                            className={`menu ${isRTL ? 'rtl' : 'ltr'}`}
                            style={{
                                borderLeft: isRTL ? 'none' : '1px solid white',
                                borderRight: isRTL ? '1px solid white' : 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                            {
                                links.map(({ title }, i) =>
                                    <NavBtn
                                        key={i}
                                        id={i}
                                        index={index}
                                        title={title}
                                        handleClick={() => {
                                            window.scrollTo(0, positions[i])
                                        }}
                                        isRTL={isRTL}
                                    />
                                )
                            }
                        </div>
                    </div>


                    <div className="fix-nav-border">
                        <div className="nav-grid-2">
                            <div>
                                {index === links.length - 1 &&
                                    <div style={{
                                        borderRight: '4px solid #EFB71C',
                                        height: '100%'
                                    }} />
                                }
                            </div>
                            <div>
                                <div
                                    style={{
                                        borderLeft: '1px solid white',
                                        height: '100%'
                                    }}>
                                    {index === links.length - 1 &&
                                        <div style={{
                                            borderLeft: '4px solid #EFB71C',
                                            height: '100%'
                                        }} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <style jsx>{`
                nav {
                    position: fixed;
                    height: 100vh;
                    width: 250px;
                    top: 0px;
                    right: ${isRTL ? '0px' : 'auto'};
                    left: ${isRTL ? 'auto' : '0px'};
                }

                .nav-grid-2 {
                    display: grid;
                    grid-template-columns: ${isRTL ? '67% 33%' : '33% 67%'};
                    height: 100%;
                }

                .nav-grid-2 .numbers {
                    order: ${isRTL ? 1 : 0};
                }
                .nav-grid-2 .menu {
                    order: ${isRTL ? 0 : 1};
                }
                
                @media only screen and (max-width: 1023px) {
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
            <p>{title}</p>

            <style jsx>{`
                .nav-btn {
                    padding: 10px 6px;
                    border-left: ${isRTL ? 'none' : (id >= 0) && (id <= index) ? '4px solid #EFB71C' : '4px solid transparent'};
                    border-right: ${isRTL ? (id >= 0) && (id <= index) ? '4px solid #EFB71C' : '4px solid transparent' : 'none'};
                    cursor: pointer;
                    transition: .5s;
                }

                .nav-btn:hover {
                    padding-right: ${isRTL ? '12px' : '0px'};
                    padding-left:  ${isRTL ? '0px' : '12px'};
                }

                p {
                    color: ${(index == id) ? '#fff' : '#847F7F'};
                    font-size: 20px;
                }
                
                @media only screen and (max-width: 1440px) {
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

const Number = ({ id, index, isRTL }) => {
    return (
        <div className="number">
            <p>{(id + 1 < 10) ? `0${id + 1}` : id + 1}</p>

            <style jsx>{`
                .number {
                    padding: 10px 6px;
                    padding-left: ${isRTL ? '6px' : '50px'};
                    padding-right: ${isRTL ? '50px' : '6px'};
                    border-right: ${isRTL ? 'none' : (id >= 0) && (id <= index) ? '4px solid #EFB71C' : '4px solid transparent'};
                    border-left: ${isRTL ? (id >= 0) && (id <= index) ? '4px solid #EFB71C' : '4px solid transparent' : 'none'};
                    text-align: center;
                    transition: .5s;
                    display: flex;
                    justify-content: flex-end;
                }

                p {
                    color: ${(index == id) ? '#fff' : '#847F7F'};
                    font-size: 20px;
                    transform: rotate(270deg);
                }
                
                @media only screen and (max-width: 1440px) {
                    .number {
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
