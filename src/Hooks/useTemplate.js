import { useParams } from 'react-router-dom';
import Template1 from 'components/common/Template1';

const useTemplate = () => {
  const { id } = useParams();
  let Template = '';
  switch (id) {
    case '123': {
      Template = Template1;
      break;
    }
    default:
      Template = '';
  }

  return [Template, id];
};

export default useTemplate;
