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
    const [positions, setPositions] = useState([])

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
            <nav>
                <button className='lang'>
                    AR
                </button>

                <div className="grid-2">
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ height: 40, borderRight: '4px solid #EFB71C', marginTop: -10 }} />
                        {links.map(({ link }, i) => <Number key={i} id={i} index={index} />)}
                    </div>
                    <div style={{ borderLeft: '1px solid white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ height: 40, borderLeft: '4px solid #EFB71C', marginTop: -10 }} />
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
                                />
                            )
                        }
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


const NavBtn = ({ id, index, title, handleClick }) => {
    return (
        <div className="nav-btn" onClick={handleClick}>
            <p>{title}</p>

            <style jsx>{`
                .nav-btn {
                    padding: 15px 6px;
                    border-left: ${(id >= 0) && (id <= index) ? '4px solid #EFB71C' : '4px solid transparent'};
                    cursor: pointer;
                }

                p {
                    color: ${(index == id) ? '#fff' : '#847F7F'};
                    font-size: 20px;
                }
            `}</style>
        </div>
    )
}

const Number = ({ id, index }) => {
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
                    color: ${(index == id) ? '#fff' : '#847F7F'};
                    font-size: 20px;
                    transform: rotate(270deg);
                }
            `}</style>
        </div>
    )
}
