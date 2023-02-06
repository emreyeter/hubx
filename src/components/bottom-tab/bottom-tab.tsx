import { View, Text, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { Container, Icon, Label, ScanButton, QrIcon } from './bottom-tab.styles'
import Button from '../button/button'

type Props = BottomTabBarProps

const BottomTab = (props : Props) => {

    console.log(props)

    const { state, descriptors, navigation, insets } = props

  return (
    <Container insets={insets} >

    {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel?.toString?.()
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

  
        const buttonProps = {
          accessibilityRole: 'button',
          accessibilityState:  isFocused ? { selected: true } : {} ,
          accessibilityLabel : options.tabBarAccessibilityLabel,
          testID: options.tabBarTestID,
          onPress,
          onLongPress,
        } as any;

        const isRouteScan = route.name === 'Scan'
        const renderChildren = !isRouteScan ? <>
          <Icon isFocused={isFocused}  />
            <Label text={label} isFocused={isFocused} />
          </> : 
          <ScanButton {...buttonProps} >
            <QrIcon />
          </ScanButton>
        

        return (
          <Button
            key={index.toString()}
            {...buttonProps}
            style={{ flex : isRouteScan ? 1.2 : 1, alignItems :'center' }}
          >
            {renderChildren}
          </Button>
        );
      })}
    </Container>
  )
}

export default BottomTab