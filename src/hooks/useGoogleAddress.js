import { useState, useEffect } from "react";
import axios from 'axios';

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBiOOpsa1Olys8JoT55cRrBUeBzjp4r3c4`;
    
    useEffect(async () => {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
    }, []);
    return map;

};

export default useGoogleAddress;