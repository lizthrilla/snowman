import React, { Component } from 'react'
import _ from 'lodash'
import LetterButton from './LetterButton'
import Snowman from './Snowman'
import Word from './Word'

// ALPHABET is an array of 26 letters, 'a' through 'z', i.e. ['a', 'b', 'c', ...'z']
const ALPHABET = _.range(26).map(i => String.fromCharCode(i + 97))

// WORDS is an array of 1024 different seven letter words
const WORDS = require('raw!../wordList.txt').trim().split('\n')
// \n = new line in a string

class App extends Component {

  constructor () {
    super()
    // TODO
    this.state = {
      word: _.sample(WORDS),
      guesses: []
    }
  }

  choose (letter) {
    this.setState({
      guesses: [...this.state.guesses, letter]
      // takes guesses array and adds letter to the existing guesses.  Jason's preferred method over concat.  USE FOR TIC TAC TOE TOO
    })
    console.log('You clicked', letter)
  }

  get points () {
    // TODO
    return 0
  }

  render () {
    const letters = ALPHABET.map((letter, i) => {
      return <LetterButton
        value={letter}
        onChoose={() => this.choose(letter)}
        disabled={this.state.guesses.includes(letter)}
        key={i} />
        // fix disabled
    })

    return <div className='app'>
      <main>
        <Snowman step={this.points} size={400} />
        {/* TODO */}
        <Word value={this.state.word} guesses={this.state.guesses} />
        <div className='keyboard'>
          {letters}
        </div>
      </main>
      <footer>It's like hangman, but, um... backwards or something.</footer>
    </div>
  }
}

export default App
