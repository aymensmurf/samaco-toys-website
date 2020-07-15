import React, { useState, useEffect } from 'react'

const links = [
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
        title: "Contact",
        link: "#contact",
    },
]

const Nav = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (process.browser) {
            const link = '#' + window.location.href.split('#')[1];

            const indexOfLink = links.findIndex(elm => elm.link === link)
            setIndex(indexOfLink)
        }
    })




    return (
        <>
            <nav>
                <button className='lang'>
                    AR
                </button>

                <div className="grid-2">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ height: 40, borderRight: '4px solid #EFB71C', marginTop: -10 }} />
                        {links.map(({ link }, i) => <Number key={i} id={i} index={index} link={link} />)}
                    </div>
                    <div style={{ borderLeft: '1px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ height: 40, borderLeft: '4px solid #EFB71C', marginTop: -10 }} />
                        {links.map(({ title, link }, i) => <NavBtn key={i} id={i} index={index} title={title} link={link} handleClick={() => setIndex(i)} />)}
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


const NavBtn = ({ id, index, title, link, handleClick }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(window.location.href.includes(link))
    })

    return (
        <div className="nav-btn" onClick={handleClick}>
            <a href={link}>{title}</a>

            <style jsx>{`
                .nav-btn {
                    padding: 15px 6px;
                    border-left: ${(id >= 0) && (id <= index) ? '4px solid #EFB71C' : '4px solid transparent'};
                }

                a {
                    color: ${isActive ? 'white' : '#847F7F'};
                    text-decoration: none;
                    font-size: 20px;
                }
            `}</style>
        </div>
    )
}

const Number = ({ id, index, link }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(window.location.href.includes(link))
    })

    return (
        <div className="number">
            <p>{(id + 1 < 10) ? `0${id + 1}` : id + 1}</p>

            <style jsx>{`
                .number {
                    padding: 15px 10px;
                    padding-left: 50px;
                    border-right: ${(id >= 0) && (id <= index) ? '4px solid #EFB71C' : '4px solid transparent'};
                    text-align: center;
                }

                p {
                    color: ${isActive ? 'white' : '#847F7F'};
                    text-decoration: none;
                    font-size: 20px;
                    transform: rotate(270deg);
                }
            `}</style>
        </div>
    )
}
