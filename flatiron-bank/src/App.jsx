import React from 'react'
import Transaction from './components/Transaction'

const App = () => {
  return (
      <div>
        <div>
        <h1>Flatiron Bank</h1>
        <SearchBar />
        </div>
        <div>
        <Transaction />
        <TransactionForm />
        </div>
      </div>
  )
}

export default App