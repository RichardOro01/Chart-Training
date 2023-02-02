
import './App.css';
// import Estado from "./components/Estado.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

import AreaChart from './components/charts/AreaChart';
import BubbleChart from './components/charts/BubbleChart';
import ChartEvents from './components/charts/ChartEvents';
import CharRef from './components/charts/ChartRef';
import DoughnutChart from './components/charts/DoughnutChart';
import GradientChart from './components/charts/GradientChart';
import GroupedBarChart from './components/charts/GroupedBarChart';
import HorizontalBarChart from './components/charts/HorizantalBarChart';
import LineChart from './components/charts/LineChart';
import MultiaxisLineChart from './components/charts/MultiaxisLineChart';
import MultiTypeChart from './components/charts/MultiTypeChart';
import PieChart from './components/charts/PieChart';
import PolarAreaChart from './components/charts/PolarAreaChart';
import RadarChart from './components/charts/RadarChart';
import ScatterChart from './components/charts/ScatterChart';
import StackedBarChart from './components/charts/StackedBarChart';
import VerticalBarChart from './components/charts/VerticalBarChart';

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<VerticalBarChart/>}/>
          <Route path='area' element={<AreaChart/>}/>
          <Route path='bubble' element={<BubbleChart/>}/>
          <Route path='events' element={<ChartEvents/>}/>
          <Route path='ref' element={<CharRef/>}/>
          <Route path='doughnut' element={<DoughnutChart/>}/>
          <Route path='gradient' element={<GradientChart/>}/>
          <Route path='grouped' element={<GroupedBarChart/>}/>
          <Route path='horizontal' element={<HorizontalBarChart/>}/>
          <Route path='line' element={<LineChart/>}/>
          <Route path='multiaxis' element={<MultiaxisLineChart/>}/>
          <Route path='multitype' element={<MultiTypeChart/>}/>
          <Route path='pie' element={<PieChart/>}/>
          <Route path='polar' element={<PolarAreaChart/>}/>
          <Route path='radar' element={<RadarChart/>}/>
          <Route path='scatter' element={<ScatterChart/>}/>
          <Route path='stacked' element={<StackedBarChart/>}/>
        </Route>
        
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
