import { TextInput } from 'components/common/Form';
import Styles from './Education.module.scss';

const Education = () => (
  <div>
    <TextInput
      type="text"
      label="University/School"
      placeholder="Enter university or school name"
      name="university_school_name"
    />
    <div className={Styles.container}>
      <TextInput
        type="text"
        label="Degree"
        placeholder="ex: Bachelor of Arts"
        name="degree"
      />
      <TextInput
        type="text"
        label="Degree"
        placeholder="ex: Bachelor of Arts"
        name="degree"
      />
    </div>
  </div>
);

export default Education;
