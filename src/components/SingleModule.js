import React, {useState} from 'react'
import { FiCopy, FiClock, FiChevronDown } from "react-icons/fi";
import ModuleSections from './ModuleSections';

const SingleModule = ({ title, num_videos, duration, videos, index}) => {
    const [showModule, setShowModule] = useState(false)
    return (
        <div>
         <div className="module">
          <div className="module-left">
            <h2>{`${index + 1}.`}</h2>
          </div>
           <div className="module-right">
              <h2>{`Module ${index + 1}: `}</h2>
               <div className="introduction">
                <h2>{title}</h2>
                   <p><span><FiCopy /></span>{`${num_videos}`} Videos <span><FiClock /></span>{`${duration}`} minutes</p>  
               </div>
               <button className="module-button" onClick={() => setShowModule(!showModule)}><FiChevronDown/></button>
           </div>    
           </div>
           {showModule && <ModuleSections videos={videos}/>}
        </div>
    )
}

export default SingleModule
