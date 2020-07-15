import React from 'react'

const Founder = () => {
    return (
        <section>
            <a id="founder" />

            <div style={{ width: '60%' }}>
                <h2 style={{ marginBottom: 40 }}>
                    <span style={{ color: '#EFB71C' }}>MR. IBRAHIM HASSAN SHARBATLY</span> FOUNDER, SAMACO & FIRST GROUP.
                </h2>

                <div style={{ display: 'flex' }}>
                    <p style={{ marginRight: 40 }}>the founder of SAMACO and The First Group of companies, is a well-known entrepreneur in Saudi Arabia and GCC. He is renouned for his strategic decisions, leadership skills and his astute vision has enabled many companies in a wide portfolio of real estate, automotive, commerce and trading sectors witness successful enterprises reach peak of their performance and growth.</p>
                </div>
            </div>

            <style jsx>{`
                section {
                    background-image: url(/img/sections/founder.png);
                    background-position: bottom right;
                    background-repeat: no-repeat;
                    background-size: cover;
                    // background-attachment: fixed;
                }
            `}</style>
        </section>
    )
}

export default Founder
