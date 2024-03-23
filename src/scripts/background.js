import day_cloudy from '../assets/day-cloudy.jpg';
import night_cloudy from '../assets/night-cloudy.jpg';
import day_sunny from '../assets/day-sunny.jpg';
import night_clear from '../assets/night-clear.jpg';
import day_mist from '../assets/day-mist.jpg';
import night_mist from '../assets/night-mist.jpg';
import day_rainy from '../assets/day-rainy.jpg';
import night_rainy from '../assets/night-rainy.jpg';
import day_snow from '../assets/day-snow.jpg';
import night_snow from '../assets/night-snow.jpg';
import thunder from '../assets/thunder.jpg';

function getBackground(condition_code, isDay) {
    let bg_img;
    if (isDay) {
        switch (condition_code) {
            case 1000:
                bg_img = `url(\'${day_sunny}\')`;
                break;
            case 1003: case 1006: case 1009:
                bg_img = `url(\'${day_cloudy}\')`;
                break;
            case 1030: case 1135: case 1147: 
                bg_img = `url(\'${day_mist}\')`;
                break;
            case 1063: case 1072: case 1150: case 1153: case 1168: case 1171: case 1180: case 1183: case 1186: case 1189: case 1192: case 1195: case 1198: case 1201: case 1240: case 1243: case 1246: case 1249: case 1252: case 1255:
                bg_img = `url(\'${day_rainy}\')`;
                break;
            case 1087: case 1087: case 1273: case 1276: case 1279: case 1282:
                bg_img = `url(\'${thunder}\')`;
                break;
            case 1066: case 1069: case 1114: case 1117: case 1204: case 1207: case 1210: case 1213: case 1216: case 1219: case 1222: case 1225: case 1237: case 1258: case 1261: case 1264:
                bg_img = `url(\'${day_snow}\')`;
                break;
            default:
                bg_img = `url(\'${day_cloudy}\')`;
                break;
        }
    }
    else {
        switch (condition_code) {
            case 1000:
                bg_img = `url(\'${night_clear}\')`;
                break;
            case 1003: case 1006: case 1009:
                bg_img = `url(\'${night_cloudy}\')`;
                break;
            case 1030: case 1135: case 1147: 
                bg_img = `url(\'${night_mist}\')`;
                break;
            case 1063: case 1072: case 1150: case 1153: case 1168: case 1171: case 1180: case 1183: case 1186: case 1189: case 1192: case 1195: case 1198: case 1201: case 1240: case 1243: case 1246: case 1249: case 1252: case 1255:
                bg_img = `url(\'${night_rainy}\')`;
                break;
            case 1087: case 1087: case 1273: case 1276: case 1279: case 1282:
                bg_img = `url(\'${thunder}\')`;
                break;
            case 1066: case 1069: case 1114: case 1117: case 1204: case 1207: case 1210: case 1213: case 1216: case 1219: case 1222: case 1225: case 1237: case 1258: case 1261: case 1264:
                bg_img = `url(\'${night_snow}\')`;
                break;
            default:
                bg_img = `url(\'${day_cloudy}\')`;
                break;
        }
    }
    return bg_img;
}

export default getBackground;
