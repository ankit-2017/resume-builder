/* eslint-disable */
import { Field, FieldArray } from 'formik';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { TextInput } from 'components/common/Form';
import RenderModifySection from '../RenderModifySection'
import Styles from './Education.module.scss';

const Education = ({ values, handleChange }) => (
  <div>
    <FieldArray
      name="education"
      render={({ remove, push }) => (
        <>
          {
            values.education.length > 0
            && values.education.map((item, index) => (
              <div key={index} className={Styles.container}>
                <div>
                  <Field
                    type="text"
                    placeholder="Enter university or college name"
                    name={`education.${index}.name`}
                    onChange={handleChange}
                    component={TextInput}
                  />
                  <div className={Styles.innerContainer}>
                    <Field
                      type="text"
                      placeholder="ex: Bachelor of Arts"
                      name={`education.${index}.degree`}
                      onChange={handleChange}
                      component={TextInput}
                    />
                    <Field
                      type="text"
                      placeholder="ex: July 2000-May 2003"
                      name={`education.${index}.duration`}
                      onChange={handleChange}
                      component={TextInput}
                    />
                  </div>
                </div>
                <RenderModifySection
                  item={item}
                  push={() => push({ name: '', degree: '', duration: '', initial: false })}
                  remove={() => remove(index)}
                />
              </div>
            ))
          }
          {/* <div>
            <Button
              Icon={AddCircleOutlineIcon}
              text="Add Education"
              onClickHandler={() => push({ name: '', degree: '', duration: '' })}
              variant="success"
            />
          </div> */}
        </>
      )}
    />
  </div>
);

export default Education;
