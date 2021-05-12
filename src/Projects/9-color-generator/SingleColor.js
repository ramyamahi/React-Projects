import React, { useState, useEffect } from 'react';
import rgbToHex from './RgbToHex';

const SingleColor = ({rgb, weight,  hex, index}) => {
    const [ alert, setAlert ] = useState(false);
    const colorCode = rgb.join(',');
    // const hexColor = rgbToHex(...rgb);
    const hexValue = `#${hex}`;

    useEffect(() => {
       const timeOut = setTimeout(() => {
            setAlert(false);
       },3000)
       return () => clearTimeout(timeOut)
    }, [alert])

    return (
        <div className={`single-color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${colorCode})`}} onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
        }}>
            <p>{weight}%</p>
            <p>{hexValue}</p>
            { alert && <p className="copy-clipboard">copied to clipboard</p> }
        </div>
    )
}

export default SingleColor;