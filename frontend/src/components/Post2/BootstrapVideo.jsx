import React from 'react';
import Container from 'react-bootstrap/Container';
function BootstrapVideo () {

    return (
        <Container fluid className='video-box'>
            <div className="video">
                <iframe className="video" src="https://www.youtube.com/embed/KWsx7RVSBvs" title="YouTube video" allowfullscreen></iframe>
            </div>
        </Container>
    )
}

export default BootstrapVideo

