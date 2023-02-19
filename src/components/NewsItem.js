import React, { Component } from 'react'; 

export class NewsItem extends Component {
  
  render() {
    let {title,description,imgUrl,newsUrl}=this.props;
    
    
    return (
      
    
        <div className="card" style={{width: "18rem"}}>
  <img src={imgUrl ? imgUrl:"https://images.livemint.com/img/2022/12/11/600x338/APPLE_1670760530984_1670760531168_1670760531168.jpg"} className="card-img-top" alt="..."></img>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
  
</div>
    )
  }
}

export default NewsItem;