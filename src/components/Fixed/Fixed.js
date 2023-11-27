import React from 'react'
import '../Fixed/Fixed.css'
import bgvideo from '../../video/count cash.mp4'
import Header from '../Header/Header'

const FixedDeposit = () => {
  return (
      <div className="main4">
          <Header />
            <video src={bgvideo} className="video4" autoPlay loop muted />
          <div>
              <form className="Table4">
                  <table>
                      <tr><td>Account number:</td><td><input type="number" /></td>
                      </tr>
                      <tr>
                          <td>Transaction-amount:</td><td><input type="number" /></td>
                      </tr>
                      <tr>
                          <td><button className="t4button">Submit</button></td>
                      </tr>

                  </table>
              </form>
          </div>
          </div>
  )
}

export default FixedDeposit;
