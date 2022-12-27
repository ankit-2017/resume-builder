/* eslint-disable */
import { Field, FieldArray } from 'formik';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TextInput from 'components/common/Form/TextInput';
import Projects from '../Projects/Index';
import ToggleSection from 'components/common/ToggleSection';
import Styles from './EmployementHistory.module.scss';

const EmployementHistory = ({ values, handleChange }) => (
  <div>
    <FieldArray
      name="employementHistory"
      render={({ remove, push }) => (
        <div>
          {
              values.employementHistory.length > 0
              && values.employementHistory.map((item, index) => (
                <div key={index} className={Styles.container}>
                  <div>
                    <Field
                      type="text"
                      label="Company"
                      placeholder="Company Name"
                      name={`employementHistory.${index}.companyName`}
                      component={TextInput}
                      onChange={handleChange}
                    />
                    <div className={Styles.inlineDiv}>
                      <Field
                        type="text"
                        label="Job Title"
                        placeholder="Job Title"
                        name={`employementHistory.${index}.jobTitle`}
                        component={TextInput}
                        onChange={handleChange}
                      />
                      <Field
                        type="text"
                        label="Duration"
                        placeholder="ex: aug 2004 - june 2006"
                        name={`employementHistory.${index}.duration`}
                        component={TextInput}
                        onChange={handleChange}
                      />
                    </div>
                    <ToggleSection
                      buttonText="projects"
                      buttonVariant="text"
                    >
                      <Projects values={values} handleChange={handleChange} companyData={item} />
                    </ToggleSection>
                  </div>
                  {
                    item.initial ? (
                      <div>
                        <div
                          onClick={() => push({ companyName: '', jobTitle: '', duration: '', initial: false })}
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
        </div>
      )}
    />
  </div>
);
export default EmployementHistory;
