import React ,{PureComponent}from 'react';
import {connect} from 'react-redux';
import ImpNewsPanel from './ImpNewsPanel';
import NewsPanel from './NewsPanel';
import * as actionCreators from '../action_creators';

class SubHomePage extends PureComponent{
    render() {
        return (
           <div className="diff-news-holder">
                    <div className="containerWrapper">
                    <div className="s-row">
                        <div className="col-sm-12">
                        <NewsPanel {...this.props} />
                        <ImpNewsPanel {...this.props} />
                        </div> 
                    </div>
                    </div>
                </div>
        )
    }
}
function mapNewsToProps(curr_feeds){
  return {
    news:curr_feeds
  }
}
export const subHomePageContainer = connect(mapNewsToProps,actionCreators)(SubHomePage);
