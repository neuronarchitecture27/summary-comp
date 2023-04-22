// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Main.module.css'
import SkillsPlaceholder  from '../../components/Skills-placeholder'

export default function Home() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
          <div className={styles.score}>
          <h4 style={{color: "#c5bfee", fontFamily: "HankenGrotesk-Bold", fontSize: "20px"}}>
              Your Result
            </h4>
            <div className={[styles.p, styles.rating].join(' ')}>
              <div style={{fontSize: "55px"}}>76</div> out of 100
            </div>

            <h2 style={{color:"white", fontFamily: "HankenGrotesk-Bold", fontSize: "30px", marginBottom: "7%"}}>
              Great
            </h2>
            <p className={[styles.p, styles.description].join(" ")} >
              You scored higher than 65% of the people who have taken these tests.
            </p>
          </div>
          <div >
            <div className={styles.container__summary}>
              <h3>Summary</h3>
                <SkillsPlaceholder />
                <button className={styles.continueBtn}>Continue</button>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}
