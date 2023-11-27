import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'
import SavingsIcon from '@mui/icons-material/Savings';
import ReceiptIcon from '@mui/icons-material/Receipt';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import Footer from '../Footer/Footer';
import { Carousel } from 'react-bootstrap';
import p1 from '../../img/p1.jpg';
import p2 from '../../img/p2.jpg';
import p3 from '../../img/p3.jpg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'


const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
}));
function Home () 
{
  return (
    <>
    <motion.div className='BaCk'
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth,transition:{duration:0.1}}}
    >
      <Header/>
      <br/><br/>
      <div class="l2">
        <div class="l1">
        <Carousel data-bs-theme="dark" interval={1000}>
            <Carousel.Item>
              <img src={p3} alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img src={p2} alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img src={p1} alt="Third slide"
              />
            </Carousel.Item>
        </Carousel>
        </div>
        <div class="l3">
        <div >
          <Stack direction="row" spacing={2} >
            <Link to="/credit"><DemoPaper class="demopaper" square={false}><br></br><CreditCardIcon /><br></br><p>Credit card portal</p></DemoPaper></Link>
            <Link to="/prepaid"><DemoPaper class="demopaper" square={false}><br></br><CardGiftcardIcon /><br></br><p>Prepaid card portal</p></DemoPaper></Link>
            <Link to="/debit"><DemoPaper class="demopaper" square={false}><br></br><CreditCardIcon /><br></br><p>Debit card portal</p></DemoPaper></Link>
          </Stack>
        </div>
        <pre>    </pre>
        <div>
        <Stack direction="row" spacing={2}>
        <Link to="/fixed"><DemoPaper class="demopaper" square={false}><br></br><SavingsIcon /><br></br><p>Fixed deposit</p></DemoPaper></Link>
        <Link to="/receipt"><DemoPaper class="demopaper" square={false}><br></br><ReceiptIcon /><br></br><p>Receipt</p></DemoPaper></Link>
        <Link to="/netbanking"><DemoPaper class="demopaper" square={false}><br></br><OnlinePredictionIcon /><br></br><p>Net Banking Login</p></DemoPaper></Link>
          </Stack>
        </div>
        </div>
      </div>
      <br/>
      <div class="uselink">
          <center>
            <p>Numbers that might be useful</p>
          </center>
      </div>
      <div class="links">
			
			
						<div class="links_a1">
							<p >Give a missed call</p>
							<h4 >084679xxxxx</h4>
							<p >To Block ATM/Debit Card</p>
						</div>
					
					
						<div class="links_a1">
							<p >Toll Free Customer Care</p>
							<h4 >1800-419-xxxx</h4>
							<p >To Block Credit Card</p>
						</div>
					
						<div class="links_a1">
							<p >Give a missed call</p>
							<h4 >092119xxxxx</h4>
							<p >Get Your Balances</p>
						</div>
					
						<div class="links_a1">
							<p >Give a missed call</p>
							<h4 >093119xxxxx</h4>
							<p >Get Your Last 5 Transactions</p>
						</div>
					
						<div class="links_a1">
							<p >Send "Hi" from WhatsApp to</p>
							<h4 >92821xxxxx</h4>
							<p >Get Your Bank Transactions</p>
						</div>
					
						<div class="links_a1">
							<p >Send SMS 'DISABLE &lt;user id&gt;' to </p>
							<h4> 93821xxxxx</h4>
							<p >Disable Netbanking</p>
						</div>
				
		</div>
    <br/>

    </motion.div>
      <Footer/>
      </>
  )
}

export default Home