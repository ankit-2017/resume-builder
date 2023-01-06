/* eslint-disable */
import { Field, FieldArray } from 'formik';
import { TextInput, SelectInput } from 'components/common/Form';
import { uniqueId } from 'utils';
import RenderModifySection from '../RenderModifySection'
import Styles from './Index.module.scss';

const optionsArray = [{
  name: 'Native',
  value: 'Native',
  id: uniqueId(),
}, {
  name: 'Proficient',
  value: 'Proficient',
  id: uniqueId(),
}, {
  name: 'Intermediate',
  value: 'Intermediate',
  id: uniqueId(),
}];
const Language = ({ values, handleChange }) => (
  <>
    <FieldArray
      name="languages"
      render={({ remove, push }) => (
        <>
          {
            values.languages.length > 0
            && values.languages.map((item, index) => (
              <div key={index} className={Styles.container}>
                <div className={Styles.inlineDiv}>
                  <Field
                    type="text"
                    placeholder="ex: English"
                    name={`languages.${index}.name`}
                    component={TextInput}
                    onChange={handleChange}
                  />
                  <SelectInput
                    name={`languages.${index}.level`}
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

export default Language;
