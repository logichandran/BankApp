import React from 'react'
import '../Credit/Credit.css'
import bgvideo from '../../video/count cash.mp4'
import Header from '../Header/Header'

const CreditCard = () => {
  return (
      <div className="main1">
          <Header />
            <video src={bgvideo} className="video1" autoPlay loop muted />
          <div>
              <form className="Table1">
                  <table>
                      <tr><td>Card number:</td><td><input type="number" /></td>
                      </tr>
                      <tr><td>User-ID:</td><td><input type="number" /></td>
                      </tr>
                      <tr>
                          <td>Password:</td><td><input type="password" /></td>
                      </tr>
                      <tr>
                          <td><button className="t1button">Submit</button></td>
                      </tr>

                  </table>
              </form>
          </div>
          </div>
  )
}

export default CreditCard;
