import React from 'react'
import image1 from '../../assets/global_reach/image1.png'
import image2 from '../../assets/global_reach/image2.png'
import image3 from '../../assets/global_reach/image3.png'
import image4 from '../../assets/global_reach/image4.png'
import image5 from '../../assets/global_reach/image5.png'
import image6 from '../../assets/global_reach/image6.png'
import tick from '../../assets/global_reach/tick.svg'
import styles from './Global.module.css'

export const Global = () => {

    return (
        <div className={styles.container}>

            <div className={styles.section_1}>
                <div className={styles.content}>
                    <h1>Global Reach</h1>
                    <h5>Online & digital businesses are amazing.</h5>
                    <ul>
                        <li>Offer a Better user experience</li>
                        <li>Have High growth</li>
                        <li>Are Very Scalable</li>
                        <li>Have Global reach</li>
                    </ul>
                    <h5>We help people companies reach a mass audience.</h5>
                </div>
            </div>

            <div className={styles.section_2}>
                <div className={styles.img_container}>
                    <div className="parallax">

                    <img src={image1} alt="vector" />
                    <img src={image2} alt="vector" />
                    <img src={image3} alt="vector" />
                    <img src={image4} alt="vector" />
                    <img src={image5} alt="vector" />
                    <img src={image6} alt="vector" />
                    </div>
                </div>
            </div>

        </div>
    )
}