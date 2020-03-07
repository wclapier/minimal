import React, { Fragment } from 'react'
import { Styled } from 'theme-ui'

export default () => (
  <Fragment>
    A blog by{' '}
    <Styled.a href="https://twitter.com/laurieontech">Laurie Barth</Styled.a>.
    <br />
    Teacher of all things tech.
  </Fragment>
)