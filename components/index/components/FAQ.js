const { default: Accordion } = require("../../widgets/Accordion")

const FAQ = ({ t }) => {
    return (
        <>
            <div>
                <h2>{t('faq.title')}</h2>
                <p className="description">{t('faq.description')}</p>

                <div style={{ marginTop: 70 }}>
                    <Accordion
                        q={t('faq.q1')}
                        a={<p>- {t('faq.a1')}</p>}
                    />
                    <Accordion
                        q={t('faq.q2')}
                        a={<p>- {t('faq.a2')}</p>}
                    />
                    <Accordion
                        q={t('faq.q3')}
                        a={
                            <>
                                <p>- {t('faq.a3_a')}</p>
                                <p>- {t('faq.a3_b')}</p>
                            </>
                        }
                    />
                    <Accordion
                        q={t('faq.q4')}
                        a={
                            <>
                                <p>- {t('faq.a4_a')}</p>
                                <p>- {t('faq.a4_b')}</p>
                            </>
                        }
                    />
                    <Accordion
                        q={t('faq.q5')}
                        a={<p>- {t('faq.a5')}</p>}
                    />
                    <Accordion
                        q={t('faq.q6')}
                        a={<p>- {t('faq.a6')}</p>}
                    />
                    <Accordion
                        q={t('faq.q7')}
                        a={<p>- {t('faq.a7')}</p>}
                    />
                    <Accordion
                        q={t('faq.q8')}
                        a={
                            <>
                                <p>- {t('faq.a8_a')}</p>
                                <p>- {t('faq.a8_b')}</p>
                            </>
                        }
                    />
                    <Accordion
                        q={t('faq.q9')}
                        a={
                            <>
                                <p>- {t('faq.a9_a')}</p>
                                <p>- {t('faq.a9_b')}</p>
                            </>
                        }
                    />
                    <Accordion
                        q={t('faq.q10')}
                        a={
                            <>
                                <p>- {t('faq.a10_a')}</p>
                                <p>- {t('faq.a10_b')}</p>
                                <p>- {t('faq.a10_c')}</p>
                            </>
                        }
                    />
                    <Accordion
                        q={t('faq.q11')}
                        a={
                            <>
                                <p>- {t('faq.a11_a')}</p>
                                <p>- {t('faq.a11_b')}</p>
                            </>
                        }
                    />
                </div>
            </div>

            <style jsx>{`
                h2 {
                    color: #EFB71C;
                    font-size: 50px;
                }

                .description {
                    font-size: 26px;
                }

                p { 
                    font-size: 20px; 
                }

                @media only screen and (max-width: 1600px) {
                    p {
                        font-size: 16px;
                    }
                }

                @media only screen and (max-width: 425px) {
                    p
                        font-size: 18px;
                    }
                }
            `}</style>
        </>
    )
}

export default FAQ;