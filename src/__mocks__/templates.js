import Template1 from 'assets/images/templateNew.png';
import Template2 from 'assets/images/template1.png';

const baseUrl = process.env.REACT_APP_BASE_URL;

export default [
  {
    id: '123',
    template: `${baseUrl}${Template1}`,
  },
  {
    id: '1234',
    template: `${baseUrl}${Template2}`,
  },
];
