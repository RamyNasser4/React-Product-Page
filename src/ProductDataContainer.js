import React from "react";
import classes from './ProductDataContainer.module.css'
function ProductDataContainer(props){
    const onClickTimeButton = event =>{
        var buttons = document.querySelectorAll("div > div > div > div >div> button");
        for(var i=0;buttons.length>i;++i){
            if(buttons[i] == event.currentTarget && buttons[i].className == classes.Button){
                buttons[i].className = classes.ButtonClicked;
            }else if(buttons[i] == event.currentTarget && buttons[i].className == classes.ButtonClicked){
                buttons[i].className = classes.Button;
            }else{
                buttons[i].className = classes.Button;
            }
        }
        props.onClickTime();
    }
    const onClickHeartButton = event =>{
        var buttons = document.querySelectorAll("div > div > div > div >div> button");
        for(var i=0;buttons.length>i;++i){
            if(buttons[i] == event.currentTarget && buttons[i].className == classes.Button){
                buttons[i].className = classes.ButtonClicked;
            }else if(buttons[i] == event.currentTarget && buttons[i].className == classes.ButtonClicked){
                buttons[i].className = classes.Button;
            }else{
                buttons[i].className = classes.Button;
            }
        }
        props.onClickHeart();
    }
    const onClickWatchButton = (currentWatch,event) =>{
        var images = document.querySelectorAll(".imgs");
        for(var i=0;images.length>i;++i){
            if(images[i]==images[currentWatch]){
                images[i].style.borderColor = "#007482";
            }else{
                images[i].style.borderColor = "transparent";
            }
        }
        props.onClickWatch(currentWatch);
    }
    const ImgCards = props.colorOptions.map((item,pos) =>{
        return <img src={item.imageUrl} className="imgs" key={pos} onClick={()=>onClickWatchButton(pos)} style={pos==0?{borderColor:"#007482"}:{borderStyle:"transparent"}}></img>
    })
    return(
        <div className={classes.Container}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <h2>Select Color</h2>
            <div className={classes.productsImgContainer}>
                {ImgCards}
            </div>
            <h2>Features</h2>
            <div className={classes.FeaturesContainer}>
                <button className={classes.Button} onClick={onClickTimeButton}>{props.featureList[0]}</button>
                <button className={classes.Button} onClick={onClickHeartButton}>{props.featureList[1]}</button>
            </div>
            <button className={classes.buyNow}>Buy Now</button>
        </div>
    );
}
export default ProductDataContainer;