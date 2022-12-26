import React, { useEffect, useState } from 'react'

import '../styles/globals.scss'

function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  )
}

export default App;
