import React, { Component, PureComponent, ReactNode, useEffect } from 'react';
import $ from "jquery";
// import './SIWB.css';
// import './SIWB.js';
import ImageMapper from 'react-image-mapper';


import floorplansiwb from '../assets/resizenewsiwb.jpg'

//import '/src/custommap.css'


interface Props { }
interface State { }

class SIWB extends Component {
    constructor(props: Props) {
        super(props);
        this.state = {
            selectedRooms: [],
            map: {
                name: '',
                areas: [],
            },
        };
    }

    // handleRoomClick = (area: any) => {
    //     const { selectedRooms } = this.state;
    //     const isSelected = selectedRooms.includes(area.id);

    //     let updatedRooms: string[];
    //     if (isSelected) {
    //       updatedRooms = selectedRooms.filter((roomId) => roomId !== area.id);
    //     } else {
    //       updatedRooms = [...selectedRooms, area.id];
    //     }

    //     const updatedMap = {
    //       ...this.state.map,
    //       areas: this.state.map.areas.map((mapArea: any) => ({
    //         ...mapArea,
    //         fillColor: updatedRooms.includes(mapArea.id) ? 'rgba(255, 0, 0, 0.5)' : '',
    //       })),
    //     };

    //     this.setState({
    //       selectedRooms: updatedRooms,
    //       map: updatedMap,
    //     });
    //   };

    //----------------------------------------------------------------------------------------
    // Second code attempt

    // handleRoomClick = (area: any) => {
    // const { selectedRooms } = this.state;
    // const isSelected = selectedRooms.includes(area.id);
    // if (isSelected) {
    //     this.setState({
    //       selectedRooms: selectedRooms.filter(id => id !== area.id),
    //     });
    //   } else {
    //     this.setState({
    //       selectedRooms: [...selectedRooms, area.id],
    //     });
    //   }
    //   };
    //-----------------------------------------------------------------------------------------------------------------------------
    // First attemp code

    //   handleRoomClick = (room: any) => {
    //     // check if the room is already selected
    //     const isSelected = this.state.selectedRooms.includes(room.id);

    //     // update the selected rooms array based on the current selection
    //     let selectedRooms;
    //     if (isSelected) {
    //       selectedRooms = this.state.selectedRooms.filter(id => id !== room.id);
    //     } else {
    //       selectedRooms = [...this.state.selectedRooms, room.id];
    //     }

    //     // update the component state with the new selection
    //     this.setState({
    //       selectedRooms,
    //     });
    //   };

    render() {
        console.log(window);
        const map = {
            name: 'image-map',
            areas: [
                {
                    id: "n502",
                    href: "n502",
                    coords: [43, 19, 114, 8, 151, 7, 177, 19, 197, 42, 178, 56, 157, 40, 140, 33, 122, 33, 49, 43],
                    shape: "poly",
                },

                {
                    id: "n508",
                    href: "n508",
                    coords: [180, 59, 197, 45, 237, 94, 218, 110],
                    shape: "poly",
                },
                {
                    id: "n509",
                    href: "n509",
                    coords: [221, 111, 239, 99, 265, 122, 257, 147, 236, 135],
                    shape: "poly"
                },

                {
                    id: "n523",
                    href: "n523",
                    coords: [343, 81, 367, 63, 383, 82, 360, 102],
                    shape: "poly"
                },

                {
                    id: "n525",
                    href: "n525",
                    coords: [369, 60, 394, 40, 409, 63, 385, 82],
                    shape: "poly"
                },

                {
                    id: "n526",
                    href: "n526",
                    coords: [1392, 434, 1427, 406, 1477, 460, 1442, 493, 1394, 443],
                    shape: "poly"
                },

                {
                    id: "n528",
                    href: "n528",
                    coords: [408, 29, 438, 9, 449, 32, 425, 50],
                    shape: "poly"
                },

                {
                    id: "n529",
                    href: "n529",
                    coords: [439, 7, 472, 0, 477, 23, 450, 32, 442, 22],
                    shape: "poly"
                },

                {
                    id: "n530",
                    href: "n530",
                    coords: [477, 22, 525, 29, 533, 11, 511, 3, 477, 0],
                    shape: "poly"
                },

                {
                    id: "n533",
                    href: "n533",
                    coords: [582, 18, 542, 2, 527, 30, 536, 37, 525, 63, 595, 92, 619, 49, 577, 32],
                    shape: "poly"
                },

                {
                    id: "n501",
                    href: "n501",
                    coords: [51, 46, 134, 34, 134, 57, 62, 69, 52, 59],
                    shape: "poly"
                },

                {
                    id: "n527",
                    href: "n527",
                    coords: [1473, 505, 1629, 408, 1642, 476, 1510, 557],
                    shape: "poly"
                },

                {
                    id: "n515",
                    href: "n515",
                    coords: [1063, 817, 1175, 758, 1210, 799, 1155, 861, 1074, 876],
                    shape: "poly"
                },

                {
                    id: "n540",
                    href: "n540",
                    coords: [454, 90, 524, 125, 513, 140, 492, 149, 468, 147, 454, 130, 449, 111],
                    shape: "poly"
                },
            ],
        };



        return (
            <>
                <h1>SIWB</h1>
                <div className="image-container" style={{ overflowX: "auto" }}>
                    <ImageMapper src={floorplansiwb} map={map}
                        fillColor="rgba(255, 0, 0, 0.5)" />
                </div>
            </>
        );
    }
}

export default SIWB
