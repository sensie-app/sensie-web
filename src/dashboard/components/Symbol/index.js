// react
import React, { useState } from 'react'
import PropTypes from 'prop-types'
// styles
import styles from './styles.module.scss'
// components
import FlowerOfLife from '../Levels/FlowerOfLife'
import MindfullBeginner from '../Levels/MindfullBeginner'
import TheIntellectualizer from '../Levels/TheIntellectualizer'
import TheIntuitiveBull from '../Levels/TheIntuitiveBull'
import TheDoubter from '../Levels/TheDoubter'
import OnThePath from '../Levels/OnThePath'
import TheConnectedBeing from '../Levels/TheConnectedBeing'
import MetatronState from '../Levels/MetatronState'

console.log('symbols', FlowerOfLife, MindfullBeginner)

// * component
/**
 * Symbol component
 * @component
 * @param {number} level
 */
const Symbol = ({ level }) => {
  // hooks
  const [showLevel, setShowLevel] = useState(0)

  // render functions
  const renderLevels = () => {
    switch (showLevel) {
      case 0: return <FlowerOfLife level={level} />
      case 1: return <MindfullBeginner level={level} />
      case 2: return <TheIntellectualizer level={level} />
      case 3: return <TheIntuitiveBull level={level} />
      case 4: return <TheDoubter level={level} />
      case 5: return <OnThePath level={level} />
      case 6: return <TheConnectedBeing level={level} />
      case 7: return <MetatronState level={level} />
    }
  }

  const renderBtns = () => {
    return <div className={styles.SymbolBtnsTestContainer}>
      <button onClick={() => setShowLevel(0)}>Lv.0</button>
      <button onClick={() => setShowLevel(1)}>Lv.1</button>
      <button onClick={() => setShowLevel(2)}>Lv.2</button>
      <button onClick={() => setShowLevel(3)}>Lv.3</button>
      <button onClick={() => setShowLevel(4)}>Lv.4</button>
      <button onClick={() => setShowLevel(5)}>Lv.5</button>
      <button onClick={() => setShowLevel(6)}>Lv.6</button>
      <button onClick={() => setShowLevel(7)}>Lv.7</button>
    </div>
  }

  return (
    <div className={styles.SymbolContainer}>
      {renderBtns()}
      { renderLevels() }
    </div>
  )
}

// prop-types
Symbol.propTypes = {
  /** level */
  level: PropTypes.string.isRequired
}

export default Symbol
