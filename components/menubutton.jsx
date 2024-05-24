import {useState} from "react";

const Menubutton = (props) => {

    const {className, onClick} = props;

    const [menuBtn, setMenuBtn] = useState(false)

    return(
        <div onClick={onClick} className={className}>
            <div className={` menu-btn ${menuBtn? "open" : ""}`} onClick={()=>{setMenuBtn(!menuBtn)}}>
                <div className="bg-primary before:bg-primary after:bg-primary menu-btn--burger"></div>
            </div>
        </div>
    )

}

export default Menubutton;