import React from 'react';
import { StatusBar, Text, View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const lista = [
  {
    id: 1,
    nome: "IBIS Styles São Paulo Anhembi",
    estrelas: 2,
    endereco: "Av. Cruzeiro do Sul, 1709 - Santana, São Paulo - SP, 02031-000",
    telefone: "(11) 3336-5400",
    preco: 170,
    imagem: require('./assets/ibis_anhembi.png')
  },
  {
    id: 2,
    nome: "Comfort Ibirapuera",
    estrelas: 3,
    endereco: "Av. Sabiá, 825 - Indianópolis, São Paulo - SP, 04515-001",
    telefone: "(11) 4673-0255",
    preco: 192,
    imagem: require('./assets/comfort_ibira.png')
  },
  {
    id: 3,
    nome: "Blue Tree Premium Morumbi",
    estrelas: 4,
    endereco: "Av. Roque Petroni Júnior, 1000 - Vila Gertrudes, São Paulo - SP,     04707-000",
    telefone: "(11) 5187-1200",
    preco: 260,
    imagem: require('./assets/blue_morumbi.png')
  },
];

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mostrarDetalhes: false,
      hotel: {}
    }
  }

  renderLista(){
    return(
      <View>
        <Text style={styles.title}>Hotéis</Text>
        <FlatList 
          data={lista}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) =>(
            <View style={styles.itemContainer}>
              <TouchableOpacity style={{flexDirection: 'row'}}
                onPress={() => this.setState({mostrarDetalhes: true, hotel: item})}
              >
                <Text style={styles.nomeText}>{item.nome}</Text>
                <Text style={styles.precoText}>{`R$ ${item.preco}`}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }

  renderDetalhes() {
    const {hotel} = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.detalheTitulo}>
          <Text style={[styles.detalheNome, {fontSize: 20}]}>{hotel.nome}</Text>
          <Text style={styles.detalheNome}>{`${hotel.estrelas} estrelas`}</Text>
        </View>
        <Image
          source={hotel.imagem}
          style={styles.imagem}
        />
        <View style={styles.infoContainer}>
          <Text style={{flex: 1, fontWeight: 'bold'}}>Endereco: </Text>
          <Text style={{flex: 4, flexWrap: 'wrap'}}>{hotel.endereco}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{flex: 1, fontWeight: 'bold'}}>Telefone: </Text>
          <Text style={{flex: 4, flexWrap: 'wrap'}}>{hotel.telefone}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={{flex: 1, fontWeight: 'bold'}}>Preço: </Text>
          <Text style={{flex: 4, flexWrap: 'wrap'}}>{`R$ ${hotel.preco.toFixed(2)}`}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
          onPress={() => this.setState({mostrarDetalhes: false})}
          >
            <Text style={styles.button}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render(){
    const {mostrarDetalhes} = this.state;
    return(
      <View style={styles.container}>
        {!mostrarDetalhes ? this.renderLista() : this.renderDetalhes()}
        <StatusBar barStyle="light-content"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    height: 30,
    fontSize: 20,
    color: 'white',
    backgroundColor: 'red',
    textAlign: "center",
  },
  itemContainer: {
    borderBottomWidth: 1,
    padding: 5,
  },
  nomeText: {
    flex: 1,
    fontSize: 18,
  },
  precoText: {
    fontSize: 18,
  },
  detalheTitulo: {
    height: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detalheNome: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imagem: {
    height: 300,
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  button: {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 18,
    padding: 10,
    borderRadius: 10,
  },
})