import React from 'react';
import { FaGlobe, FaRocket, FaQuestion, FaSun, FaCity, FaFire, FaBook, FaWarehouse, FaShip, FaLock } from 'react-icons/fa';
const Icons = {
    FaWarehouse: FaWarehouse,
    FaRocket: FaRocket,
    FaGlobe: FaGlobe,
    FaSun: FaSun,
    FaCity: FaCity,
    FaFire: FaFire,
    FaBook: FaBook,
    FaShip: FaShip,
}
const DEFAULT_X = 5;
const DEFAULT_Y = 10;
const DEFAULTS_PER_ROW = 6;

export class CyberjunkMap extends React.Component {
    constructor(props) {
        super(props);
        const { locationsByName } = this.props;
        const locations = Object.keys(locationsByName).map(name => ({ ...locationsByName[name], name }));
        this.state = {
            locations,
            location: locations[0],
            loading: false,
        };
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    renderClickables = () => {
        const { location } = this.state;
        const { locationsByName } = this.props;
        const image = document.getElementById('location-img')
        if (!image || !location.to) return;
        return location.to.map((clickable, index) => {
            const clickableLocation = locationsByName[clickable.name] && { ...locationsByName[clickable.name], name: clickable.name };
            const unavailable = !clickableLocation || clickableLocation.hidden || clickableLocation.locked;
            const style = { left: ((clickable.x || (index % DEFAULTS_PER_ROW + 1) * DEFAULT_X) / 100) * image.width, top: clickable.y ? clickable.y / 100 * image.height : (DEFAULT_Y * Math.floor(index / DEFAULTS_PER_ROW) / 100 * image.height) + 40 }
            return unavailable ? (
                <div className="clickable disabled" style={style}>
                    {clickableLocation && clickableLocation.locked ? <FaLock /> : <FaQuestion />}
                    <span className="clickable-name">{clickableLocation && clickableLocation.locked ? clickableLocation.name : '???'}</span>
                </div >) : (
                    <div className="clickable" style={style}
                        onClick={() => this.setState({ loading: clickableLocation.image !== location.image, location: clickableLocation })}>
                        {React.createElement(Icons[clickableLocation.icon] || Icons.FaGlobe)}
                        <span className="clickable-name">{clickable.name}</span>
                    </div>
                )
        }
        )
    }
    render() {
        if (!this.state) return '';
        const { location, loading } = this.state;
        return (
            <div className='location' >
                <h1>{loading ? 'Loading...' : location.name}</h1>
                <img src={`./pics/${(location.image || 'blank')}.png`} onLoad={() => this.setState({ loading: false })} id="location-img" />
                {loading ? '' : this.renderClickables()}
            </div >
        );
    }
}