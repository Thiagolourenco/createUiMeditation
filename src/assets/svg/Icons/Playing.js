import React from 'react'
import Svg, { Path } from 'react-native-svg'

export default function Playing({ color }) {
  return (
    <Svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M10.1641 5.23442L2.50637 0.882901C1.39178 0.251505 0 1.04217 0 2.30496V11.0137C0 12.2822 1.39178 13.0728 2.50637 12.4357L10.1641 8.08423C11.2786 7.45283 11.2786 5.8715 10.1641 5.23442Z" fill={color}/>
    </Svg>

  )
}