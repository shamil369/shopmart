import React from 'react'

function EmptyComponent({page}) {
  return (
    <div className="background-body h-[50vh] text-center">
    <div className="wavi">
      <span style={{ "--i": 1 }}>No</span>
      <span style={{ "--i": 2 }}>&nbsp;</span>
      <span style={{ "--i": 3 }}> Item</span>
      <span style={{ "--i": 4 }}>&nbsp;</span>
      <span style={{ "--i": 5 }}>&nbsp;In</span>
      <span style={{ "--i": 6 }}>&nbsp;Your</span>
      <span style={{ "--i": 7 }}>&nbsp;{page.key}</span>
    </div>
  </div>
  )
}

export default EmptyComponent