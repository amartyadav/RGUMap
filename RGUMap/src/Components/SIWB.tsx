import React, { Component, PureComponent, ReactNode, useEffect } from 'react';
import $ from "jquery";
import ImageMapper from 'react-image-mapper';


import floorplansiwb from '../assets/floorplansiwb.jpg'

//import '/src/custommap.css'


interface Props { }
interface State { }

// useEffect(() => {
//     // Initialize the Maphighlight library on the image map
//     $("img[useMap]").maphilight();
//   }, []);

class SIWB extends Component{
    render() {
        console.log(window);

        const map = {
            name : 'image-map',
            areas : [
                {name:"n502",  href:"n502" ,coords:["252,368,370,344,484,324,574,322,640,344,701,388,739,430,745,439,695,485,679,476,631,441,594,419,537,412,506,412,403,428,344,436,283,445,263,434,259,401,256,390,261,419"], shape:"poly"},
                {name:"n508", title:"n508", href:"n508", coords:["750,456,881,614,818,667,686,502"], shape:"poly"},
                {name:"n509", title:"n509" ,href:"n509", coords:"824,667,881,614,971,708,940,781,879,743", shape:"poly"},
                {name:"n523", title:"n523", href:"n523" ,coords:"1223,572,1302,509,1354,568,1269,636", shape:"poly"},
                {name:"n525" ,title:"n525", href:"n525" ,coords:"1308,502,1383,441,1436,498,1357,570" ,shape:"poly"},
                {name:"n526" ,title:"n526" ,href:"n526" ,coords:"1392,434,1427,406,1477,460,1442,493,1394,443", shape:"poly"},
                {name:"n528" ,title:"n528" ,href:"n528" ,coords:"1436,397,1528,338,1563,410,1484,463,1440,406" ,shape:"poly"},
                {name:"n529" ,title:"n529", href:"n529" ,coords:"1530,331,1639,307,1648,375,1558,406", shape:"poly"},
                {name:"n530" ,title:"n530", href:"n530" ,coords:"1642,298,1834,342,1808,408,1657,379" ,shape:"poly"},
                {name:"n533" ,title:"n533", href:"n533" ,coords:"1861,303,1990,364,1973,388,2111,465,2040,623,1780,485,1815,410" ,shape:"poly"},
                {name:"n501" ,title:"n501", href:"n501" ,coords:"267,456,544,419,544,493,300,526,278,493", shape:"poly"},
                {name:"n527" ,title:"n527", href:"n527" ,coords:"1473,505,1629,408,1642,476,1510,557" ,shape:"poly"},
                {name:"n515" ,title:"n515" ,href:"n515" ,coords:"1063,817,1175,758,1210,799,1155,861,1074,876", shape:"poly"},
                {name:"n540" ,title:"n540" ,href:"n540" ,coords:"1582,593,1808,703,1791,731,1760,766,1683,788,1635,779,1576,725,1560,681,1560,639", shape:"poly"},
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
            <div>
              <img src={floorplansiwb} />
              <ImageMapper src={floorplansiwb} map={map} />
            </div>
          );
    }
}

export default SIWB
