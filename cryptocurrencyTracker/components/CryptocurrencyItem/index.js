import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurrencyItemObject} = props
  const {
    currencyLogo,
    currencyName,
    euroValue,
    usdValue,
  } = cryptocurrencyItemObject

  return (
    <li className="currency-list-item">
      <div className="coin-type">
        <img src={currencyLogo} className="currency-logo" alt={currencyName} />
        <p className="currency-details">{currencyName}</p>
      </div>
      <p className="currency-details">{usdValue}</p>
      <p className="currency-details">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
