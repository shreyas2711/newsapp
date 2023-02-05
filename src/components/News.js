import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";
const News=(props)=> {
   const[articles,setArticles]=useState([])
   const[loading,setLoading]=useState(true)
   const[page,setPage]=useState(1)
   const[totalResults,setTotalResults]=useState(0)
   
   const capitalizeFirstLetter= (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
    
  }
  // document.title=`NewsMonkey-${capitalizeFirstLetter(props.category)}`
    
    // constructor(props){
    //     super(props);
       
        
    //   }


   

    const updateNews=async()=>{
      props.setProgress(10);
      const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`
     setLoading(true)
      let data=await fetch(url);
      props.setProgress(30);
      let parsedData=await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
    }

    useEffect(() => {
      updateNews();
      
    },[]);

      

    const handlePrevClick= async()=>{
    setPage(page-1)
    updateNews();
  }
    const handleNextClick= async()=>{
      setPage(page+1)
      updateNews()
    }

  
    // fetchMoreData = async ()=>{
    //  setState({page:props.page+1})
    //   const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6b0ff54870dd45f9869c0b516578772c&page=${props.page+1}`
    //   setState({loading:true})
    //   let data=await fetch(url);
    //   let parsedData=await data.json();
    //  setState({articles:parsedData.articles,
    //    totalResults:parsedData.totalResults,
    //    loading:false  
    //   })

     
    // };



  
    return (
      <div className="container my-3">
      <h1 className="text-center my-2" style={{margin:"35px 0"}}>NewsMonkey-Top {`${capitalizeFirstLetter(props.category)}`} </h1>
      {loading &&<Spinner/>}
      {/* <InfiniteScroll style={{overflow:"hidden"}}
          dataLength={props.articles.length}
          next={fetchMoreData}
          hasMore={props.articles.length!== props.totalResults}
          loader={<Spinner/>}
        > */}
      <div className="row">
      {!loading && articles.map((element)=>{
       return <div className="col-md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/> 
        </div>
      })}
      
        </div>
        {/* </InfiniteScroll> */}
        <div className="container d-flex justify-content-between">
        <button disabled={props.page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&laquo; Previous</button>
        <button type="button" disabled={props.page+1>Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next  &raquo;</button>
        </div>
      </div>
    )
  }

News.defaultProps={
  country:"in",
  pageSize:8,
  category:'general'
 }

 News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,

 }

export default News
