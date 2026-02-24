import { Link } from 'react-router-dom'; // Import Link for routing
import './css/styles.css'; // Your existing CSS
import IconFooter from '../../components/Footer/IconFooter'; // Import the IconFooter component
const Welcome = () => {
    return (
        <div className="welcome-page">
            {/* Background Video */}
            <div className="video-background">
                <video autoPlay loop muted playsInline>
                    <source src="/media/neurons.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            {/* Overlay */}
            <div className="overlay"></div>
            {/* Modal Content */}
            <div className="modal">
                <img src="/media/neurons-grey.png" alt="neurons" width="89" />
                <h2><strong>neurons.me</strong></h2>
                <p>Go Algorithmic</p>
                <div className="buttons">
                <Link to="/home" className="btn">Explore</Link>
                </div>
            </div>
            {/* Render the IconFooter here */}
            <IconFooter/>
            {/* README Modal (Triggered by ⌘ Icon) */}
        </div>
    );
};

export default Welcome;