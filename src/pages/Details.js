import papa from "./pics/papa.JPG";
import mummy from './pics/mummy.jpg';
import suman3 from './pics/suman3.PNG'
import pintoo from './pics/pintoo.png';
import eshita2 from './pics/eshita2.PNG';
import sunita_family_2 from './pics/sunita_family_2.jpg';
import atul from './pics/atul.JPG';
import ashmit from './pics/ashmit.jpg';
import mukesh from './pics/mukesh.jpg';
import sharmila from './pics/sharmila.jpg';
import aarav2 from './pics/aarav2.jpg';
import dinesh_family from './pics/dinesh_family.jpg';
import swati from './pics/swati.jpg';
import mrinank from './pics/mrinank.JPG';

import './app.css'
import './styles.css'

export default function About() {
  return <div>
    <h2>Please hover on each image to see the details about the family member.</h2> 
    <div class="wrapper">
      <div className="container">    
          <img src={papa} alt="Papa" className="image"></img>
            <div className="middle">
              <div className="text">
                <h2>Sube Singh Yadav</h2>
                <p><b>DOB:</b> 13-Jun-1950</p>
                <p><b>Education:</b> MA[English, History]</p>
                <p><b>Occupation:</b> Retired School Principal</p>
                <p><b>Interests:</b> Listening to Radio, exercising daily, minimalist life.</p>
              </div>
            </div>
      </div>
      <div className="container">        
        <img src={mummy} alt="Mummy" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Meena Yadav</h2>
              <p><b>DOB:</b> 14-07-1954</p>
              <p><b>Education:</b> Primary School</p>
              <p><b>Occupation:</b> HouseWife</p>
              <p><b>Interests:</b> Watching TV, cooking, chinese food.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={suman3} alt="Suman" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Suman Yadav</h2>
              <p><b>DOB:</b> 14-02-1973</p>
              <p><b>Education:</b> MA(History), B.Ed</p>
              <p><b>Occupation:</b> Principal, Govt School, Delhi</p>
              <p><b>Interests:</b> Cooking, gardening, teaching.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={pintoo} alt="Pintoo" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Pintoo Yadav</h2>
              <p><b>DOB:</b> 22-02-1971</p>
              <p><b>Education:</b> MBA(Marketing)</p>
              <p><b>Occupation:</b> Reginal Head(North), Lupin India</p>
              <p><b>Interests:</b> Travelling, gardening, cricket.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={eshita2} alt="Eshita" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Eshita Yadav</h2>
              <p><b>DOB:</b> 22-12-1999</p>
              <p><b>Education:</b> B.Tech(CSE), DTU</p>
              <p><b>Occupation:</b> Software Engineer(Zomato)</p>
              <p><b>Interests:</b> Travelling, athletics, watching web-series.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={eshita2} alt="Eshaan" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Eshaan Yadav</h2>
              <p><b>DOB:</b> 23-07-2001</p>
              <p><b>Education:</b> Final Year Student at Delhi Technological University(DTU)</p>
              <p><b>Occupation:</b> Student</p>
              <p><b>Interests:</b> Software Programming, travelling, gadgets.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={sunita_family_2} alt="Sunita" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Sunita Yadav</h2>
              <p><b>DOB:</b> 08-03-1976</p>
              <p><b>Education:</b> M.Sc, B.Ed, M.Phil(Physics)</p>
              <p><b>Occupation:</b> Assistant Professor(Physics), Daman</p>
              <p><b>Interests:</b> Meeting new people, outdoor activities, cooking, cycling.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={atul} alt="Atul" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Atul Singh</h2>
              <p><b>DOB:</b> 30-01-1973</p>
              <p><b>Education:</b> B.Tech(AMU), EPBM(IIM Kolkata)</p>
              <p><b>Occupation:</b> Vice President, Suzlon Energy</p>
              <p><b>Interests:</b> Spritualism, meditation, BrahmKumaris, travelling.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={ashmit} alt="Ashmit" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Ashmit Singh</h2>
              <p><b>DOB:</b> 08-11-2001</p>
              <p><b>Education:</b> B.Tech Final Year(IIT Delhi)</p>
              <p><b>Occupation:</b> Student</p>
              <p><b>Interests:</b> Travelling, Basketball, Badmintion, TableTennis.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={mukesh} alt="Mukesh" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Mukesh Yadav</h2>
              <p><b>DOB:</b> 29-10-1978</p>
              <p><b>Education:</b> M.Tech(CSE), NIT Kurukshetra</p>
              <p><b>Occupation:</b> Solutions Consultant(IT)</p>
              <p><b>Interests:</b> Loves running, cycling, swimming, badminton.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={sharmila} alt="Sharmila" className="image" width="500px" height="600px">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Sharmila Yadav</h2>
              <p><b>DOB:</b> 16-07-1980</p>
              <p><b>Education:</b> P.hd(Chemistry), M.Phil</p>
              <p><b>Occupation:</b> Associate Professor, Delhi University</p>
              <p><b>Interests:</b> Dancing, cooking, chinese food.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={aarav2} alt="Aarav" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Aarav Yadav</h2>
              <p><b>DOB:</b> 01-10-2007</p>
              <p><b>Education:</b> 10th Standard Student</p>
              <p><b>Occupation:</b> Student</p>
              <p><b>Interests:</b> Italian Food, Travelling, urban designing, metro system(around the world).</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={dinesh_family} alt="Dinesh" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Dinesh Yadav</h2>
              <p><b>DOB:</b> 26-09-1980</p>
              <p><b>Education:</b> MBA, B.Tech(NIT Kurukshetra)</p>
              <p><b>Occupation:</b> DGM, Reliance Energy, Delhi</p>
              <p><b>Interests:</b> Watching movies, trying new dishes, cricket.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={swati} alt="Swati" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Swati Yadav</h2>
              <p><b>DOB:</b> 14-07-1984</p>
              <p><b>Education:</b> MBA, B.Ed</p>
              <p><b>Occupation:</b> School Teacher, Delhi</p>
              <p><b>Interests:</b> Travelling, music, reading novels.</p>
            </div>
          </div>
      </div>
      <div className="container">        
        <img src={mrinank} alt="Mrinank" className="image">
          </img>
          <div className="middle">
            <div className="text">
              <h2>Mrinank Yadav</h2>
              <p><b>DOB:</b> 15-01-2010</p>
              <p><b>Education:</b> 7th Standard Student</p>
              <p><b>Occupation:</b> Student</p>
              <p><b>Interests:</b> Watching vlogs on tv, music, dancing.</p>
            </div>
          </div>
      </div>

    </div>  
  </div>
}
