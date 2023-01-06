import Navbar from 'components/common/Navbar';
import { useTemplate } from 'Hooks';
import ResumeForm from './ResumeForm';

const ResumeBuilder = () => {
  const [Template, id] = useTemplate();
  return (
    <div>
      <Navbar />
      <ResumeForm id={id} Template={Template} />
    </div>
  );
};

export default ResumeBuilder;
