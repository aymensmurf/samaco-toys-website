import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Home = ({ t, isRTL }) => {
    return (
        <section id="home">
            <div style={{marginTop: 50}}>
                <ScrollAnimation animateIn='fadeInUp'>
                    <img src="/img/logo.png" alt="SAMACO TOYS & LEISURE" />
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInUp'>
                    <h1>{t('to_enrich_children_lives')}</h1>
                </ScrollAnimation>

                <ScrollAnimation animateIn='fadeInUp'>
                    <div style={{ cursor: 'pointer' }} onClick={() => {
                        try {
                            let pos = document.getElementById('about-us').offsetTop
                            window.scrollTo(0, pos)
                        } catch (error) { }
                    }}>
                        <div style={{ display: 'flex' }}>
                            <i className="far fa-arrow-alt-circle-down" style={{ fontSize: 33 }}></i>
                            <p style={{
                                fontSize: 33,
                                marginLeft: isRTL ? 0 : 20,
                                marginRight: isRTL ? 20 : 0
                            }}>{t('explore')}</p>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/home.jpg);
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-attachment: fixed;
                }

                img {
                    width: 405px;
                    height: 155px;
                    object-fit: contain;
                    margin-bottom: 52px;

                }

                h1 {
                    color: #EFB71C;
                    margin-bottom: 50px;
                }

                @media only screen and (max-width: 1440px) {
                    img {
                        width: 300px;
                        height: 100px;
                        margin-bottom: 20px;
                    }

                    h1 {
                        font-size: 60px;
                        margin-bottom: 20px;
                    }
                }

                @media only screen and (max-width: 600px) {
                    img {
                        width: 240px;
                        margin-bottom: 30px;
                    }

                    h1 {
                        margin-bottom: 30px;
                    }
                }
            `}</style>
        </section>
    )
}

Home.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

export default withTranslation('home')(Home)
