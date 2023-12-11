import logo from './logo.svg';
import React from 'react';
import './App.css';
import BlogCard from './BlogCard.js';
import { isArrayEmpty } from './Utils';
import Header from './Header.js';
import ProductData from './ProuductData.js';
import classes from './App.module.css';
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
//import Home from './Home.js';
//import Test from './Test.js';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBlogs: true,
      BlogObjArr: [{
        id: '1',
        title: 'Blog Title 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likecount: 0
      }, {
        id: '2',
        title: 'Blog Title 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likecount: 0
      }, {
        id: '3',
        title: 'Blog Title 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likecount: 0
      }]
    }
  }
  onClickLikeButton = (pos) => {
    const updatedBlogList = this.state.BlogObjArr;
    const updatedBLogObj = updatedBlogList[pos];
    updatedBLogObj.likecount++;
    updatedBlogList[pos] = updatedBLogObj;
    console.log(updatedBlogList);
    this.setState(() => {
      return { BlogObjArr: updatedBlogList };
    })
  }

  onHideButtonClick = () => {
    this.setState((prevState, prevProps) => {
      return { showBlogs: !prevState.showBlogs };
    });
  }
  render() {
    const BlogCards = isArrayEmpty(this.state.BlogObjArr) ? [] : this.state.BlogObjArr.map((item, pos) => {
      return <BlogCard key={item.id} title={item.title} description={item.description} likecount={item.likecount} position={pos} onLikeButtonClick={() => this.onClickLikeButton(pos)}></BlogCard>
    })
    return (
      <BrowserRouter>
        <div className={classes.App}>
          {/* <button onClick={this.onHideButtonClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        {this.state.showBlogs ? BlogCards : null} */}
          <Header></Header>
          {/* <ProductData></ProductData> */}
          <Routes>
            <Route exact path="/" Component={ProductData}></Route>
            {/* <Route path="/Home" Component={Home}></Route>
            <Route path='/Test' Component={Test}></Route> */}
          </Routes>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
