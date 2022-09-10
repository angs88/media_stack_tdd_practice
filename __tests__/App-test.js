/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {render} from '@testing-library/react-native'

describe("App", () => {

  it("App component renders", () => {
    const appInstance = render(<App/>)
    expect(appInstance).toBeDefined()
  })
})