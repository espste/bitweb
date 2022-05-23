import React from 'react';
import millify from 'millify'; //eslint-disable-line
import { Collapse, Row, Col, Typography, Avatar } from 'antd'; //eslint-disable-line
import HTMLReactParser from 'html-react-parser'; //eslint-disable-line

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography; //eslint-disable-line
const { Panel } = Collapse; //eslint-disable-line

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges; //eslint-disable-line
 
  if (isFetching) return <Loader />;

  //PREMIUM PLAN NEEDED TO ACCESS THIS ENDPOINT

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <h1 style={{ color: 'red' }}>PREMIUM PLAN NEEDED</h1>
      <Row>
        {/* {exchangesList.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.uuid}
                showArrow={false}
                header={(
                  <Row key={exchange.uuid}>
                    <Col span={6}>
                      <Text><strong>{exchange.rank}.</strong></Text>
                      <Avatar className="exchange-image" src={exchange.iconUrl} />
                      <Text><strong>{exchange.name}</strong></Text>
                    </Col>
                    <Col span={6}>${millify(exchange.volume)}</Col>
                    <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                    <Col span={6}>{millify(exchange.marketShare)}%</Col>
                  </Row>
                  )}
              >
                {HTMLReactParser(exchange.description || '')}
              </Panel>
            </Collapse>
          </Col>
        ))} */}
      </Row>
    </>
  );
};

export default Exchanges;