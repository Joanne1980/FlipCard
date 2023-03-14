import Row from './Row';
import { useEffect } from 'react';



export default function Grid() {
  useEffect(() => {
    window.addEventListener('keypress', e => {
      console.log(e.key)
    });
  }, []);
  return (
    <div className='flex flex-col'>
      
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />

    </div>
  )
}
