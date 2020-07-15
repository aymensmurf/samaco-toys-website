import React from 'react'

const link = [
    {
        title: "Home",
        link: "#home",
    },
    {
        title: "About us",
        link: "#about-us",
    },
    {
        title: "Founder",
        link: "#founder",
    },
    {
        title: "Philosophy",
        link: "#philosophy",
    },
    {
        title: "CEO",
        link: "#ceo",
    },
    {
        title: "Team",
        link: "#team",
    },
    {
        title: "Facility",
        link: "#facility",
    },
    {
        title: "Reach",
        link: "#reach",
    },
    {
        title: "Brands",
        link: "#brands",
    },
    {
        title: "Customers",
        link: "#customers",
    },
    {
        title: "Media",
        link: "#media",
    },
    {
        title: "#contact",
        link: "#contact",
    },
]

const Nav = () => {
    return (
        <>
            <nav>
                <button className='lang'>
                    AR
                </button>

                <div className="grid-2">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ height: 40, borderRight: '4px solid #EFB71C', marginTop: -10 }} />
                        <Number num='01' />
                        <Number num='02' />
                        <Number num='03' />
                        <Number num='04' />
                        <Number num='05' />
                        <Number num='06' />
                        <Number num='07' />
                        <Number num='08' />
                        <Number num='09' />
                        <Number num='10' />
                        <Number num='11' />
                        <Number num='12' />
                        <div style={{ height: 30, borderRight: '4px solid #EFB71C' }} />
                    </div>
                    <div style={{ borderLeft: '1px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ height: 40, borderLeft: '4px solid #EFB71C', marginTop: -10 }} />
                        <NavBtn title='Home' link='#home' />
                        <NavBtn title='About us' link='#about-us' />
                        <NavBtn title='Founder' link='#founder' />
                        <NavBtn title='Philosophy' link='#philosophy' />
                        <NavBtn title='CEO' link='#ceo' />
                        <NavBtn title='Team' link='#team' />
                        <NavBtn title='Facility' link='#facility' />
                        <NavBtn title='Reach' link='#reach' />
                        <NavBtn title='Brands' link='#brands' />
                        <NavBtn title='Customers' link='#customers' />
                        <NavBtn title='Media' link='#media' />
                        <NavBtn title='Contact' link='#contact' />
                        <div style={{ height: 30, borderLeft: '4px solid #EFB71C', }} />
                    </div>
                </div>
            </nav>

            <style jsx>{`
                nav {
                    position: fixed;
                    height: 100vh;
                    width: 200px;
                }

                .lang {
                    position: absolute;
                    left: 28%;
                    top: 65px;
                    height: 66px;
                    width: 66px;
                    background-color: rgba(45, 67, 117, 1);
                    border: 1px solid white;
                    border-radius: 66px;
                    color: white;
                    font-size: 20px;
                }

                .grid-2 {
                    display: grid;
                    grid-template-columns: auto auto;
                    height: 100%;
                }
            `}</style>
        </>
    )
}

export default Nav


const NavBtn = ({ title, link }) => {
    return (
        <div className="nav-btn">
            <a href={link}>{title}</a>

            <style jsx>{`
                .nav-btn {
                    padding: 15px 6px;
                    border-left: 4px solid #EFB71C;
                }

                a {
                    color: #847F7F;
                    text-decoration: none;
                    font-size: 20px;
                }
            `}</style>
        </div>
    )
}

const Number = ({ num }) => {
    return (
        <div className="number">
            <p>{num}</p>

            <style jsx>{`
                .number {
                    padding: 15px 10px;
                    padding-left: 50px;
                    border-right: 4px solid #EFB71C;
                    text-align: center;
                }

                p {
                    color: #847F7F;
                    text-decoration: none;
                    font-size: 20px;
                    transform: rotate(270deg);
                }
            `}</style>
        </div>
    )
}
