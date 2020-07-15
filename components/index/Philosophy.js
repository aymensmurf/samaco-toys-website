import React from 'react'

const Philosophy = () => {
    return (
        <section>
            <a id="philosophy" />

            <div style={{ display: 'grid', gridColumnGap: 100, gridTemplateColumns: '66% 34%' }}>
                <div>
                    <div style={{ marginBottom: 50 }}>
                        <h3>Our vision</h3>
                        <p>To be the premier kids toy distributor today and tomorrow by providing the best range of fun and educational toys in the world in addition to pursue sustained growth in a competitive market.</p>
                    </div>

                    <div>
                        <h3>Our mission</h3>
                        <p>To deliver high quality, safe and innovative toys to the consumer. We are diligent in our research and preparation so that we can do it right at the first time itself, resulting in products that meet our objectives and maintain our long-standing reputation as a quality toy distributor.</p>
                        <p>We believe toys can enrich children’s lives. It is therefore a top priority for us to offer a product which contributes positively to children’s well-being and development.</p>
                    </div>
                </div>

                <div>
                    <h3>Our mission</h3>
                    <div>
                        <Item title='Morals' />
                        <Item title='Vision' />
                        <Item title='Leadership' />
                        <Item title='Community Service' />
                        <Item title='Integrity' />
                        <Item title='Empowerment' />
                        <Item title='Consultation' />
                    </div>
                </div>
            </div>

            <style jsx>{`
                h3 {
                    color: #EFB71C;
                    margin-bottom: 10px;
                }
            `}</style>
        </section>
    )
}

export default Philosophy

const Item = ({ title }) => {
    return (
        <div style={{ maxWidth: 350, backgroundColor: '#EFB71C', marginBottom: 10, padding: '10px 30px', borderRadius: 9 }}>
            <p style={{ color: '#2D4375' }}>{title}</p>
        </div>
    )
}

