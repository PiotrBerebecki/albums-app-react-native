import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
  const { 
    thumbnail_image, 
    title, 
    artist, 
    image } = album;
    
  const { 
    headerThumbnailContainer,
    headerThumbnail, 
    headerTextContainer,
    headerTextAlbum,
    albumMainImage } = styles;
    
  return (
    <Card>
    
      <CardSection>
        <View style={headerThumbnailContainer}>
          <Image
            style={headerThumbnail} 
            source={{ uri: thumbnail_image }}
          />
        </View>
        
        <View style={headerTextContainer}>
          <Text style={headerTextAlbum}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
        
        
      <CardSection>
        <Image
          style={albumMainImage}
          source={{ uri: image }}
        />
      </CardSection>
      
      <CardSection>
        <Button onPress={() => console.log(title) } />
      </CardSection>
      
    </Card>
  );
};

const styles = {
  headerThumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  headerThumbnail: {
    height: 50,
    width: 50
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextAlbum: {
    fontSize: 18
  },
  albumMainImage: {
    height: 300,
    width: null,
    flex: 1
  }
};

export default AlbumDetail;
