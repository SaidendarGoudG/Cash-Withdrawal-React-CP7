// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onDenomination} = props
  const {value} = denominationDetails

  const onClickButton = () => {
    onDenomination(value)
  }

  return (
    <li>
      <button className="button" onClick={onClickButton} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
