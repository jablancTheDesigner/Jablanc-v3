import {TiLocationOutline} from "react-icons/ti";

const CurrentLocation = () => {
    return (
        <p className=" md:right-auto bottom-auto md:bottom-0 top-0 md:top-auto mx-auto md:mx-0 py-4 px-8 z-10 text-white items-center justify-center md:justify-start hidden md:flex">
            <TiLocationOutline />  Austin, TX
        </p>
    )
}

export default CurrentLocation;