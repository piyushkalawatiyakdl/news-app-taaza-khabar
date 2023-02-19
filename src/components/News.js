import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  
  constructor(){
    super();
    console.log("hello i am constructor");
    this.state={
      articles: [],
      loading:false,
      page:1,
      
    }
  }

  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=a6909782ab944fb39c539abfed48e49f&pagesize=18&page=1";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles,totalResult:parsedData.totalResult})
  }
  handlePrev=async ()=>{
    console.log("pre")
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a6909782ab944fb39c539abfed48e49f&page=${this.state.page-1}`;
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles})
    this.setState({page:this.state.page-1})
  }
  handleNext=async()=>{
    if( this.state.page+1> Math.ceil(this.state.totalResult/18)){

    }
    else{
    console.log("next");
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a6909782ab944fb39c539abfed48e49f&page=${this.state.page+1}`;
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles})
    this.setState({page:this.state.page+1})
  }}
  render() {
    return (

      <div className="container my-3">
        <h2 style={{color:"green",paddingBottom:"30px"}}>NewsMonkey Top Headlines of the Day</h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
              
            <NewsItem 
              title={element.title ? element.title.slice(0,25):""}
              description={element.description ? element.description.slice(0,70):""}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
          
          })}
          
     
        </div>
        <div  className="container d-flex justify-content-around my-3" >
        <button type="button " disabled={this.state.page<=1} className="btn btn-primary"onClick={this.handlePrev} >&larr; Previous Page</button>
        <button type="button" disabled={this.state.page+1> Math.ceil(this.state.totalResult/18)} className="btn btn-primary" onClick={this.handleNext}>Next Page &rarr;</button>

        </div>
      </div> 
    );
  }
}

export default News;
