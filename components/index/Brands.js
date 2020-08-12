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
                        <img src="/img/brands/intex.png" alt="Intex" />
                        <img src="/img/brands/step2.png" alt="Step 2" />
                        <img src="/img/brands/our-generation.png" alt="Our generation" />
                        <img src="/img/brands/maisto-tech-rxc.png" alt="Maisto Tech RXC" />
                        <img src="/img/brands/mondo.png" alt="Mondo" />
                        <img src="/img/brands/kd-group.png" alt="KD group" />
                        <img src="/img/brands/bildo.png" alt="Bildo" />
                        <img src="/img/brands/national-geographic.png" alt="National Geographic" />

                        {
                            loadMore ?
                                <>
                                    <img src="/img/brands/intex.png" alt="Intex" />
                                    <img src="/img/brands/step2.png" alt="Step 2" />
                                    <img src="/img/brands/our-generation.png" alt="Our generation" />
                                    <img src="/img/brands/maisto-tech-rxc.png" alt="Maisto Tech RXC" />
                                    <img src="/img/brands/mondo.png" alt="Mondo" />
                                    <img src="/img/brands/kd-group.png" alt="KD group" />
                                    <img src="/img/brands/bildo.png" alt="Bildo" />
                                    <img src="/img/brands/national-geographic.png" alt="National Geographic" />
                                </>
                                : null
                        }

                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='btn-load-more' onClick={() => setLoadMore(!loadMore)}>
                        {
                            loadMore ? t('show_less') : `${t('load_more')} (+72 ${t('more_brands')})`
                        }
                    </button>
                </div>
            </ScrollAnimation>

            <style jsx>{`
                h2 {
                    margin-bottom: 100px;
                }
                
                img {
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
