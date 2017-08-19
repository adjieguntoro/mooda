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
                Terima kasih sudah mendaftar <br/>
                Kamu berkesempatan untuk menjadi orang pertama yang
                diberitahukan ketika Mooda siap untuk kamu gunakan. Kami akan mengirimkan kabar baik selanjutnya
                melalui alamat email yang kamu daftarkan. <Link to='/'
                      className=' is-info'>
                      Kembali Ke Home
                    </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ThankyouPage
