import React from 'react'
import { withTranslation } from '../../i18n'

const Home = ({ t, isRTL }) => {
    return (
        <section id="home">
            <img src="/img/logo.png" alt="SAMACO TOYS & LEISURE" />

            <h1>{t('to_enrich_children_lives')}</h1>

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

                @media only screen and (max-width: 600px) {
                    img {
                        width: 240px;
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
