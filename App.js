import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import MyHeader from './src/components/MyHeader'
import MyCard from './src/components/MyCard'
import MyButtonList from './src/components/MyButtonList'

const buttons = [
    {icon: 'box', label: 'Pix'},
    {icon: 'align-justify', label: 'Pagar'},
    {icon: 'user', label: 'Indicar amigos'},
    {icon: 'award', label: 'Transferir'},
]

function App(props) {
	return (
		<View style={styles.container}>
			<MyHeader username='Jefferson' />
			<ScrollView>
				<MyCard
					icon='credit-card'
					title='Cartão de crédito'
					subTitle='Fatura atual'
					content='R$ 0,00'
					subContent='Limite disponível'
				/>
				<MyCard icon='award' title='Conta' subTitle='Saldo disponível' content='R$ 0,00' />
				<MyCard
					icon='award'
					title='Pix'
					content='Transferir usando o Pix'
					subContent='Pague e receba em tempo real, sem custo e para qualquer banco'
				/>
			</ScrollView>
			<MyButtonList data={buttons} />
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BB14AE',
    padding: 24,
  },
});

export default App
  

