import { Link } from 'react-router-dom'
import './styles/Dashboard.css'
import './styles/DisplayPanel.css'
import Sidebar from './Sidebar';
import DisplayPanel from './DisplayPanel';
import Settings from './Settings';
import HeadsUpDisplay from './HeadsUpDisplay';
import { useState } from 'react'
import axios from 'axios'

function Dashboard({id, name, countOfJobs, appRatio, 
            inspiration,appReality,displayOutPut,
            changeDisplayOutput}){
    
    const [displayCategory, setDisplayCategory] = useState('job-tracker')

    async function getSummaryData(e){
        const {data} = await axios.get(`/dashboard/${e.target.className}/${id}`)
        setDisplayCategory(e.target.className)
        changeDisplayOutput(data)
    }

    return (
        <div className="grid-container">
            <Sidebar id={id} getSummaryData={getSummaryData}/>
            <HeadsUpDisplay 
                    countOfJobs={countOfJobs}
                    appRatio={appRatio}
                    inspiration={inspiration}
                    appReality={appReality} />
            <Settings name={name}/>
            <DisplayPanel   
                id={id}
                displayCategory={displayCategory} 
                setDisplayCategory={setDisplayCategory}
                changeDisplayOutput={changeDisplayOutput} 
                displayOutPut={displayOutPut}
                countOfJobs={countOfJobs}
                appRatio={appRatio}
                inspiration={inspiration}
                appReality={appReality}
                />
        </div>

    )
}

export default Dashboard