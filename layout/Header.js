import React from 'react'

const Header = () => {
    return (
        <>
            <div className='header'>
                <div>
                    <img src="/img/logo.png" alt="SAMACO TOYS & LEISURE" style={{ width: 161, height: 50, objectFit: 'contain', marginLeft: 260 }} />
                </div>
                <div style={{ marginRight: 100 }}>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                </div>
            </div>

            <style jsx>{`
                .header {
                    position: fixed;
                    display: flex;
                    justify-content: space-between;
                    padding-top: 75px;
                    padding-bottom: 75px;
                    width: 100%;
                }

                i {
                    font-size: 24px;
                    margin-left: 40px;
                }
            `}</style>
        </>
    )
}

export default Header
