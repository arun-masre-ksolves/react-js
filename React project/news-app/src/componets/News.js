import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
    constructor(){
        super();
        console.log("hello");
       this.state= { 
        articles: [],
        loading: false,
        PageNum: 1,
       }
    }

    async componentDidMount () {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1c6261a792c4fe391f52908dbb002f0&page=${this.PageNum}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        data = await data.json();
        console.log(data)
        this.setState({articles: data.articles, totalResults: data.totalResults})
    }

    handlePrevious = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1c6261a792c4fe391f52908dbb002f0&page=${this.state.PageNum-1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        data = await data.json();
        console.log(data)
        this.setState({
            articles: data.articles,
            PageNum: this.state.PageNum-1
        })
    }

    handleNext = async() => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1c6261a792c4fe391f52908dbb002f0&page=${this.state.PageNum +1}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        data = await data.json();
        console.log(data)
        this.setState({
            articles: data.articles,
            PageNum: this.state.PageNum+1
        })
    }

    searchHandler =  async(event) => {
        let key = event.target.value;
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1c6261a792c4fe391f52908dbb002f0&page=${this.state.PageNum}&pageSize=${this.props.pageSize}&q=${key}`
        let data = await fetch(url);
        data = await data.json();
        console.log(data)
        this.setState({articles: data.articles})
    }

  render() {
    return (

      <div className='container my-3'>
        <h1 className="text-center">News - Top headlines</h1>
        <input type="search" onChange={this.searchHandler} />
        <div className="row">
            {this.state.articles.map((element)=> {
            return <div className="col-md-3"  key={element.url}>
                <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 65):""} imageUrl={element.urlToImage? element.urlToImage : "https://images.news18.com/ibnlive/uploads/2023/10/market-stocks-2023-10-d11edffbbdfb26f5c00ed88cff4dcd36-16x9.jpg?impolicy=website&width=1200&height=675"}
                newsUrl={element.url}/>
            </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.PageNum<=1} onClick={this.handlePrevious} type="button" className="btn btn-dark">&larr; Previous Page</button>
        <button disabled={this.state.PageNum+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.handleNext} type="button" className="btn btn-dark">Next Page &rarr;</button>
        </div>
      </div>
    );
  }
}
