import familyPic from './pics/family.jpg';
import yadav_family from './pics/yadav_family.jpg';


export default function Home() {
  return <div style={{ textAlign: 'center' }}>
    {/* */}
    <h1>Welcome to Yadav's Family HomePage.</h1>
      <div className="item">
          <img 
            src={familyPic} 
            alt="Yadav Family" 
            style={{ borderColor: 'black' }} />
      </div>      
      <div className="item">
        <img
          src={yadav_family}
          alt="Yadav Family"
          style={{ borderColor: 'black' }}
        />
      </div>
  </div>
}
