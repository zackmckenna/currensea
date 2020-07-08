import FixerCell from 'src/components/FixerCell'
import BasicLayout from 'src/layouts/BasicLayout'

const HomePage = () => {
  return (
    <div>
      <BasicLayout>
        <h1>HomePage</h1>
        <FixerCell data={'test'} />
        <p>Find me in ./web/src/pages/HomePage/HomePage.js</p>
      </BasicLayout>
    </div>
  )
}

export default HomePage
