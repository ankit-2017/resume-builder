/* eslint-disable */
import { Field, FieldArray } from 'formik';
import { TextInput, SelectInput } from 'components/common/Form';
import { uniqueId } from 'utils';
import RenderModifySection from '../RenderModifySection'
import Styles from './skills.module.scss';

const optionsArray = [{
  name: '100%',
  value: '100',
  id: uniqueId(),
}, {
  name: '80%',
  value: '80',
  id: uniqueId(),
}, {
  name: '60%',
  value: '60',
  id: uniqueId(),
},{
  name: '40%',
  value: '40',
  id: uniqueId(),
},{
  name: '20%',
  value: '20',
  id: uniqueId(),
},{
  name: '10%',
  value: '10',
  id: uniqueId(),
}];
const Skills = ({ values, handleChange }) => (
  <>
    <FieldArray
      name="skills"
      render={({ remove, push }) => (
        <>
          {
            values.skills.length > 0
            && values.skills.map((item, index) => (
              <div key={index} className={Styles.container}>
                <div className={Styles.inlineDiv}>
                  <Field
                    type="text"
                    // label="Name"
                    placeholder="ex: React, Javascript"
                    name={`skills.${index}.name`}
                    component={TextInput}
                    onChange={handleChange}
                  />
                  <SelectInput
                    // label="Level percentage"
                    name={`skills.${index}.level`}
                    optionsArray={optionsArray}
                    onChange={handleChange}
                  />
                </div>
                <RenderModifySection
                  item={item}
                  push={() => push({ name: '', level: '', initial: false })}
                  remove={() => remove(index)}
                />
              </div>
            ))
          }
        </>
      )}
    />
  </>
);

export default Skills;
