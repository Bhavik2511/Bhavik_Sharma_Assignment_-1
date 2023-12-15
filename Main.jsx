import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Swiper from 'react-native-deck-swiper'




export default function Main() {
    const [index, setindex] = useState(0)

const onSwiped = () =>{
    setindex(index + 1)
}
const cards = [
    { value: 1, backgroundColor: 'lightblue' },
    { value: 2, backgroundColor: 'lightgreen' },
    { value: 3, backgroundColor: 'lightyellow' },
    { value: 4, backgroundColor: 'orange' },
    { value: 5, backgroundColor: '#FF7F7F' },
  ]


  return (
    <View style={styles.container}>
      <Swiper 
      cards={cards}
      cardIndex={index}
        renderCard={(card) =>{
            return( <View style={[styles.card, { backgroundColor: card.backgroundColor }]}>
                <Text style={styles.text}>{card.value}</Text>
                </View>)
        }}
        onSwiped={onSwiped}
        stackSize={5}
        stackScale={3}
        stackSeparation={14}
        overlayLabels={{
            left: {
                title: '×',
                style: {
                  label: {
                    backgroundColor:'red',
                    borderColor: 'red',
                    color:'white',
                    borderWidth: 1,
                    fontSize: 24,
                    // borderRadius: '20%'
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: -20,
                    
                  }
                }
              },
              right: {
                title: '✓',
                style: {
                  label: {
                    backgroundColor:'blue',
                    borderColor:'blue',
                    color: 'white',
                    borderWidth: 1,
                    fontSize: 24
                  },
                  borderRadius: '50%',
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 20
                  }
        }}}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
      },
      card: {
        flex: .8,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: 'black',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'lightblue'
      },
      text: {
        textAlign: "center",
        fontSize: 0,
        backgroundColor: "transparent",
        
      }
})