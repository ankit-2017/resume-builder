import { TextInput, SelectInput } from 'components/common/Form';
import { uniqueId } from 'utils';
import Styles from './skills.module.scss';

const optionsArray = [{
  name: 'Expert',
  value: 'expert',
  id: uniqueId(),
}, {
  name: 'Intermediate',
  value: 'intermediate',
  id: uniqueId(),
}, {
  name: 'Elementary',
  value: 'elementary',
  id: uniqueId(),
}];
const Skills = () => (
  <div className={Styles.container}>
    <TextInput
      type="text"
      label="Name"
      placeholder="ex: React, Javascript"
      name="skill"
    />
    <SelectInput
      label="Level"
      name="skill_level"
      optionsArray={optionsArray}
    />
  </div>
);

export default Skills;
