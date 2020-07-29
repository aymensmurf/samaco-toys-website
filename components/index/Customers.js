import React, { useState } from 'react'
import { withTranslation } from '../../i18n'

const Customers = ({ t }) => {
    const [loadMore, setLoadMore] = useState(false);

    return (
        <section id="customers">
            <h2>{t('these_are_the')} <span style={{ color: '#EFB71C' }}>{t('lovely_customers')}</span> {t('that_we_work_with')}:</h2>

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

            <style jsx>{`
                h2 {
                    margin-top: 200px;
                    margin-bottom: 60px;
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
                    img {
                        width: 120px;
                    }

                    h2 {
                        margin-top: 130px;
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
