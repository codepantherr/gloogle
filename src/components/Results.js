import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Results = () => {
  const location = useLocation();

  const { loading, results, error } = useSelector((state) => state.resultsReducer);
  
  if (loading) return <p className="f4 dark-green tc">Searching for best results...</p>
  if (error) return <p className="f4 dark-red tc">Something bad happened!</p>

  switch (location.pathname) {
    case '/search':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          <div className="w-100 w-70-m w-70-l">
            {results.length ? results?.map(({ link, title, description }) => (
              <div key={uuidv4()} className="w-100 bg-white mb2 pa3">
                <a href={link} className="link dim black-60">
                  {link.length > 30 ? link.substr(0, 30) : link }
                </a>
                <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}>
                  <h2>{title}</h2>
                </a>
                <p style={{ color: '#041C32' }}>
                  {description.substr(0, 100)}
                </p>
              </div>
            )) : ''}
          </div>
        </section>
      )

    case '/news':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          <div className="w-100 w-70-m w-70-l">
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
            <div className="w-100 bg-white mb2 pa3">
              <a href="https://semver.org" className="link dim black-60">https://semver.org</a>
              <a href="https://semver.org" style={{'color': '#325288', textDecoration: 'none'}}><h2>Semantic Versioning 2.0.0 | Semantic Versioning</h2></a>
              <p style={{ color: '#041C32' }}>Software versioning is the process of assigning either unique version names or unique version numbers to unique states of computer software.</p>
            </div>
          </div>
        </section>
      )

    case '/images':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          <div className="images__result-grid">
            <div className="tc">
              <img src="https://via.placeholder.com/150" />
              <p className="fw7">Some title</p>
              <p>image source</p>
            </div>
            <div className="tc">
              <img src="https://via.placeholder.com/150" />
              <p className="fw7">Some title</p>
              <p>image source</p>
            </div>
            <div className="tc">
              <img src="https://via.placeholder.com/150" />
              <p className="fw7">Some title</p>
              <p>image source</p>
            </div>
            <div className="tc">
              <img src="https://via.placeholder.com/150" />
              <p className="fw7">Some title</p>
              <p>image source</p>
            </div>
            <div className="tc">
              <img src="https://via.placeholder.com/150" />
              <p className="fw7">Some title</p>
              <p>image source</p>
            </div>
            <div className="tc">
              <img src="https://via.placeholder.com/150" />
              <p className="fw7">Some title</p>
              <p>image source</p>
            </div>
          </div>
        </section>
      )

    case '/videos':
      return (
        <section className="w-100 bg-near-white min-vh-100 pt1 pt2-l">
          VIDEOS
        </section>
      )

    default:
      return "ERROR";
}

  
};

export default Results;
