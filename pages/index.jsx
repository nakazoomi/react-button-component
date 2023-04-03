import Button from '../components/BtnComponent';

export default function Home() {
  return (
    <>
    
      <main>
        <h1>Reusable Button Component in React.js</h1>

        <div className="btn__wrapper">

        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>

      <Button variant="success">Success Button</Button>
      <Button variant="warning">Warning Button</Button>

      <Button size="small">Small Button</Button>
          <Button size="large">Large Button</Button>
   
        </div>
      </main>
    </>
  );
}
