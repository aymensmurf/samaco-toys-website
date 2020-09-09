import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { withTranslation } from '../../i18n'
import HoverImg from '../widgets/HoverImg'
import { CUSTOMERS } from '../../utils/consts'

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
                        {
                            CUSTOMERS.map((customer, i) => {
                                if (i < 8) {
                                    return <HoverImg key={i} title={customer} type="customers" />
                                } else {
                                    if (loadMore) {
                                        return <HoverImg key={i} title={customer} type="customers" />
                                    }
                                }

                            })
                        }
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className='btn-load-more' onClick={() => setLoadMore(!loadMore)}>
                        {
                            loadMore ? t('show_less') : `${t('load_more')} (+${CUSTOMERS.length - 8}  ${t('more_customers')})`
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

                @media only screen and (max-width: 1600px) {
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
