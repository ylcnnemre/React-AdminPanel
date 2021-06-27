import React from 'react'
import "./WidgetLg.css"
const WidgetLg = () => {
    const Button=({type})=>{
        return <button className={"widgetLgButton" +" " + type}>
             {
                 type
             }
        </button>
    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">
                Latest transactions
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">
                        Customer
                    </th>
                    <th className="widgetLgTh">
                        Date
                    </th>
                    <th className="widgetLgTh">
                        Amount
                    </th>
                    <th className="widgetLgTh">
                        Status
                    </th>
                   
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://netresim.com/bilesenler/dosya/dosyalar/image/galeriler/16.03.2018/oresim/Full-HD-Berrak-Gol-Ve-Harika-1920-X-1080-Manzara-Resmi.jpg" className="widgetLgImg" alt="" />
                        <span className="widgetLgName">
                            frank lampard
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 JUN 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">

                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://netresim.com/bilesenler/dosya/dosyalar/image/galeriler/16.03.2018/oresim/Full-HD-Berrak-Gol-Ve-Harika-1920-X-1080-Manzara-Resmi.jpg" className="widgetLgImg" alt="" />
                        <span className="widgetLgName">
                            frank lampard
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 JUN 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">

                        <Button type="Decline" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://netresim.com/bilesenler/dosya/dosyalar/image/galeriler/16.03.2018/oresim/Full-HD-Berrak-Gol-Ve-Harika-1920-X-1080-Manzara-Resmi.jpg" className="widgetLgImg" alt="" />
                        <span className="widgetLgName">
                            frank lampard
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 JUN 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">

                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://netresim.com/bilesenler/dosya/dosyalar/image/galeriler/16.03.2018/oresim/Full-HD-Berrak-Gol-Ve-Harika-1920-X-1080-Manzara-Resmi.jpg" className="widgetLgImg" alt="" />
                        <span className="widgetLgName">
                            frank lampard
                        </span>
                    </td>
                    <td className="widgetLgDate">
                        2 JUN 2021
                    </td>
                    <td className="widgetLgAmount">
                        $122.00
                    </td>
                    <td className="widgetLgStatus">

                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WidgetLg
