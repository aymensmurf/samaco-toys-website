import { withTranslation } from "../../../i18n";

const Eretailer = ({ title = "#", link, t }) => {
    return (
        <>
            <>
                <a href={link} target="_blank" rel="noreferrer noopener">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ height: '200' }}>
                            <img
                                src={`/img/eretailers/${title}-c.svg`}
                                alt={title.replace('-', ' ').toUpperCase()}
                                onMouseOver={e => e.currentTarget.src = `/img/eretailers/${title}-c.svg`}
                                onMouseOut={e => e.currentTarget.src = `/img/eretailers/${title}-c.svg`} />
                        </div>
                        <button>{t('buy_now')}</button>
                    </div>
                </a>

                <style jsx>{`
                    img {
                        width: 160px;
                        height: 200px;
                        object-fit: contain;
                        cursor: pointer;
                    }

                    button {
                        background-color: #ccc;
                        border-radius: 46px;
                        padding: 4px 20px;
                        font-size: 20px;
                    }

                    button:hover {
                        background-color: #bbb;
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

                        button {
                            font-size: 14px;
                        }
                    }
                `}</style>
            </>
        </>
    )
}

Eretailer.getInitialProps = async () => ({
    namespacesRequired: ['eretailers'],
})

export default withTranslation('eretailers')(Eretailer);