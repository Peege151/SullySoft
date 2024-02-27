import React from 'react'
import { StyleSheet, css } from 'aphrodite';


const members = [
    {
        name: 'Patrick Sullivan',
    },
    {
        name: 'Kirk Sullivan',
    },
    {
        name: 'José Emilio Figueroa',
    }
]

export default function Team() {
  const generateTeamTsx = () => {
    return members.map((member, i) => {
        return (
            <div className={css(styles.memberWrap)}> 
                <div className={css(styles.photo)}>  </div>
                <div className={css(styles.name)}> { member.name } </div>
            </div>
        )
    })
  }
  const team = generateTeamTsx();
  return (
    <div className={css(styles.container)}>
        <div className={css(styles.header)}> Team </div>
        <div className={css(styles.teamWrapper)}> 
            { team }
         </div>
    </div>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column' as any,
        padding: '50px',
        '@media (max-width: 940px)': {
            padding: 0,
          }
    },
    teamWrapper: {
      display: 'flex',
      width: '80%',
      margin: '0 auto',
      justifyContent: 'space-between',
      '@media (max-width: 940px)': {
        backgroundColor: 'red',
        margin: 0,
        width: '100%',  
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }
    },
    header: {
      textAlign: 'center' as any,
      width: '100%',
      marginBottom: 20,
    },
    memberWrap: {
      display: 'flex',
      flexDirection: 'column' as any,
      padding: 20,
    },
    photo: {
      height: '200px',
      width: '200px',
      borderRadius: '100px',
      backgroundColor: 'black',
    },  
    name: {
      textAlign: 'center' as any,
      marginTop: 30,
    },
})