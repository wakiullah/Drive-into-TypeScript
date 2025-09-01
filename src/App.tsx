
import './App.css'
import InfoCard from './assets/components/card'
import Header from './assets/components/Header'
import reactSvg from './assets/react.svg'

function App() {

  return (
    <>
      <div>
        <Header imageObj={{img:reactSvg,alt:'React Logo'}}>
          Welcome to React
        </Header>
        <InfoCard title='This is Post Title '>
<p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit aut illo! Labore tempore explicabo, libero repellat vero quos quidem itaque excepturi enim iste, animi perspiciatis, consectetur molestiae repudiandae voluptate?</p>
        </InfoCard>
       </div>
    </>
  )
}

export default App
