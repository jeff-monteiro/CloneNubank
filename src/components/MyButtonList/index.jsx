import React from 'react'
import {ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

function MyButtonList(props) {
	const {data = []} = props
	return (
		<ScrollView style={styles.scrollView} horizontal showsHorizontalScrollIndicator={false}>
			{data.map(({icon, label}, i) => (
				<TouchableOpacity style={styles.touchable} key={i}>
					<Feather name={icon} size={24} style={styles.icon} />
					<Text style={styles.text}>{label}</Text>
				</TouchableOpacity>
			))}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollView: {
		maxHeight: 120,
	},
	touchable: {
		backgroundColor: '#A240BE',
		borderColor: '#A240BE',
		borderWidth: 1,
		height: 120,
		width: 100,
		padding: 16,
		justifyContent: 'space-between',
		marginRight: 4,
	},
	icon: {
		color: '#fff',
	},
	text: {
		color: '#fff',
	},
})

export default MyButtonList