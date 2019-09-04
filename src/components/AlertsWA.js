import React from 'react'
import './AlertsWA.css'

const AlertsWA = () => {
    return(
        <div className="alerts-wa">
            <h2 className="alerts-title">Alertas de posible lavado de dinero</h2><br />
            <table className="alerts-table">
                <tr>
                    <th>ID CLIENTE</th>
                    <th># CREDITO</th>
                    <th>TRANSACCIÓN</th>
                    <th>FECHA</th>
                </tr>
                <tr>
                    <td>35</td>
                    <td>3399584</td>
                    <td>23</td>
                    <td>01/09/2019</td>
                </tr>
            </table>
        </div>
    )
}

export default AlertsWA