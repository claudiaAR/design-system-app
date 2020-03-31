import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import { CartConsumer } from "../context";


interface Props {}
interface State {}

class TotalCartForm extends React.Component<Props, State> {
  render() {
    return (
      <CartConsumer>
        {({ getTotalPriceInclShipper }) => (
          <Row gutter={[8, 16]}>
            <Col span={5}>
            </Col>
            <Col span={12}>
                Total summa inklusive frakt: 
            </Col>
            <Col span={3}>
            </Col>

        <Col span={3}> {getTotalPriceInclShipper()}kr</Col>
            <Col span={1}>
            </Col>
          </Row>
        )}
      </CartConsumer>
    );
  }
}

export default TotalCartForm;




