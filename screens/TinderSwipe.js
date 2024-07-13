import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Animated,
    PanResponder,
    Dimensions
  } from 'react-native';
  import {collection, getDocs } from 'firebase/firestore/lite';
  import React, {useCallback, useEffect, useRef, useState} from 'react';
  import TinderCard from './TinderCard';
  //import { getDatabase, ref, set } from "firebase/database";
  import {my_data} from '../firebaseConfig'
  const {height, width} = Dimensions.get('window');
  const image_array=[require('../assets/images_for_swipe/saaree.jpg'),require('../assets/images_for_swipe/kurta.jpg'),require('../assets/images_for_swipe/blazer.jpg'),require('../assets/images_for_swipe/skirt.jpg'),]
  var likes=[0,0,0,0];
  var dislikes=[0,0,0,0];
  var curr=0;
  const TinderSwipe = () => {
    
    //const [data, setData] = useState([{"brand": "Koskii", "id": 0, "name": "Mauve Embroidered Saree", "price": "₹5391 (30% off)"}, {"brand": "Sangria", "id": 1, "name": "Embroidery Georgette Kurta Set", "price": " ₹999 (70% off)"}, {"brand": "H&M", "id": 2, "name": "Women Black Longline Blazer", "price": "₹ 3499 "}, {"brand": "Uptownie Lite", "id": 3, "name": "Green Satin Accordion Pleated Skirt", "price": "₹ 1999"}]);
    const [data, setData] = useState(my_data);
    useEffect(() => {
      if (!data.length) {
        //setData([{"brand": "Koskii", "id": 0, "name": "Mauve Embroidered Saree", "price": "₹5391 (30% off)"}, {"brand": "Sangria", "id": 1, "name": "Embroidery Georgette Kurta Set", "price": " ₹999 (70% off)"}, {"brand": "H&M", "id": 2, "name": "Women Black Longline Blazer", "price": "₹ 3499 "}, {"brand": "Uptownie Lite", "id": 3, "name": "Green Satin Accordion Pleated Skirt", "price": "₹ 1999"}]);
        setData(my_data)
      }
    }, [data.length]);
    const swipe = useRef(new Animated.ValueXY()).current;
    const panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, {dx, dy}) => {
        swipe.setValue({x: dx, y: dy});
      },
      onPanResponderRelease: (_, {dx, dy}) => {
        const direction = Math.sign(dx);
        const isActionActiove = Math.abs(dx) > 200;
        if (isActionActiove) {
          Animated.timing(swipe, {
            toValue: {x: direction * 500, y: dy},
            useNativeDriver: true,
  
            duration: 500,
          }).start(removeCard(dx));
        } else {
          Animated.spring(swipe, {
            toValue: {x: 0, y: 0},
            useNativeDriver: true,
            friction: 5,
          }).start();
        }
      },
    });
    const removeCard = useCallback((dx) => {
      var idx
      console.log(dx);
      console.log(curr);
      if(dx>=0 || dx['value']>=0){
        likes[curr]=likes[curr]+1;
      }
      else if (dx<0 || dx['value']<0){
        dislikes[curr]=dislikes[curr]+1;
      }
      curr=(curr+1)%4;
      setData(prevState => prevState.slice(1));
      
      swipe.setValue({x: 0, y: 0});
    }, [swipe]);
  
    const handleChoiceButtons = useCallback(
      direction => {
        Animated.timing(swipe.x, {
          toValue: direction * width,
          duration: 500,
          useNativeDriver: true,
        }).start(removeCard);
      },
      [removeCard, swipe.x],
    );
    return (
      <View style={{flex: 1}}>
        {data
          .map((item, index) => {
            const isFirst = index === 0;
            const dragHandlers = isFirst ? panResponder.panHandlers : {};
            return (
              <TinderCard
                key={item['id']}
                swipe={swipe}
                item={item}
                image={image_array[item['id']]} //////////////////////////////////////////////////////////////////////
                no_of_likes={likes[item['id']]}
                no_of_dislikes={dislikes[item['id']]}
                isFirst={isFirst}
                {...dragHandlers}
              />
            );
          })
          .reverse()}
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            bottom: 30,
            zIndex: -1,
          }}>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#fff',
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              handleChoiceButtons(-1);
            }}>
            <Image
              source={require('../assets/images_for_swipe/cancel.png')}
              style={{width: 34, height: 34, tintColor: '#FF0060'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: '#fff',
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              handleChoiceButtons(1);
            }}>
            <Image
              source={require('../assets/images_for_swipe/heart.png')}
              style={{width: 40, height: 40, tintColor: '#00eda6'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default TinderSwipe;