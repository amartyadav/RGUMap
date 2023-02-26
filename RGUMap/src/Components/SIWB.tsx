import React, { Component, PureComponent, ReactNode, useEffect } from 'react';
import $ from "jquery";
//import './SIWB.css';
import ImageMapper from 'react-image-mapper';


import floorplansiwb from '../assets/resizenewsiwb.jpg'

//import '/src/custommap.css'


interface Props { }
interface State { }


class SIWB extends Component {
    render() {
        console.log(window);

        const map = {
            name: 'image-map',
            areas: [
                {
                    id: "n502",
                    href: "n502",
                    coords: [43,19,114,8,151,7,177,19,197,42,178,56,157,40,140,33,122,33,49,43],
                    shape: "poly"
                },

                {
                    id: "n508",
                    href: "n508",
                    coords: [180,59,197,45,237,94,218,110],
                    shape: "poly",
                },
                { id: "n509", href: "n509", coords: [221,111,239,99,265,122,257,147,236,135], shape: "poly" },
                { id: "n523", href: "n523", coords: [343,81,367,63,383,82,360,102], shape: "poly" },
                { id: "n525", href: "n525", coords: [369,60,394,40,409,63,385,82], shape: "poly" },
                { id: "n526", href: "n526", coords: [1392, 434, 1427, 406, 1477, 460, 1442, 493, 1394, 443], shape: "poly" },
                { id: "n528", href: "n528", coords: [408,29,438,9,449,32,425,50], shape: "poly" },
                { id: "n529", href: "n529", coords: [439,7,472,0,477,23,450,32,442,22], shape: "poly" },
                { id: "n530", href: "n530", coords: [477,22,525,29,533,11,511,3,477,0], shape: "poly" },
                { id: "n533", href: "n533", coords: [582,18,542,2,527,30,536,37,525,63,595,92,619,49,577,32], shape: "poly" },
                { id: "n501", href: "n501", coords: [51,46,134,34,134,57,62,69,52,59], shape: "poly" },
                { id: "n527", href: "n527", coords: [1473, 505, 1629, 408, 1642, 476, 1510, 557], shape: "poly" },
                { id: "n515", href: "n515", coords: [1063, 817, 1175, 758, 1210, 799, 1155, 861, 1074, 876], shape: "poly" },
                { id: "n540", href: "n540", coords: [454,90,524,125,513,140,492,149,468,147,454,130,449,111], shape: "poly" },
            ],
        };
        // return (
        //     <>
        //         <h1>SIWB</h1>
        //         <div className='image-container' style={{position: "relative"}}>
        //             <img src={floorplansiwb} useMap="#image_map" style={{ width: '100%', height: 'auto' }}/>
        //                 <map name="image-map" style={{ position: 'absolute', top: 0, left: 0 }}>
        //                     <area target="" alt="n502" title="n502" href="n502" coords="252,368,370,344,484,324,574,322,640,344,701,388,739,430,745,439,695,485,679,476,631,441,594,419,537,412,506,412,403,428,344,436,283,445,263,434,259,401,256,390,261,419" shape="poly" />
        //                     <area target="" alt="n508" title="n508" href="n508" coords="750,456,881,614,818,667,686,502" shape="poly" />
        //                     <area target="" alt="n509" title="n509" href="n509" coords="824,667,881,614,971,708,940,781,879,743" shape="poly" />
        //                     <area target="" alt="n523" title="n523" href="n523" coords="1223,572,1302,509,1354,568,1269,636" shape="poly" />
        //                     <area target="" alt="n525" title="n525" href="n525" coords="1308,502,1383,441,1436,498,1357,570" shape="poly" />
        //                     <area target="" alt="n526" title="n526" href="n526" coords="1392,434,1427,406,1477,460,1442,493,1394,443" shape="poly" />
        //                     <area target="" alt="n528" title="n528" href="n528" coords="1436,397,1528,338,1563,410,1484,463,1440,406" shape="poly" />
        //                     <area target="" alt="n529" title="n529" href="n529" coords="1530,331,1639,307,1648,375,1558,406" shape="poly" />
        //                     <area target="" alt="n530" title="n530" href="n530" coords="1642,298,1834,342,1808,408,1657,379" shape="poly" />
        //                     <area target="" alt="n533" title="n533" href="n533" coords="1861,303,1990,364,1973,388,2111,465,2040,623,1780,485,1815,410" shape="poly" />
        //                     <area target="" alt="n501" title="n501" href="n501" coords="267,456,544,419,544,493,300,526,278,493" shape="poly" />
        //                     <area target="" alt="n527" title="n527" href="n527" coords="1473,505,1629,408,1642,476,1510,557" shape="poly" />
        //                     <area target="" alt="n515" title="n515" href="n515" coords="1063,817,1175,758,1210,799,1155,861,1074,876" shape="poly" />
        //                     <area target="" alt="n540" title="n540" href="n540" coords="1582,593,1808,703,1791,731,1760,766,1683,788,1635,779,1576,725,1560,681,1560,639" shape="poly" />
        //                 </map>
        //         </div>
        //     </>
        // )

        return (
            <>
                <h1>SIWB</h1>
                <div className="image-container">
                    <ImageMapper src={floorplansiwb} map={map}
                        fillColor="rgba(255, 0, 0, 0.5)" />
                </div>
            </>
        );
    }
}

export default SIWB
