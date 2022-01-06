import React from 'react'
import traveler from '../assets/traveler.jpg'
import shipper from '../assets/shipper.png'
import chatsection from '../assets/chat-section.jpg'
import Footer from "../components/Footer";

const Destinations = () => {
  return (
    <>
    <section className='destinations'>
      <h3>How it works</h3>
      <div className='grid'>
        <div>
          <img src={traveler} alt='destination-1' />
          <h3>Travellers</h3>
          <p>
           Post Upcoming trip details.
           List your space up for grabs.
           Search package offers.
           Travel and get paid.
          </p>
        </div>

        <div>
          <img src={shipper} alt='destination-2' />
          <h3>Shippers</h3>
          <p>
            Create a package .
            Find a traveler with space.
            Negitiate carrying offers.
            Arrnge handoffand your get package.

          </p>
        </div>

        <div>
          <img src={chatsection} alt='destination-3' />
          <h3>Chat Section</h3>
          <p>
            There will be a chat section for traveler and shipper to communicate with each other.
          </p>

        </div>
        
      </div>
      
    </section>

<div>
<Footer />
</div>

</>
  )
}

export default Destinations
