import React from 'react'
import '../Netbanking/Netbanking.css'
import bgvideo from '../../video/count cash.mp4'
import Header from '../Header/Header'

const NetBanking = () => {
  return (
      <div className="main6">
          <Header />
            <video src={bgvideo} className="video6" autoPlay loop muted />
          <div>
              <form className="Table6">
                  <table>
                      <tr><td>User-ID:</td><td><input type="number" /></td>
                      </tr>
                      <tr>
                          <td>Password:</td><td><input type="password" /></td>
                      </tr>
                      <tr>
                          <td>Start In:</td>
                          <td>
                            <select>
                                <option>Personal Profile</option>
                                <option>Balance and Transaction</option>
                                <option>Administration</option>
                                <option>Transaction Management</option>
                                <option>Personal Profile</option>
                                <option>Upload Facilities</option>
                            </select>
                            </td>
                      </tr>
                      <tr>
                          <td><button className="t6button">Login</button></td>
                      </tr>

                  </table>
              </form>
          </div>
          </div>
  );
}

export default NetBanking;
