import React from 'react'
import '../Debit/Debit.css'
import bgvideo from '../../video/count cash.mp4'
import Header from '../Header/Header'

const DebitCard = () => {
  return (
      <div className="main2">
          <Header />
            <video src={bgvideo} className="video2" autoPlay loop muted />
          <div>
              <form className="Table2">
                  <table>
                      <tr><td>Card number:</td><td><input type="number" /></td>
                      </tr>
                      <tr><td>User-ID:</td><td><input type="number" /></td>
                      </tr>
                      <tr>
                          <td>Password:</td><td><input type="password" /></td>
                      </tr>
                      <tr>
                          <td><button className="t2button">Submit</button></td>
                      </tr>

                  </table>
              </form>
          </div>
          </div>
  )
}

export default DebitCard;
