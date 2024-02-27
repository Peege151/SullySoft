import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const GAMES_DEPT = 'Games Division';
const WEB_DEPT = 'Web Application Division'
const news = [
    {   
        key: 0,
        dept: GAMES_DEPT,
        desc: 'Scribe VR Release Q2 2024',
        image:  "url('scribe1.png')", 
        call: 'View',
    },
    {
        key: 1,
        dept: GAMES_DEPT,
        desc: 'Scribe Mobile Release Q2 2024',
        image:  "url('scribe1.png')", 
        call: 'View',
    },
    {
        key: 2,
        dept: WEB_DEPT,
        desc: 'Producer Hub Live',
        image:  "url('scribe1.png')", 
        call: 'Check It Out',
    },
    {
        key: 3,
        dept: WEB_DEPT,
        desc: 'Remorás Consulting',
        image:  "url('agave.avif')", 
        call: 'Check It Out',
    }
]

function Masthead() {
    let [item, setItem] = useState(news[0]);

    const generateDots =() => {
        return news.map((obj, i) => {
            return <div className={css(i == item.key ? styles.active : styles.dots)} onClick={() => setItem(news[i])}></div>
        })
    }
    let dots = generateDots();
    return (
        <div className={css(styles.container)}> 
            <div className={css(Object.assign({}, styles.mastleft))} style={{backgroundImage: item.image}}></div>
            <div className={css(styles.mastright)}> 
                <div className={css(styles.dept)}>{item.dept}</div>
                <div className={css(styles.desc)}>{item.desc}</div>
                <div className={css(styles.call)}>{item.call}</div>
                <div className={css(styles.bottomNav)}> {dots} </div>
            </div>
         </div>
    );
  }
  const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        '@media (max-width: 940px)': {
            flexDirection: 'column',
        }
    },
    call: {
        marginTop: 50,
        border: '1px solid black',
        borderRadius: '5px', 
        height: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 940px)': {
            marginTop: '20px',
        }
    },
    dept: {
        marginTop: 20,
        fontFamily: 'Coral'
    },
    desc: {
        fontSize: '36px',
    },
    mastright: {
        padding: '50px',
        position: 'relative' as any,
        display: 'flex',
        flexDirection: 'column' as any,
        width: '40%',
        border: '1px solid #dfdfdf',
        borderLeft: 'none',
        '@media (max-width: 940px)': {
            width: '100%',
            padding: '20px',

        }
    },
    mastleft: {
        position: 'relative' as any,
        height: '70vh',
        width: '60%',
        backgroundPosition:'center bottom',
        '@media (max-width: 940px)': {
            width: '100%',
            height: '50vh'
        }
    },
    bottomNav: {
        marginTop: 'auto',
        display: 'flex',
        flexDirection: 'row' as any,
        '@media (max-width: 940px)': {
            marginTop: '20px',
        }
    },
    dots: {
        height: '10px',
        backgroundColor: 'black',
        width: '75px',
        marginRight: '20px',
        borderRadius: '5px',

    },
    active: {
        backgroundColor: 'green',
        width: '75px',
        marginRight: '20px',
        borderRadius: '5px',
        height: '10px'
    },
    tagline: {
        fontFamily: 'coral'
    },
})
export default Masthead;