// Write your code here

import {Component} from 'react'
import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onDenomination = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-bg-container">
        <div className="cash-withdrawal-card-container">
          <div className="name-container">
            <p className="name-icon">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-details-container">
            <p className="balance-note">Your Balance</p>
            <div className="balance-container">
              <p className="balance">{balance}</p>
              <p className="balance-currency">In Rupees</p>
            </div>
          </div>
          <div className="balance-withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="choose-withdraw-sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="denomination-items-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                denominationDetails={eachValue}
                key={eachValue.id}
                onDenomination={this.onDenomination}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
