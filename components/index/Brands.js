import React, { useState } from 'react'
import { withTranslation } from '../../i18n'

const Brands = ({ t }) => {
    const [loadMore, setLoadMore] = useState(false);

    return (
        <section id="brands">
            <h2>{t('these_are_the')} <span style={{ color: '#EFB71C' }}>{t('lovely_brands')}</span> {t('that_we_work_with')}:</h2>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
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
                <button id='btn-load-more' onClick={() => setLoadMore(!loadMore)}>
                    {
                        loadMore ? t('show_less') : `${t('load_more')} (+72 ${t('more_brands')})`
                    }
                </button>
            </div>

            <style jsx>{`
                #btn-load-more {
                    padding: 30px;
                    max-width: 756px;
                    background-color: #CCCCCC;
                    border-radius: 46px;
                    border: none;
                    cursor: pointer;
                    
                }
                
                h2 {
                    margin-top: 200px;
                    margin-bottom: 150px;
                }
                
                img {
                    object-fit: contain;
                }

                @media only screen and (max-width: 1490px) {
                    img {
                        width: 200px;
                    }
                }

                @media only screen and (max-width: 800px) {
                    img {
                        width: 180px;
                    }
                }

                @media only screen and (max-width: 425px) {
                    h2 {
                        margin-top: 130px;
                        margin-bottom: 80px;
                    }

                    img {
                        width: 120px;
                    }

                    #btn-load-more {
                        padding: 20px 15px;
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
