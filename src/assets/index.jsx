import Cloud from './Cloud.svg'
import CloudFog from './CloudFog.svg'
import CloudLightning from './CloudLightning.svg'
import CloudMoon from './CloudMoon.svg'
import CloudRain from './CloudRain.svg'
import CloudSun from './CloudSun.svg'
import Moon from './Moon.svg'
import Snowflake from './Snowflake.svg'
import Sun from './Sun.svg'

export default function icon(code) {
    if (code === '01d'){
        return <img id="weatherIcon" src={Sun} alt=""/>
    }
    if (code === '01n') {
        return <img id="weatherIcon" src={Moon} alt=""/>
    }
    if( code === '02d') {
        return <img id="weatherIcon" src={CloudSun} alt=""/>
    }
    if( code === '02n') {
        return <img id="weatherIcon" src={CloudMoon} alt=""/>
    }

    if( code === '03d' || code === '03n') {
        return <img id="weatherIcon" src={Cloud} alt=""/>
    }
    if( code === '04d' || code === '04n') {
        return <img id="weatherIcon" src={Cloud} alt=""/>
    }
    if( code === '09d' || code === '09n') {
        return <img id="weatherIcon" src={CloudRain} alt=""/>
    }
    if( code === '010d' || code === '010n') {
        return <img id="weatherIcon" src={CloudRain} alt=""/>
    }
    if( code === '011d' || code === '011n') {
        return <img id="weatherIcon" src={CloudLightning} alt=""/>
    }
    if( code === '013d' || code === '013n') {
        return <img id="weatherIcon" src={Snowflake} alt=""/>
    }
    if( code === '050d' || code === '050n') {
        return <img id="weatherIcon" src={CloudFog} alt=""/>
    }

}