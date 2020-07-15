import React from 'react'

const Home = () => {
    return (
        <section>
            <a id="home" />

            <img src="/img/logo.png" alt="SAMACO TOYS & LEISURE" />

            <h1>To Enrich Children’s Lifes.</h1>

            <a href="#about-us">
                <div style={{ display: 'flex' }}>
                    <i className="far fa-arrow-alt-circle-down" style={{ fontSize: 33 }}></i>
                    <p style={{ fontSize: 33, marginLeft: 20 }}>EXPLOR</p>
                </div>
            </a>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/home.jpg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }

                img {
                    width: 495px;
                    height: 155px;
                    object-fit: contain;
                    margin-bottom: 52px;
                }

                h1 {
                    color: #EFB71C;
                    margin-bottom: 50px;
                }
            `}</style>
        </section>
    )
}

export default Home
