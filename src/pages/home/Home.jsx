import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./Home.css"
import Chart from "../../components/chart/Chart"
import {data} from "../../dummyData"
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'
const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={data} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
       
        </div>
    )
}

export default Home
