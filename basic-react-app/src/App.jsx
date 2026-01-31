import './App.css';
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MessageBox from './MessageBox.jsx';

function App() {
  return (
    <>
      <MessageBox userName = "Soumya" textColor = "red"/>
      <ProductTab/>
    </>
  );
}

export default App;
