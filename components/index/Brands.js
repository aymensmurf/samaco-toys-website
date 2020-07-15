import React from 'react'

const Brands = () => {
    return (
        <section>
            <a id="brands" />
            
            <h2 style={{ marginBottom: 150, marginTop: 200, }}>These are the <span style={{ color: '#EFB71C' }}>lovely brands</span> that we work with:</h2>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                <div className='brands-grid'>
                    <img src="/img/brands/intex.png" alt="Intex" />
                    <img src="/img/brands/step2.png" alt="Step 2" />
                    <img src="/img/brands/our-generation.png" alt="Our generation" />
                    <img src="/img/brands/maisto-tech-rxc.png" alt="Maisto Tech RXC" />
                    <img src="/img/brands/mondo.png" alt="Mondo" />
                    <img src="/img/brands/kd-group.png" alt="KD group" />
                    <img src="/img/brands/bildo.png" alt="Bildo" />
                    <img src="/img/brands/national-geographic.png" alt="National Geographic" />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 150 }}>
                <button id='btn-brand-load-more'>
                    Load more (+72 more brands)
                </button>
            </div>

            <style jsx>{`
                .brands-grid {
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

export default Brands
