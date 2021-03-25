import React from 'react'
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg'

export default function Bad() {
  return (
    <Svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <G clipPath="url(#clip0)">
            <Path d="M12.75 23.8824C19.026 23.8824 24.1136 18.7948 24.1136 12.5188C24.1136 6.24284 19.026 1.15517 12.75 1.15517C6.47403 1.15517 1.38635 6.24284 1.38635 12.5188C1.38635 18.7948 6.47403 23.8824 12.75 23.8824Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M17.2955 17.0643C17.2955 17.0643 15.591 14.7915 12.75 14.7915C9.90914 14.7915 8.20459 17.0643 8.20459 17.0643" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M9.34094 9.10971H9.35231" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M16.1591 9.10971H16.1704" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </G>
        <Defs>
            <ClipPath id="clip0">
                <Rect width="25" height="25" fill="white" transform="translate(0.25 0.0187988)"/>
            </ClipPath>
        </Defs>
    </Svg>    
  )
}