import {Component} from 'react'

import './App.css'

const BlogList = [
  {
    author: 'Wade Warren',
    title: 'Rang',
    fullView: false,
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    author: 'Adrian Williams',
    title: 'WheelO',
    fullView: false,
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    author: 'Sherry Johnson',
    title: 'MedX',
    fullView: false,
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    author: 'Ronald Jones',
    title: 'Infinos Tech',
    fullView: false,
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class App extends Component {
  state = {initialList: BlogList}

  readLess = event => {
    const name = event.target.value
    console.log(name)
    const {initialList} = this.state
    const newList = initialList.map(each => {
      if (each.title === name) {
        return {...each, fullView: false}
      }
      return each
    })
    this.setState({
      initialList: newList,
    })
  }

  readMore = event => {
    const name = event.target.value
    console.log(name)
    const {initialList} = this.state
    const newList = initialList.map(each => {
      if (each.title === name) {
        return {...each, fullView: true}
      }
      return each
    })
    this.setState({
      initialList: newList,
    })
  }

  render() {
    const {initialList} = this.state
    console.log(initialList)

    const blogDetails = initialList.map(each => (
      <div key={each.author} className="blogDetailsContainer">
        <h1>Title:{each.title}</h1>
        <h3>Author:{each.author}</h3>
        {each.fullView ? <p>{each.description}</p> : ''}
        {each.fullView ? (
          <button type="button" onClick={this.readLess} value={each.title}>
            readLess
          </button>
        ) : (
          <button type="button" onClick={this.readMore} value={each.title}>
            readMore
          </button>
        )}
      </div>
    ))
    return <div>{blogDetails}</div>
  }
}

export default App
