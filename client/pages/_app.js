import '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'

import '../public/css/font-awesome.min.css'
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'

import '../public/css/style.css'


// import '../public/css/animate.css'
// import '../public/css/bootstrap-toggle.min.css'
// import '../public/css/custom.css'
// import '../public/css/jquery-ui.css'
// import '../public/css/meanmenu.min.css'
// import '../public/css/owl.carousel.css'
// import '../public/css/responsive.css'
// import '../public/css/slick.css'
// import '../public/css/venobox.css'

// import '../public/js/vendor/jquery-1.12.3.min'


import PropTypes from 'prop-types'
import TopNav from '../components/TopNav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

