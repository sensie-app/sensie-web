// react
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import MultiSelect from 'react-multi-select-component'

const MultipleSelectCheckbox = ({ data }) => {
  // hooks
  const [selected, setSelected] = useState([])

  return (
    <div>
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={data}
        value={selected}
        onChange={setSelected}
        labelledBy={'Topics'}
      />
    </div>
  )
}

MultipleSelectCheckbox.propTypes = {
  data: PropTypes.array.isRequired
}

export default MultipleSelectCheckbox
