import React from 'react'
import vector from '../../assets/maintenance/vector.png'
import styles from './Maintenance.module.css'
import Wheel from '../Wheel/wheel.js'
export const Maintenance = () => {
    return (
        <div className={styles.container}>

            <div className={styles.section_1}>
                <h1>Great Apps Built Fast</h1>
                <p>To build an app that fits the market, we build and test often. To build fast with minimum investment we found that it’s best to repeat this loop fast and often:</p>
            </div>

            <div className={styles.section_2}>
                <Wheel/>
            </div>

            <div className={styles.section_3}>
                <div className={styles.text}>
                    <h1>Maintenance</h1>
                    <p>The newly built and tested application is moved to production including data and components transfer while during the next releases only the specific changes will be deployed.</p>
                </div>
            </div>

        </div>
    )
}