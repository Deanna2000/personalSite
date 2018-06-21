import React, { Component } from 'react';
import ItemsLoaned from './ItemsLoaned'
import {Row, Col} from 'react-bootstrap'

class LoanedItemList extends Component {
  getItems = function() {
    return this.props.loanedItems
        .map(itemList => (
            <Col xs={3} md={3} className="padding-zero">
              <ItemsLoaned itemList={itemList} key={itemList.id}/>
            </Col>
        ));
    }.bind(this)


  render() {
    const loanedItemsList = this.getItems()
    return (

      < div >
        <Row className="margin-top padding-zero">{loanedItemsList}</Row>
      </div >
);
}
}

export default LoanedItemList;