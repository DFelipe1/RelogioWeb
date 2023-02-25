import { useEffect, useState } from 'react'
import './styles.css'

export function Clock() {

    const [hour, setHour] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);

    const deg = 6

    function tictac() {
        const date = new Date()

        setHour(date.getHours() * 30)
        setMin(date.getMinutes() * deg)
        setSec(date.getSeconds() * deg)

        setInterval( tictac, 1000)
    }

    useEffect(() => tictac(),[])


    return (
        <div className="clock">
            
            <div className="hour">
                <div id="hr" className="hr" Style={`transform: rotateZ(${(hour) + (min/12)}deg)`}/>
            </div>

            <div className="min">
                <div id="mn" className="mn" Style={`transform: rotateZ(${min}deg)`}></div>
            </div>

            <div className="sec">
                <div id="sc" className="sc" Style={`transform: rotateZ(${sec}deg)`}></div>
            </div>

            <div className="group-number">
                <div className="barer n1"><span className="pointer"></span></div>
                <div className="barer n2"><span className="pointer"></span></div>
                <div className="number n3"><span className="bar"></span></div>
                <div className="barer n4"><span className="pointer"></span></div>
                <div className="barer n5"><span className="pointer"></span></div>
                <div className="number n6"><span className="bar"></span></div>
                <div className="barer n7"><span className="pointer"></span></div>
                <div className="barer n8"><span className="pointer"></span></div>
                <div className="number n9"><span className="bar"></span></div>
                <div className="barer n10"><span className="pointer"></span></div>
                <div className="barer n11"><span className="pointer"></span></div>
                <div className="number n12"><span className="bar"></span></div>
            </div>
        </div>
    )
}