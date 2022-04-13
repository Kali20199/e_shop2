import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Alert, Button, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle, useSharedValue, withSpring,
    withTiming, timing, useDerivedValue, interpolate
} from 'react-native-reanimated';

const height = Dimensions.get('window').height

const Reanimated = () => {

    const offset = useSharedValue(0);
    const opacity = useSharedValue(0);
    const width2 = useSharedValue(0);
    const padding = useSharedValue(0);
    const tranlate = useSharedValue(0);



    const progress = useSharedValue(0);
    const width = useDerivedValue(() => {
        return progress.value * 250;
    });



    const animatedStyles = useAnimatedStyle(() => {
        // if (offset.value > 500) {
        //     return { height: offset.value }
        // }
        return {
            // transform: [{ translateX: offset.value * 255 }],
            // height: offset.value += 1,
            height: interpolate(offset.value, [1, 100], [200, 600]),
            // width: withSpring(width2.value += 1),
            // opacity: withSpring(opacity.value += 0.02),
            // opacity: withSpring(opacity.value += 0.02),
            // padding: withSpring(padding.value += 0.1),
            // transform: [{ translateX: tranlate.value += 0.1 }],

        };
    }, [offset.value == 10]);



    return (
        <SafeAreaView>
            {/* <View style={styles.box} width={width} /> */}
            <Button onPress={() => (progress.value = Math.random())} title='Click' />

            <View style={styles.MainView}>
                <Animated.View style={[styles.box, animatedStyles,]} /></View>
            <Button onPress={() => offset.value = 10} title="Move" />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    MainView: {


        height: height,
        justifyContent: 'flex-end',

    },
    footer: {
        color: 'black',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        height: 1500,
    },
    box: {

        height: 170,
        width: 100,
        backgroundColor: 'blue',
        opacity: 0.5
    }
});


export default Reanimated