import React from 'react'
import { connect } from 'react-redux'

const CounterContainer = ({ count, addOne, removeOne,addTen, removeTen, resetAction }) => {
  return (
<div>
  <p id="render-store">{count}</p>
  <button id="addOne" onClick={() => addOne()}>+1</button>
  <button id="removeOne" onClick={() => removeOne()}>-1</button>
  <button id="addTen" onClick={() => addTen()}>+10</button>
  <button id="removeTen" onClick={() => removeTen()}>-10</button>
  <button id="reset" onClick={() => resetAction()}>Reset</button>
</div>
  )
}

const mapStateToProps = state => ({
  count: state
})

const mapDispatchToProps = dispatch => ({
  addOne : () => dispatch({
    type: 'ADD ONE'
  }),
  removeOne : () => dispatch({
    type: 'REMOVE ONE'
  }),
  
  addTen : () => dispatch({
    type: 'ADD TEN'
  }),
  
  removeTen : () => dispatch({
    type: 'REMOVE TEN'
  }),
  
  resetAction : () => dispatch({
    type: 'RESET'
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)