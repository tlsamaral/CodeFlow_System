import React, { Fragment } from 'react';
import Banners from '../Banners/Banners';
import ProductGateway from '../ProductGateway/ProductGateway';
import EngageBanner from '../EngageBanner/EngageBanner';
import FeedbackArea from '../FeedbackArea/FeedbackArea';
import ClientFeedBackArea from '../ClientFeedbackArea/ClientFeedBackArea';


function Main() {
  return ( 
    <Fragment>
      <Banners />
      <ProductGateway />
      <EngageBanner />
      <FeedbackArea />
      <ClientFeedBackArea />
    </Fragment>
  );  
}

export default Main;
