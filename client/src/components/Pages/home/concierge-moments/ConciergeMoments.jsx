import React, { forwardRef } from 'react';
import './ConciergeMoments.css';

// Polaroid photos
import elevenPolaroid from "../../../../assets/home/concierge-moments/eleventhPolaroid.jpg";
import fifthPolaroid from "../../../../assets/home/concierge-moments/fifthPolaroid.jpg";
import firstPolaroid from "../../../../assets/home/concierge-moments/firstPolaroid.jpg";
import ninthPolaroid from "../../../../assets/home/concierge-moments/ninthPolaroid.jpg";
import secondPolaroid from "../../../../assets/home/concierge-moments/secondPolaroid.jpg";
import sixthPolaroid from "../../../../assets/home/concierge-moments/sixthPolaroid.jpg";
import tenthPolaroid from "../../../../assets/home/concierge-moments/tenthPolaroid.jpg";
import thirdPolaroid from "../../../../assets/home/concierge-moments/thirdPolaroid.jpg";
import twelfthPolaroid from "../../../../assets/home/concierge-moments/twelfthPolaroid.jpg";

const ConciergeMoments = forwardRef((_, ref) => {
    const speed = 33000;
    const images = [
        elevenPolaroid,
        fifthPolaroid,
        firstPolaroid,
        ninthPolaroid,
        secondPolaroid,
        sixthPolaroid,
        tenthPolaroid,
        thirdPolaroid,
        twelfthPolaroid
    ].map((image) => ({
        id: crypto.randomUUID(),
        image
    }));

    return (
        <div ref={ref} id="concierge-moments-section">
            <h2 id="concierge-moments-title">Concierge Moments</h2>
            <div id="polaroid-track">
                {[...Array(3)].map((_, idx) => (
                    <section className="polaroid-track-sections" style={{ "--speed": `${speed}ms` }} key={idx}>
                        {images.map(({ id, image }) => (
                            <div className="image" key={id}>
                                <img className="polaroid" src={image} alt={id} />
                            </div>
                        ))}
                    </section>
                ))}
            </div>
        </div>
    );
});

ConciergeMoments.displayName = "ConciergeMoments";

export { ConciergeMoments };
