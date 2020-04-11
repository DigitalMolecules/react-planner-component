export const hexToRgb = (hex: string) => {
    //https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    
    if (result === null) {
        return 'rgb(255, 255, 255)'
    }    

    const r = parseInt(result[1], 16)
    const g = parseInt(result[2], 16)
    const b = parseInt(result[3], 16)
    const a = parseInt(result[4], 16) / 255.0

    return `rgba(${r},${g},${b},${a})`;
}