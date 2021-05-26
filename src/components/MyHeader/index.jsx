import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

function MyHeader({username}) {
	return (
		<View style={styles.containerHorizontal}>
			<Text style={styles.textHeader}>Olá, {username}</Text>
			<TouchableOpacity style={styles.touchable}>
				<Feather name='eye-off' size={24} style={styles.touchableIcon} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.touchable}>
				<Feather name='settings' size={24} style={styles.touchableIcon} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	containerHorizontal: {
		marginTop: 80,
		flexDirection: 'row',
		alignItems: 'center',
	},
	textHeader: {
		color: '#fff',
		fontSize: 24,
		fontWeight: '700',
		flex: 1,
	},
	touchable: {
		backgroundColor: '#A240BE',
		borderColor: '#A240BE',
		borderWidth: 1,
		borderRadius: 50,
		margin: 4,
		padding: 8,
	},
	touchableIcon: {
		color: 'rgba(255,255,255,0.7)',
	},
})

export default MyHeader