import React from 'react'

const NewsItem=(props)=>{

    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex',position:'absolute',justifyContent:'flex-start',left:'0'}}>

            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://images.hindustantimes.com/img/2023/02/03/1600x900/nirmala_sitharaman_1675419085172_1675419092193_1675419092193.JPG" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
