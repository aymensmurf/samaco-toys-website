import React from 'react'
import { i18n, withTranslation } from '../../i18n'

const Customers = ({ t }) => {
    return (
        <section id="customers">
            <h2 style={{ marginBottom: 150, marginTop: 200, }}>{t('these_are_the')} <span style={{ color: '#EFB71C' }}>{t('lovely_customers')}</span> {t('that_we_work_with')}:</h2>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                <div className='customers-grid'>
                    <img src="/img/customers/toysrus.png" alt="ToysRus" />
                    <img src="/img/customers/saco.png" alt="Saco" />
                    <img src="/img/customers/alhussain-toys.png" alt="Alhussain Toys" />
                    <img src="/img/customers/fanateer.png" alt="Fanateer" />
                    <img src="/img/customers/sprii.png" alt="Sprii" />
                    <img src="/img/customers/amazon.png" alt="Amazon" />
                    <img src="/img/customers/noon.png" alt="Noon" />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                <button id='btn-brand-load-more'>
                    {t('load_more')} (+137 {t('more_customers')})
                </button>
            </div>

            <style jsx>{`
                .customers-grid {
                    display: grid;
                    grid-column-gap: 80px;
                    grid-row-gap: 100px;
                    grid-template-columns: auto auto auto auto;
                    align-items: center;
                }

                #btn-brand-load-more {
                    padding: 30px;
                    max-width: 756px;
                    background-color: #CCCCCC;
                    border-radius: 46px;
                    border: none;
                }
            `}</style>
        </section>
    )
}

Customers.getInitialProps = async () => ({
    namespacesRequired: ['customers'],
})

export default withTranslation('customers')(Customers)
