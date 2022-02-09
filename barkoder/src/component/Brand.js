import React from 'react';
import {getContrastYIQ} from '../helpers';
import MainContext from '../MainContext';
import { useContext } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

function Brand({brand}) {
    
    const {selectedBrands,setSelectedBrands, setCopied} = useContext(MainContext);
    const toggleSelected = () => {
        if(selectedBrands.includes(brand.slug)) {
            setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
        } else {
            setSelectedBrands([...selectedBrands, brand.slug])
        }
    }

    const setColor = (color) => {
        setCopied(color)
    }

    return (
    <div className={`brand ${selectedBrands.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className='brand-colors'>
                {brand.colors.map(color => (
                    <CopyToClipboard text={color} onCopy={() => setColor(color)} style={{'--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
                            <span>{color}</span>
                    </CopyToClipboard>
                ))}
            </div>
    </div>
    );
}
export default Brand;