import React from 'react';
import { colors, colorSelector } from '../../utils/colors/colors';

function LogoSVG({l,h,w}) {
    return (
        <svg role='img' alt='' fill={colors.orange} width={w} height={h} src={l}/>
    );
}

export default LogoSVG;