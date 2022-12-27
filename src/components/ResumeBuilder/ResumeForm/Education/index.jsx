/* eslint-disable */
import { Field, FieldArray } from 'formik';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { TextInput } from 'components/common/Form';
import Button from 'components/common/Button';
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
                    label="University/School"
                    placeholder="Enter university or school name"
                    name={`education.${index}.name`}
                    onChange={handleChange}
                    component={TextInput}
                  />
                  <div className={Styles.innerContainer}>
                    <Field
                      type="text"
                      label="Degree"
                      placeholder="ex: Bachelor of Arts"
                      name={`education.${index}.degree`}
                      onChange={handleChange}
                      component={TextInput}
                    />
                    <Field
                      type="text"
                      label="Duration"
                      placeholder="ex: July 2000-May 2003"
                      name={`education.${index}.duration`}
                      onChange={handleChange}
                      component={TextInput}
                    />
                  </div>
                </div>
                {
                  item.initial ? (
                    <div>
                      <div
                        onClick={() => push({ name: '', degree: '', duration: '', initial: false })}
                        className={Styles.addSection}
                      >
                        <div className={Styles.iconContainer}>
                          <AddCircleOutlineIcon color="white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        onClick={() => remove(index)}
                        className={Styles.deleteSection}
                      >
                        <div className={Styles.iconContainer}>
                          <RemoveCircleOutlineIcon color="white" />
                        </div>
                      </div>
                    </div>
                  )
                }
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
