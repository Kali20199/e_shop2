import React from 'react'
import { View, Text } from 'react-native'
import { useStore } from '../../../store/store'

function GaneDetails() {
    const { CategoryStore: { getCategoryType, selectedGameCategory } } = useStore()
    return (
        <View>

        </View>

    )
}

export default GaneDetails