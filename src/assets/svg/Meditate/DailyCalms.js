import React from 'react'
import Svg, { Path, G, Mask, Rect } from 'react-native-svg'

export default function DailyCalm() {
  return (
    <Svg width="344" height="95" viewBox="0 0 374 95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Mask id="mask0" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="374" height="95">
            <Rect width="374" height="95" rx="10" fill="#333242"/>
        </Mask>
        <G mask="url(#mask0)">
            <Path d="M57.9519 40.4455C57.9519 23.0704 82.4519 6.58416 98 0H0V95H89.048C92.8173 79.4802 84.3363 67.7228 75.3846 62.0792C66.4329 56.4356 57.9519 54.5 57.9519 40.4455Z" fill="#ECD3C2"/>
            <Path d="M199.55 32.7186C183.704 16.6279 191.094 2.20173 196.77 -3H374V43.4688C333.341 87.1633 306.235 55.2594 303.803 47.2834C301.37 39.3074 298.938 12.2584 260.712 35.4928C222.485 58.7272 219.358 52.8319 199.55 32.7186Z" fill="#FAC978"/>
            <Path d="M246 97.9998C246 115.673 231.673 130 214 130C196.327 130 182 115.673 182 97.9998C178.364 64.0664 190.721 70.278 204.304 77.3438C210.264 80.4442 217.183 79.3984 223.194 76.3997C243.288 66.3768 246 82.4416 246 97.9998Z" fill="#FF7C6B"/>
        </G>
    </Svg>
    
  )
}