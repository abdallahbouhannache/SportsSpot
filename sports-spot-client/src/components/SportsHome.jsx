import React ,{PureComponent}from 'react';
import NewsPanel from './NewsPanel';
import ImpNewsPanel from './ImpNewsPanel';
import {connect} from 'react-redux';
import io from 'socket.io-client';
import * as actionCreators from '../action_creators';

var socket = io.connect('https://sportsspot.herokuapp.com:443', {secure: true});
// var socket = io.connect('http://localhost:8090');


class HomePage extends PureComponent{
  constructor(props){
        super(props);
  }
render() {
          return <div className="news-holder">
            <div className="containerWrapper">
              <div className="s-row">
                <div className="col-sm-12">
                  <NewsPanel {...this.props} />
                  <ImpNewsPanel {...this.props} />
                </div> 
              </div>
            </div>
          </div>;
  }
};

function mapNewsToProps(curr_feeds){
  return {
    news:curr_feeds
  }
}
export const HomePageContainer = connect(mapNewsToProps,actionCreators)(HomePage);