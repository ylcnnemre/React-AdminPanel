import React,{useState} from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,Area,AreaChart } from 'recharts';

const Chart = ({title,data,dataKey,grid}) => {
    const [show,Setshow]=useState(true)




    return (
        <>
        
        <div className="chart">
            <div className="chart-top">
            <h3 className="charTitle">
               {title}
            </h3>
            <div className="chart-top-buttons">
            <button className={["line","asd"].join(" ")} onClick={()=>Setshow(true)}>Line</button>
            <button className="area" onClick={()=>Setshow(false)}>Area</button>
            </div>
            
            </div>
            
            <ResponsiveContainer width="100%" aspect={4/1} className={show ? null : "hide"} >
            <LineChart
    
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <Tooltip/>
          <Line  type="monotone" dataKey={dataKey} stroke="red" activeDot={{r:7}}  />
          {grid && <CartesianGrid stroke="#eee" strokeDasharray="2 2"/> } 
        </LineChart>
            </ResponsiveContainer>



        <ResponsiveContainer width="100%" aspect={4/1} className={show ? "hide" :null}>
        <AreaChart
      
          width={200}
          height={60}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
            <XAxis dataKey="name"/>
            <Tooltip/>
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </div>

       
        </>
    )
}

export default Chart
