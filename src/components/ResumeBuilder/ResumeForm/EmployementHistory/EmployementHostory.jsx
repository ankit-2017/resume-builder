/* eslint-disable */
import { Field, FieldArray } from 'formik';
import { useState } from 'react';
import TextInput from 'components/common/Form/TextInput';
import Projects from '../Projects/Index';
import ToggleSection from 'components/common/ToggleSection';
import RenderModifySection from '../RenderModifySection'
import Styles from './EmployementHistory.module.scss';
import { uniqueId } from 'utils';
import { useEffect } from 'react';

const EmployementHistory = ({ values, handleChange }) => {
  const [shouldAddProject, setShouldAddProject] = useState(true)
  useEffect(() => {
    const { projects, employementHistory } = values
    if ( shouldAddProject && values.projects.length <= 1) {
      projects.push({ name: '',description: '', id: employementHistory[0].id, initial: true })
      setShouldAddProject(false)
    }
  }, [])
  return<div>
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
                      // label="Company"
                      placeholder="Company Name"
                      name={`employementHistory.${index}.companyName`}
                      component={TextInput}
                      onChange={handleChange}
                    />
                    <div className={Styles.inlineDiv}>
                      <Field
                        type="text"
                        // label="Job Title"
                        placeholder="Job Title"
                        name={`employementHistory.${index}.jobTitle`}
                        component={TextInput}
                        onChange={handleChange}
                      />
                      <Field
                        type="text"
                        // label="Duration"
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
                      <Projects values={values} companyItem={item} handleChange={handleChange} />
                    </ToggleSection>
                  </div>
                  <RenderModifySection
                    item={item}
                    push={() => {
                      const id = uniqueId()
                      push({ companyName: '', jobTitle: '', duration: '', initial: false, id}
                      )
                      values.projects.push({ name: '',description: '', id, initial: true })
                    }}
                    remove={() => {
                      remove(index)
                      values.projects.forEach((ele, index) => {
                        if(ele.id === item.id) values.projects.splice(index, 1)
                      })
                    }}
                  />
                </div>
              ))
          }
        </div>
      )}
    />
  </div>
};
export default EmployementHistory;
