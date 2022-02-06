import {StyleSheet, Text} from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function Timer() {
    return(
        <CountdownCircleTimer
            isPlaying
            duration={7}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
        >
            {({ remainingTime }) => <Text style={styles.time}>{remainingTime}</Text>}
        </CountdownCircleTimer>

    )
}

const styles = StyleSheet.create({
    time: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }
})
