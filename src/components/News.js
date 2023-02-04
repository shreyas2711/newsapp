import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
   static defaultProps={
    country:"in",
    pageSize:8,
    category:'general'
   }

   static propTypes={
      country:PropTypes.string,
      pageSize:PropTypes.number,
      category:PropTypes.string,

   }
   
   capitalizeFirstLetter= (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
    
    constructor(props){
        super(props);
        // console.log("Hello im a constructor from News component");
        this.state={
            articles:[],
            loading:false,
            page:1
        }
        document.title=`NewsMonkey-${this.capitalizeFirstLetter(this.props.category)}`
      }


   

    async updateNews(pageNo){
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2aa465783c441f28d01d57912b5debc&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData=await data.json();
      console.log(parsedData);
     this.setState({articles:parsedData.articles,
       totalResults:parsedData.totalResults,loading:false})
    }

    async componentDidMount(){
         this.updateNews();
  
     }

    handlePrevClick= async()=>{
    this.setState({page:this.state.page - 1})
    this.updateNews();
  }
    handleNextClick= async()=>{
      this.setState({page:this.state.page + 1})
      this.updateNews()
    }




  render() {
    return (
      <div className="container my-3">
      <h1 className="text-center my-2" style={{margin:"35px 0"}}>NewsMonkey-Top {`${this.capitalizeFirstLetter(this.props.category)}`} </h1>
      {this.state.loading &&<Spinner/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
       return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> 
        </div>
      })}
      
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>
        <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next  &raquo;</button>
        </div>
      </div>
    )
  }
}

export default News
