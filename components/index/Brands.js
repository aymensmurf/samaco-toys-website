import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Brands = ({ t }) => {
    const [loadMore, setLoadMore] = useState(false);

    return (
        <section id="brands" style={{ paddingBottom: 100 }}>
            <ScrollAnimation animateIn='fadeInUp'>
                <h2>{t('we_are_proud')}:</h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 100 }}>
                    <div className='grid-4'>
                        <img src="/img/brands/maisto.svg" alt="Maisto" />
                        <img src="/img/brands/burago.svg" alt="Burago" />
                        <img src="/img/brands/our-generation.svg" alt="Our generation" />
                        <img src="/img/brands/lil-woodzeez.svg" alt="Li'l Woodzeez" />

                        <img src="/img/brands/dolls-world.svg" alt="Dolls word" />
                        <img src="/img/brands/bildo.svg" alt="Bildo" />
                        <img src="/img/brands/oops.svg" alt="Oops" />
                        <img src="/img/brands/intex.svg" alt="Intex" />

                        {
                            loadMore ?
                                <>
                                    <img src="/img/brands/step2.svg" alt="Step2" />
                                    <img src="/img/brands/nikko.svg" alt="Nikko" />
                                    <img src="/img/brands/terra.svg" alt="Terra" />
                                    <img src="/img/brands/btoys.svg" alt="B toys" />

                                    <img src="/img/brands/craze.svg" alt="Craze" />
                                    <img src="/img/brands/madmattr.svg" alt="MADMATTR" />
                                    <img src="/img/brands/funny-box.svg" alt="Funny Box" />
                                    <img src="/img/brands/splash-toys.svg" alt="Splash Toys" />
                                    
                                    <img src="/img/brands/educa.svg" alt="Educa" />
                                    <img src="/img/brands/plum.svg" alt="Plum" />
                                    <img src="/img/brands/feber.svg" alt="Feber" />
                                    <img src="/img/brands/national-geographic.svg" alt="National Geographic" />

                                    <img src="/img/brands/banzai.svg" alt="Banzai" />
                                    <img src="/img/brands/mondo.svg" alt="Mondo" />
                                </>
                                : null
                        }

                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='btn-load-more' onClick={() => setLoadMore(!loadMore)}>
                        {
                            loadMore ? t('show_less') : `${t('load_more')} (+14 ${t('more_brands')})`
                        }
                    </button>
                </div>
            </ScrollAnimation>

            <style jsx>{`
                h2 {
                    margin-bottom: 100px;
                }
                
                img {
                    width: 160px;
                    object-fit: contain;
                }

                @media only screen and (max-width: 1440px) {
                    img {
                        width: 130px;
                    }
                }
                
                @media only screen and (max-width: 599px) {
                    img {
                        width: 100px;
                    }
                }
            `}</style>
        </section>
    )
}

Brands.getInitialProps = async () => ({
    namespacesRequired: ['brands'],
})

export default withTranslation('brands')(Brands)
