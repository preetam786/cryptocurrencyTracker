import {Component} from 'react'
import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptocurrencyItemList: [], isLoading: true}

  componentDidMount() {
    this.getCurrencyDetails()
  }

  getCurrencyDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseStatus = await response.status
    console.log(responseStatus)
    const data = await response.json()
    const formattedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
      currencyName: eachData.currency_name,
      euroValue: eachData.euro_value,
      usdValue: eachData.usd_value,
    }))
    this.setState({cryptocurrencyItemList: formattedData, isLoading: false})
  }

  render() {
    const {cryptocurrencyItemList, isLoading} = this.state
    return (
      <div className="cryptocurrencies-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="heading">CryptoCurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              className="cryptocurrency-image"
              alt="cryptocurrency"
            />
            <ul className="cryptocurrency-list">
              <li className="cryptocurrency-list-heading">
                <h1 className="list-heading">Coin Type</h1>
                <h1 className="list-heading">USD</h1>
                <h1 className="list-heading">EURO</h1>
              </li>
              {cryptocurrencyItemList.map(eachObject => (
                <CryptocurrencyItem
                  key={eachObject.id}
                  cryptocurrencyItemObject={eachObject}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
