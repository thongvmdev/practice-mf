import React from 'react'

import Button from './components/Button'
import Card from './components/Card'

import MainLayout from './components/MainLayout'

const App = () => {
  return (
    <div>
      UI Components
      <br />
      <Button label={'UI Button'} />
      <Card title={'UI Card'} content={'This is a UI Card/'} />
      <Card title={'UI Card'} content={'This is a UI Card/'} />
      <Card title={'UI Card'} content={'This is a UI Card/'} />
    </div>
  )
}

export default App
