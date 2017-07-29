import React ,{PureComponent}from 'react';
import NewsPanel from './NewsPanel';
import ImpNewsPanel from './ImpNewsPanel';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';


class HomePage extends PureComponent{
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

function mapNewsToProps(curr_all_news){
  return {
    news:curr_all_news
  }
}
export const HomePageContainer = connect(mapNewsToProps,actionCreators)(HomePage);