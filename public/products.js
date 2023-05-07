import image1 from '../assets/mini-pack.jpg';
import image2 from '../assets/medium-single.jpg';
import image3 from '../assets/jumbo-single.jpg';
import image4 from '../assets/netflix-and-chill.jpg';
import image5 from '../assets/student-pack.jpg';

// 'https://cdn.dribbble.com/users/6495657/screenshots/16761995/media/7b15da0efa50e67786f90aa519bf9f09.jpg?compress=1&resize=400x300&vertical=top'

const products = [
  {
    _id: '1',
    name: 'A&E Medium - Single',
    imageUrl: image2,
    price: 500,
  },
  {
    _id: '2',
    name: 'A&E Mini - Pack',
    imageUrl: image1,
    price: 800,
  },
  {
    _id: '3',
    name: 'A&E Jumbo - Single',
    imageUrl: image3,
    price: 1200,
  },
  {
    _id: '4',
    name: 'A&E Netflix & Chill Pack',
    imageUrl: image4,
    price: 2000,
  },
  {
    _id: '5',
    name: 'A&E Student Pack',
    imageUrl: image5,
    price: 2500,
  },
];

export default products;
