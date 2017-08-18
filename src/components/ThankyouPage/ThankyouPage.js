import React, { Component } from 'react'
import { Link } from 'react-router'
import './ThankyouPage.scss'

class ThankyouPage extends Component {

  render () {
    return (
      <div className='container register-form'>
        <div className='columns'>
          <div className='column is-4 is-offset-4'>
            <div>
              <article className='message is-success'>
                <div className='message-body'>
                Terima kasih Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum exercitationem, minima alias iure, commodi enim a qui eligendi
                voluptate provident nihil quae maiores vel eveniet magnam, unde reprehenderit dolore in!
                </div>
              </article>
              <div className='columns'>
                <div className='column is-3'>
                  <div className='control'>
                    <Link to='/'
                      className='button is-info'>
                      Kembali Ke Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ThankyouPage
