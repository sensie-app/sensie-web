// react
import React, { useState } from 'react'
// styles
import styles from './styles.module.scss'
// components
import Icon from '../Icon'
import FlowerOfLife from '../Levels/FlowerOfLife'

// * component
/**
 * Symbol component
 * @component
 */
const Symbol = () => {
  // const
  const MaxLevel = 7

  // hooks
  const [level, setLevel] = useState(0)

  // handle functions
  const handleLevel = () => {
    const newLevel = level + 1
    setLevel(newLevel > MaxLevel ? 0 : newLevel)
  }

  return (
    <div className={styles.SymbolContainer}>
      <FlowerOfLife level={level} />
      <button onClick={handleLevel}><Icon name="arrow-right-outline" /></button>
    </div>
  )
}

export default Symbol
