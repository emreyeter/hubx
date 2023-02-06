import { StyleProp, Text, TextStyle } from "react-native";
import { normalize } from "../../helper/utils";


interface TagProps {
  [key: string]: StyleProp<TextStyle>;
}

var styles: TagProps = {
  'b':  {fontFamily : 'Rubik-Bold'},
  'u':  {textDecorationLine: 'underline'},
  'v' : {fontFamily : 'Rubik-Bold', fontSize: normalize(30)},
};

export default function HTMLText(text: any) {
  // split on highlight tags to get the arrays.
  text = text.split(/(<.*?>.*?<\/.*?>)/g);

  for(var i = 1; i < text.length; i += 2) {
    var word = text[i].replace(/<.*?>(.*?)<\/.*?>/, '$1');
    text[i] = <Text key={i.toString()} style={styles[text[i][1]]}>{word}</Text>;

  }
  return text;
}