import { blue } from "@material-ui/core/colors";
import { Block } from "@material-ui/icons";

export default function Footer(){
    let style ={
        backgroundColor: "#8FC8EB",
        // textAlign: "center",
        // position: "fixed",
        border: "3px solid black",
        // border_style:"outset",
        padding:"auto",
        height:"auto",
        width:"auto",
        margins:"auto",
        display:"flex",
        alignItems:"stretch"
      
    };
    let ulStyle ={
        listStyleType: "none",
        marginBottom: "10px",
        paddingTop:"20px"
        
    };
    let copyStyle = {
        paddingLeft:"70%",
        // display:"flex",
        // alignSelf:"flex-end",
        // flexDirection:"row-reverse",
        // justifyContent: 'space-between',
        
    };
    return (
<div style ={style}>
        <div>
            <p>Created by:</p>
            <br/>
        </div>
        <div>
            <ul style={ulStyle}>
        
            <li><span>Sean Wilson</span></li>
            <li><span>Damian Pascal</span></li>
            <li><span>Jordane Allen</span></li>
            <li><span>Jade Marte</span></li>
            
        </ul>
        </div>
        <div style={copyStyle}>
            <p>CopyRight.</p>
        </div>
    </div>);
}
