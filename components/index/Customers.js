import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'

const Customers = ({ t }) => {
    const [loadMore, setLoadMore] = useState(false);

    return (
        <section id="customers" style={{ paddingBottom: 200 }}>
            <ScrollAnimation animateIn='fadeInUp'>
                <h2>{t('some_of_the___')}:</h2>
            </ScrollAnimation>

            <ScrollAnimation animateIn='fadeInUp'>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                    <div className='grid-4'>
                        <img src="/img/customers/baby-island.svg" alt="Baby Island" />
                        <img src="/img/customers/babyshop.svg" alt="Babyshop" />
                        <img src="/img/customers/carrefour.svg" alt="Carrefour" />
                        <img src="/img/customers/hyperpanda.svg" alt="HyperPanda" />

                        <img src="/img/customers/farm-superstores.svg" alt="Farm superstores" />
                        <img src="/img/customers/tamimi-markets.svg" alt="Tamimi markets" />
                        <img src="/img/customers/toys-r-us.svg" alt="ToysRus" />
                        <img src="/img/customers/saco.svg" alt="SACO" />

                        {
                            loadMore ?
                                <>
                                    <img src="/img/customers/alhussain-toys.svg" alt="Alhussain toys" />
                                    <img src="/img/customers/fanateer.svg" alt="Fanateer" />
                                    <img src="/img/customers/sprii.svg" alt="Sprii" />
                                    <img src="/img/customers/amazon.svg" alt="Amazon" />

                                    <img src="/img/customers/noon.svg" alt="Noon" />
                                </>
                                : null
                        }

                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='btn-load-more' onClick={() => setLoadMore(!loadMore)}>
                        {
                            loadMore ? t('show_less') : `${t('load_more')} (+5 ${t('more_customers')})`
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

Customers.getInitialProps = async () => ({
    namespacesRequired: ['customers'],
})

export default withTranslation('customers')(Customers)
