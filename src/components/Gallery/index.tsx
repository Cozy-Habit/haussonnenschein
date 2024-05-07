

var arr_alt = [
    ["gallery_01.svg", "Wohnzimmer"],
    ["gallery_02.svg", "Wohnzimmer"],
    ["gallery_03.svg", "Wohnzimmer"],
    ["gallery_04.svg", "Wohnzimmer"],
    ["gallery_05.svg", "Wohnzimmer"],
    ["gallery_06.svg", "Wohnzimmer"],
    ["gallery_07.svg", "Wohnzimmer"],
    ["gallery_08.svg", "Wohnzimmer"],
    ["gallery_09.svg", "Wohnzimmer"]
]

const path = "/assets/gallery/";

export default function Gallery() {

    return (
        <div className="gallery">

            {/* <div className="main_section_width"> */}
            <div className="gallery_container">

                {/* {
                    arr.map((item) => {
                        return(
                        <div className="img_container">
                        
                            {
                                item.map((key) => {
                                return  (<img className="gallery_img" src={path + key[0]} alt={key[1]}/>);
                                })
                            }
                            
                        </div>);
                    })
                } */}

                {
                    arr_alt.map((item, key) => {
                        return (<img key={key} className="gallery_img" src={path + item[0]} alt={item[1]} />);
                    })
                }

            </div>
            {/* </div> */}
        </div>
    );
}