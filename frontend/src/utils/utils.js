import React from 'react';
import { TiBatteryCharge, TiBatteryHigh, TiBatteryMid, TiBatteryLow } from 'react-icons/ti'

export const isNumber = (n) => { 
  return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
}

export const convertSubTagString = (text) => {
  return text.split('').map((text) => {
    return isNumber(text) ? `<sub>${text}</sub>` : text
  }).join('')
}

export const batteryToText = (value) => {
  return Math.round(value) + '%';
}

export const batteryToImg = (value) => {
  if (value > 75) {
    return <TiBatteryCharge />
  }
  else if (value > 50) {
    return <TiBatteryHigh />
  }
  else if (value > 20) {
    return <TiBatteryMid />
  }
  else {
    return <TiBatteryLow style={{color: `#FF0000`}} />
  }
}

export const delay = (ms) => new Promise(resolve =>
  setTimeout(resolve, ms)
);