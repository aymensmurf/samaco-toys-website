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
                        <img src="/img/customers/toysrus.png" alt="ToysRus" />
                        <img src="/img/customers/saco.png" alt="Saco" />
                        <img src="/img/customers/alhussain-toys.png" alt="Alhussain Toys" />
                        <img src="/img/customers/fanateer.png" alt="Fanateer" />
                        <img src="/img/customers/sprii.png" alt="Sprii" />
                        <img src="/img/customers/amazon.png" alt="Amazon" />
                        <img src="/img/customers/noon.png" alt="Noon" />

                        {
                            loadMore ?
                                <>
                                    <img src="/img/customers/toysrus.png" alt="ToysRus" />
                                    <img src="/img/customers/saco.png" alt="Saco" />
                                    <img src="/img/customers/alhussain-toys.png" alt="Alhussain Toys" />
                                    <img src="/img/customers/fanateer.png" alt="Fanateer" />
                                    <img src="/img/customers/sprii.png" alt="Sprii" />
                                    <img src="/img/customers/amazon.png" alt="Amazon" />
                                    <img src="/img/customers/noon.png" alt="Noon" />
                                </>
                                : null
                        }

                    </div>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='btn-load-more' onClick={() => setLoadMore(!loadMore)}>
                        {
                            loadMore ? t('show_less') : `${t('load_more')} (+137 ${t('more_customers')})`
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

Customers.getInitialProps = async () => ({
    namespacesRequired: ['customers'],
})

export default withTranslation('customers')(Customers)
