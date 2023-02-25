import { useEffect, useState } from 'react'
import './styles.css'

export function Relogio() {
    const [ hours, setHours ] = useState([])
    const [ minutes, setMinutes ] = useState([])
    const [ seconds, setSeconds ] = useState([])

    function clock() {
        const date = new Date()

        setHours(String(date.getHours()).padStart(2, '0').split(''))
        setMinutes(String(date.getMinutes()).padStart(2, '0').split(''))
        setSeconds(String(date.getSeconds()).padStart(2, '0').split(''))

        setInterval( clock, 1000)
    }

    useEffect(() => clock(), [])
    
    return (
        <div className="clock-digital">
            <div className="group-timer">
                <span className="block-time dg-hour">{hours[0]}</span>
                <span className="block-time dg-hour">{hours[1]}</span>
            </div>
            <span>:</span>
            <div className="group-timer">
                <span className="block-time dg-min">{minutes[0]}</span>
                <span className="block-time dg-min">{minutes[1]}</span>
            </div>
            <span>:</span>
            <div className="group-timer">
                <span className="block-time dg-sec">{seconds[0]}</span>
                <span className="block-time dg-sec">{seconds[1]}</span>
            </div>
        </div>
    )
}