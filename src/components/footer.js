import { blue } from "@material-ui/core/colors";
import { Block } from "@material-ui/icons";

export default function Footer(){
    let style ={
        backgroundColor: "rgba(143,200,235,0.5)",
        // textAlign: "center",
        position: "relative",
        border: "3px",
        // border_style:"outset",
        display:"flex",
        flexDirection:"row",
        height:"75px",
        // width:"100%"
        marginTop:"20px"
        
        
      
    };
    // let ulStyle ={
    //     listStyleType: "none",
    //     marginBottom: "10px",
    //     margin:"0",
    //     paddingTop:"20px",
    //     paddingLeft:"0"
        
    // };
    let pleaseWork ={
        display:"flex",
        alignItems:"flex-start",
        flexDirection:"column",
        position: "relative",
        zIndex:100,
        color:"#E3E3DE"

    }
    let copyStyle = {
        marginLeft:"auto",
        position: "relative",
        zIndex:100,
        // display:"flex",
        // alignSelf:"flex-end",
        // flexDirection:"row-reverse",
        // justifyContent: 'space-between',
        
    };
    let backgroundImage = {
        position:"absolute",
        top: 0,
        left:0,
        width:"100%",
        height:"100%",
        backgroundImage: 'url(/assets/images/hero-bg.jpg)',
        zIndex:50,
        opacity:0.4
    };
    return (
<div style ={style}>
    <div style={backgroundImage}></div>
    <div style={pleaseWork}>
        <div>
            <p>Created by:</p>
            {/* <br/> */}
        </div>
        <div>
           
        {/* <p> */}
            <span>Sean Wilson |</span>
            <span>Damian Pascal |</span>
            <span>Jordane Allen |</span>
            <span>Jade Marte</span>
        {/* </p>  */}
        
        </div>
    </div>
        <div style={copyStyle}>
            <p>CopyRight 2021.</p>
        </div>
    </div>);
}
