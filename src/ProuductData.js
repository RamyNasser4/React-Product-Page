import React from "react";
import ProductDataContainer from "./ProductDataContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartPulse, beatFade } from "@fortawesome/free-solid-svg-icons";
import classes from "./ProductData.module.css";
class ProductData extends React.Component {
    ProductData = {
        title: 'FitBit 19 - The Smartest Watch',
        description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
        colorOptions: [
            {
                styleName: 'Black Strap',
                imageUrl: 'https://imgur.com/iOeUBV7.png'
            },
            {
                styleName: 'Red Strap',
                imageUrl: 'https://imgur.com/PTgQlim.png'
            },
            {
                styleName: 'Blue Strap',
                imageUrl: 'https://imgur.com/Mplj1YR.png'
            },
            {
                styleName: 'Purple Strap',
                imageUrl: 'https://imgur.com/xSIK4M8.png'
            },
        ],
        featureList: [
            "Time", "Heart Rate"
        ]
    }
    state = {
        currentWatch:this.ProductData.colorOptions[0].imageUrl,
        TinH: new Date().getHours(),
        TinM: new Date().getMinutes(),
        showHeart: false,
        showTime: false
    }
    onClickTime = (event) => {
        this.setState((prevState,prevProps)=>{
            return{TinH: new Date().getHours(),
                TinM: new Date().getMinutes(),showTime:!prevState.showTime,showHeart:false};
        })
    }
    onClickHeart = () => {
        this.setState((prevState,prevProps)=>{
            return{showTime:false,showHeart:!prevState.showHeart};
        })
    }
    onClickWatch = (clickedWatch) =>{
        
        this.setState(()=>{
            return {currentWatch: this.ProductData.colorOptions[clickedWatch].imageUrl};
        })
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.currentWatch === this.state.currentWatch && nextState.TinH === this.state.TinH && this.state.TinM === nextState.TinM && this.state.showTime === nextState.showTime && this.state.showHeart === nextState.showHeart){
            return false;
        }else{
            console.log('Inside render componened')
            return true;
        }
    }
    //Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.
    render(){
        return (
            <div className={classes.main}>
                {this.state.showTime ? <span className={classes.Time}>{this.state.TinH>9 ? this.state.TinH : '0' + this.state.TinH}:{this.state.TinM>9 ? this.state.TinM : '0' + this.state.TinM}</span> : null}
                {this.state.showHeart ? <div className={classes.HeartContainer}>
                    <FontAwesomeIcon icon={faHeartPulse} beatFade />
                    <span className={classes.Heart}>78</span>
                </div> : null}
                <img className={classes.mainImg} src={this.state.currentWatch}></img>
                <ProductDataContainer onClickTime={this.onClickTime} onClickHeart={this.onClickHeart} onClickWatch={this.onClickWatch} Time={this.state.showTime} Heart={this.state.showHeart} featureList={this.ProductData.featureList} title={this.ProductData.title} description={this.ProductData.description} colorOptions={this.ProductData.colorOptions}></ProductDataContainer>
            </div>
        )
    }
    
}
export default ProductData;