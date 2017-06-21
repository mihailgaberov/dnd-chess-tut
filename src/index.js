/**
 * Created by Mihail on 6/21/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import Board from './Board'
import { observe } from './Game'

const rootEl = document.getElementById('root')

observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl
  )
)