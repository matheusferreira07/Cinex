import { Link } from "react-router-dom";

import { FaStar } from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;


const CinexCard = ({cinex, showLink = true}) => {
    return  <div className="cinex-card">
       <img src={imageUrl + cinex.poster_path} alt="" /> 
    </div>
    
}

export default CinexCard;