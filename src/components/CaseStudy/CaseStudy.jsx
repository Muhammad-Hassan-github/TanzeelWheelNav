import React from 'react'
import styles from './CaseStudy.module.css'
import {Fade} from 'react-reveal'

export const CaseStudy = ({ imgUrl, imgOrder, textOrder, title, text }) => {

    return (
        <div className={styles.container}>
            <div className={styles.img_container} style={{ order: imgOrder }}>
                <img src={imgUrl} alt="vector" />
            </div>
            <div className={styles.text} style={{ order: textOrder }}>
                <Fade bottom>
                    <h1>{title}</h1>
                </Fade>
                <Fade bottom>
                    <p>{text}</p>
                </Fade>
            </div>
        </div>
    )
}