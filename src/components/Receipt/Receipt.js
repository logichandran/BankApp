import React from 'react'
import '../Receipt/Receipt.css'
import bgvideo from '../../video/count cash.mp4'
import Header from '../Header/Header'

const Receipt = () => {
  return (
      <div className="main5">
          <Header />
            <video src={bgvideo} className="video5" autoPlay loop muted />
          <div>
              <form className="Table5">
                  <table>
                      <tr><td>Username:</td><td><input type="text" /></td>
                      </tr>
                      <tr>
                          <td>Password:</td><td><input type="password" /></td>
                      </tr>
                      <tr><td>Account number:</td><td><input type="number" /></td>
                      </tr>
                      <tr>
                          <td><button className="t5button">Submit</button></td>
                      </tr>

                  </table>
              </form>
          </div>
          </div>
  )
}

export default Receipt;
