import React, { useState, useEffect } from 'react'

let missions = [
    'Morals',
    'Vision',
    'Leadership',
    'Community Service',
    'Integrity',
    'Empowerment',
    'Consultation',
]

const Philosophy = () => {
    return (
        <section id="philosophy">
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
                        {
                            missions.map((elm, i) => <Item key={i} id={i} title={elm} length={missions.length} />)
                        }
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

const Item = ({ id, title, length }) => {
    const [index, setIndex] = useState(-1)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (index < length) {
                setIndex(index + 1)
            } else {
                setIndex(0)
            }
        }, 1000)
        return () => clearTimeout(timer);
    });



    return (
        <div style={{
            maxWidth: 350, backgroundColor: (id === index) ? '#EFB71C' : 'transparent', marginBottom: 10, padding: '10px 30px', borderRadius: 9
        }}>
            <p style={{ color: (id === index) ? '#2D4375' : '#fff' }}>{title}</p>
        </div >
    )
}

