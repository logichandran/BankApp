import React from 'react'
import '../Prepaid/Prepaid.css'
import bgvideo from '../../video/count cash.mp4'
import Header from '../Header/Header'

const PrepaidCard = () => 
{
  return (
      <div className="main3">
          <Header />
            <video src={bgvideo} className="video3" autoPlay loop muted />
          <div>
              <form className="Table3">
                  <table>
                      <tr><td>Card number:</td><td><input type="number" /></td>
                      </tr>
                      <tr>
                          <td>Password:</td><td><input type="password" /></td>
                      </tr>
                      <tr>
                          <td><button className="t3button">Submit</button></td>
                      </tr>

                  </table>
              </form>
          </div>
          </div>
  )
}

export default PrepaidCard;
