import React, { Component } from 'react';

export default class Navbar extends Component {

    // constructor () {
    //     super()
    //     this.state = {
    //         q: "",
    //         PageNum: 1,
    //     }
    // }

    // searchHandler =  async(event) => {
    //     let key = event.target.value;
    //     let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f1c6261a792c4fe391f52908dbb002f0&page=${this.state.PageNum}&pageSize=${this.props.pageSize}&q=${key}`
    //     let data = await fetch(url);
    //     data = await data.json();
    //     console.log(data)
    //     // this.setState({articles: data.articles, totalResults: data.totalResults})
    // }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">News</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    );
  }
}
