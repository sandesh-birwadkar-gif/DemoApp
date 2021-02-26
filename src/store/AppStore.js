import {makeAutoObservable} from 'mobx';
import {Dimensions, Platform} from 'react-native';
import IconPack from '../utils/IconPack';
const {width, height} = Dimensions.get('window');
import * as RootNavigation from '../RootNavigation';

class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  isiOS = Platform.OS === 'ios';

  isAndroid = Platform.OS === 'android';

  wWidth = width;

  wHeight = height;

  hRem = height / 812;

  wRem = width / 375;

  DATA = [
    {
      id: 1,
      title: 'Capsicum',
      subTitle: '100 gms',
      image: IconPack.CARD_IMG,
    },
    {
      id: 2,
      title: 'Pomegranate Redish Orange',
      subTitle: '300 gms',
      image: IconPack.CARD_IMG3,
    },
    {
      id: 3,
      title: 'Tomato',
      subTitle: '2 kg',
      image: IconPack.CARD_IMG2,
    },
    {
      id: 4,
      title: 'Capsicum',
      subTitle: '70 gms',
      image: IconPack.CARD_IMG,
    },
    {
      id: 5,
      title: 'Pomegranate Redish Orange',
      subTitle: '300 gms',
      image: IconPack.CARD_IMG3,
    },
    {
      id: 6,
      title: 'Tomato',
      subTitle: '100 kg',
      image: IconPack.CARD_IMG2,
    },
    {
      id: 7,
      title: 'Capsicum',
      subTitle: '70 gms',
      image: IconPack.CARD_IMG,
    },
    {
      id: 8,
      title: 'Pomegranate Redish Orange',
      subTitle: '300 gms',
      image: IconPack.CARD_IMG3,
    },
    {
      id: 9,
      title: 'Tomato',
      subTitle: '100 kg',
      image: IconPack.CARD_IMG2,
    },
    {
      id: 10,
      title: 'Pomegranate Redish Orange',
      subTitle: '300 gms',
      image: IconPack.CARD_IMG3,
    },
    {
      id: 11,
      title: 'Tomato',
      subTitle: '100 kg',
      image: IconPack.CARD_IMG2,
    },
    {
      id: 12,
      title: 'Capsicum',
      subTitle: '70 gms',
      image: IconPack.CARD_IMG,
    },
  ];

  postNavigate(navigateTo, params) {
    RootNavigation.navigate(navigateTo, params);
  }

  setFields(eName, data) {
    this[eName] = data;
    console.log(eName, data);
  }
}
export default new AppStore();
