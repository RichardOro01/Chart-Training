import React from 'react';
import { Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';

const pages:string[] = [
        '',
          'bubble',
          'events',
          'ref',
          'doughnut',
         'gradient',
          'grouped',
          'horizontal',
          'line',
          'multiaxis',
          'multitype',
          'pie',
          'polar',
          'radar',
          'scatter',
          'stacked',
]





const App: React.FC = () =>{
    const navigate = useNavigate();
    const handleChange = (page:number) => {
        navigate(pages[page-1]);
    }   
    return <Pagination defaultCurrent={1} total={160} onChange={handleChange}/>;
} 

export default App;