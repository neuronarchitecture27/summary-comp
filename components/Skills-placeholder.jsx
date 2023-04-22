import Image from 'next/image';
import styles from '@/styles/Main.module.css'
import Iconmemory from "../assets/images/icon-memory.svg";
import Iconreaction from "../assets/images/reaction2.svg";
import Iconverbal from "../assets/images/icon-verbal.svg";
import Iconvisual from "../assets/images/icon-visual.svg";



function SkillsPlaceholder() {
 const nbPH = [
    {
     style: styles.reaction, 
     title: "Reaction",
     icon: Iconreaction,
     score: "78 / 100"
    }, 

    {
     style: styles.memory,
     title: "Memory",
     icon: Iconmemory,
     score: "85 / 100"
    }, 

    {
     style:styles.verbal,
     title: "Verbal",
     icon: Iconverbal,
     score: "60 / 100"
    }, 

    {
     style: styles.visual,
     title: "Visual",
     icon: Iconvisual,
     score: "90 / 100"
    }]


  return <div className={styles.wrapper_skills}>
    {nbPH.map((item)=> (
    <div className={[item.style, styles.wrapper_pb].join(" ")} key={item}> 
    <div className={styles.iconHolder}>
    <Image 
        src={item.icon}
        height={20}
        width={20}
        alt='reactionIcon'
    />
        <h4 className={item.style}>
            {item.title}
        </h4>
    </div>
 
        <div style={{color: 'black', fontFamily: "HankenGrotesk", fontWeight: 700}}>
        {item.score}
        </div>
        
     </div>
    ))}
  </div>
  


}

export default SkillsPlaceholder
