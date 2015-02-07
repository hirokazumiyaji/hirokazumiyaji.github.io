/** @jsx React.DOM */
'use strict';

var NormalizeCSS = require('../css/normalize.css'),
    React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className="contents-wrapper">
        <div className="header-wrapper">
          <h1>hirokazumiyaji.github.io</h1>
        </div>
        <article className="contents-container">
          <h2>Links</h2>
          <ul className="links">
            <li>
              <a href="http://github.com/hirokazumiyaji">
                <p className="icon github"></p>
              </a>
            </li>
            <li>
              <a href="http://profile.hatena.ne.jp/hirokazumiyaji/">
                <p className="icon hatena"></p>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/hirokazu.miyaji.1">
                <p className="icon facebook"></p>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/hirokazu_miyaji">
                <p className="icon twitter"></p>
              </a>
            </li>
          </ul>
        </article>
      </div>
    );
  }
});

React.render(React.createElement(Main), document.getElementById("site-wrapper"));
