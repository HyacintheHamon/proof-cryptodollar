import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Header, List, Table } from 'semantic-ui-react'

class CryptoDollarContractState extends Component {
  renderContractState (data) {
    const dataList = Object.keys(data).map((variable) => (
      <Table.Row key={variable}>
        <Table.Cell>{variable}</Table.Cell>
        <Table.Cell>{data[variable]}</Table.Cell>
      </Table.Row>
    ))

    return (
      <div>
        <Header>CryptoDollar Contract State</Header>
        <Table basic='very'>
          <Table.Body>{dataList}</Table.Body>
        </Table>
      </div>
    )
  }

  renderLoader () {
    return <div>Loading</div>
  }

  render () {
    const { data, loading } = this.props
    if (loading || !data) return this.renderLoader()

    return this.renderContractState(data)
  }
}

CryptoDollarContractState.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool
}

export default CryptoDollarContractState
