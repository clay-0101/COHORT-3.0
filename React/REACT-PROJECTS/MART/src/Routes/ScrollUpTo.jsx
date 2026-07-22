import { useEffect } from 'react'
import { useLocation } from 'react-router'

const ScrollToTop = () => {
  let location = useLocation()

  useEffect(() => {
    const container = document.getElementById('app-scroll-container')
    if (container) {
      container.scrollTo(0, 0)
    }
  }, [location.pathname])

  return null
}

export default ScrollToTop