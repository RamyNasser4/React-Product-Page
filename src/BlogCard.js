import React, { Component } from "react";
import { dumpLogs } from './Utils';
import classes from './BlogCard.module.css';
function BlogCard(props){
  /* state = {
    likecount : 0
  } */
  /* onClickButton = () => {
    this.setState((prevState,prevProps) => {return {likecount : prevState.likecount + 1};})
  } */
  /* render() { */
    dumpLogs(props);
    /* const styles = {
        margin: '16px',
        borderRadius: '5px',
        boxShadow: '0 2px 5px #ccc',
        padding: '16px',
        boxSizing: 'border-box'
      }; */
    /* const BlogCards = BlogObjArr.map((item) =>{ */
    
    return (
      <div className={classes.NewBlogCard}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>Like count: {props.likecount}</p>
        <button onClick={props.onLikeButtonClick}>Like</button>
      </div>
    );
  /* } */
  /*  })
   return BlogCards; */
}
export default BlogCard;
