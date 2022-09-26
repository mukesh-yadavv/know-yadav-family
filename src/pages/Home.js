import familyPic from './pics/family.jpg';


export default function Home() {
  return <div>
    <h1>Welcome to Yadav's Family HomePage.</h1>
    <img 
      src={familyPic} 
      alt="Yadav Family" 
      style={{ borderColor: 'black' }} 
    />
  </div>
}
