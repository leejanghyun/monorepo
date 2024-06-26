import HomePage from '@/features/HomePage'

const pageInitialProps = async () => {
  return {
    props: {
      title: 'Home Page',
    },
  }
}

export const getServerSideProps = pageInitialProps

export default HomePage
