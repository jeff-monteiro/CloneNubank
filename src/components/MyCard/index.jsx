import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

function MyCard(props) {
	const {icon, title, subTitle, content, subContent} = props
	return (
		<View style={styles.card}>
			<View style={styles.containerHorizontal}>
				<Feather name={icon} size={24} style={[styles.textColor, styles.icon]} />
				<Text style={[styles.textColor, styles.title]}>{title}</Text>
			</View>
			<Text style={[styles.textColor]}>{subTitle}</Text>
			<Text style={[styles.textColor, styles.content]}>{content}</Text>
			<Text style={[styles.textColor]}>{subContent}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		borderRadius: 4,
		padding: 16,
		marginTop: 8,
		marginBottom: 8,
		justifyContent: 'space-around',
		minHeight: 180,
	},
	containerHorizontal: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	textColor: {
		color: '#aeaeae',
		fontWeight: 'bold',
	},
	icon: {
		marginRight: 16,
	},
	title: {
		fontSize: 16,
	},
	content: {
		fontSize: 24,
	},
})

export default MyCard