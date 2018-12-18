import React from 'react'

import './../css/Home.sass'
class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <h1>Welcome to OmniCAT</h1>
        <h2>At Home Ai Guided Biometrics Optimization</h2>
        <h3><a href="https://gitlab.com/crockett.jesse/omnicat" target="_blank" rel="noopener noreferrer"><img alt="link to source on gitlab" src="https://img.shields.io/badge/open%20source-react%20|%20ethereum-brightgreen.svg?logo=gitlab" /></a></h3>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd8R62ecsGXiAUz2Qe6dRixq1yDvCJ3J3cJ0cAIvEJA59Svmw/viewform?embedded=true" width="640" height="687" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
      </div>
    )
  }
}
export default Home
