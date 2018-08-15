const API_KEY = 'AIzaSyCg0vlFL1fNdiEqB-13smgMKAHIq5oRZZk';

import React, { Component } from 'react';

export default class BooksUser extends Component {

  loadBooks() {
    const script = document.createElement("script");
    script.src = "https://people.googleapis.com/$discovery/rest?version=v1";

    script.onload = () => {
      gapi.load('client', () => {
        gapi.client.setApiKey(API_KEY);
        gapi.client.load('books', 'v3', () => {
          this.setState({ gapiReady: true });
        });
      });
    };

    document.body.appendChild(script);
  }

  componentDidMount() {
    this.loadBooks();
  }

  render() {
    if (this.state.gapiReady) {
      return (
        <h1>GAPI is loaded and ready to use.</h1>
      );
    };
  }

};