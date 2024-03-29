import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Reach = ({ t }) => {
    return (
        <section id="reach">
            <ScrollAnimation animateIn='fadeInUp'>
                <h2>{t('we_reach')} <span style={{ color: '#EFB71C' }}>{t('every_city')}</span> {t('in_saudi_arabia___')}</h2>
            </ScrollAnimation>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/reach.png);
                    background-position:center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    // background-attachment: fixed;
                    justify-content: flex-start;
                }

                h2 {
                    margin-top: 0px !important;
                   font-size: 50px !important;
                }

                @media only screen and (max-width: 1600px) {
                    h2 {
                        margin-top: 0px !important;
                        font-size: 35px !important;
                    }
                }

                @media only screen and (max-width: 425px) {
                    h2 {
                        margin-top: 130px;
                    }
                }
            `}</style>
        </section>
    )
}

Reach.getInitialProps = async () => ({
    namespacesRequired: ['reach'],
})

export default withTranslation('reach')(Reach)
