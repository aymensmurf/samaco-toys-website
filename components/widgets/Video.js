import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import YouTube from 'react-youtube'

const Video = ({ id, title, bgImage,  isRTL }) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="album" onClick={() => setIsOpen(true)}>
                <div style={{overflow: 'hidden'}}>
                    <p> {title} </p>
                </div>

                <style jsx>{`
                    .album {
                        background-image: url(${bgImage});
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;

                        width: 100%;
                        height: 247px;
                        border-radius: 11px;
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-end;

                        margin-bottom: 15px;
                        margin-right: ${isRTL ? '0px' : '15px'};
                        margin-left: ${isRTL ? '15px' : '0px'};

                        cursor: pointer;
                        overflow: hidden;
                        transition: .5s;
                    }

                    .album > div {
                        background-color: rgba(239, 183, 28, .85);
                        width: 100%;
                        height: 30%;
                        padding: 15px;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        transition: .5s;
                    }

                    .album:hover > div {
                        height: 100%;
                    }

                    p {
                        font-size: 18px;
                        color: #2d4375;
                    }
                `}</style>
            </div>

            <Modal
                isOpen={modalIsOpen}
                style={{
                    overlay: {
                        zIndex: 1000
                    },
                    content: {
                        backgroundColor: '#2d4375'
                    }
                }}
            >
                <button className='lang' onClick={() => setIsOpen(false)}>
                    <i className="fas fa-times"></i>
                </button>

                <YouTube videoId={id} containerClassName={"youtubeContainer"} />

                <style jsx>{`
                    .lang {
                        height: 50px;
                        width: 50px;
                        background-color: rgba(45, 67, 117, 1);
                        border: 1px solid white;
                        border-radius: 66px;
                        color: white;
                        font-size: 20px;
                        cursor: pointer;
                        position: absolute;
                        left: 10; 
                        top: 10;
                        z-index: 1;
                    }
                `}</style>
            </Modal>
        </>
    )
}

Video.propTypes = {

}

export default Video
