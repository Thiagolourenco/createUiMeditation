import React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'

export default function Moon() {
  return (
    <Svg width="52" height="51" viewBox="0 0 52 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="25.9672" cy="25.389" r="25.37" fill="#D3D4DE"/>
        <Circle cx="17.2054" cy="13.6846" r="4.65732" fill="#C5C6D0"/>
        <Circle cx="36.4355" cy="25.1748" r="6.75236" fill="#F1F1F3"/>
        <Path fillRule="evenodd" clipRule="evenodd" d="M44.7968 42.3918C41.7967 45.712 37.9308 48.235 33.5551 49.6047C33.1765 48.7614 32.9658 47.8262 32.9658 46.8418C32.9658 43.1126 35.989 40.0895 39.7182 40.0895C41.7427 40.0895 43.5592 40.9805 44.7968 42.3918Z" fill="#C5C6D0"/>
        <Circle cx="20.224" cy="41.3833" r="3.01873" fill="#C5C6D0"/>
    </Svg>
  )
}