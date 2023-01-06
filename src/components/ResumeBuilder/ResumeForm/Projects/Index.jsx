/* eslint-disable */
import { Field, FieldArray} from 'formik'
import RenderModifySection from '../RenderModifySection'
import TextInput from 'components/common/Form/TextInput';
import TextArea from 'components/common/Form/TextArea';
import Styles from './Index.module.scss';

const ProjectInfo = ({
  values, handleChange, companyItem
}) => (
  <div>
    <FieldArray
      name="projects"
      render={({ remove, push }) => (
        <div>
          {
            values.projects.length > 0
            && values.projects.map((item, index) => {
              if (item.id === companyItem.id) {
                // eslint-disable-next-line react/no-array-index-key
                return(<div key={index} className={Styles.container}>
                <div>
                  <Field
                    type="text"
                    // label="Project Name"
                    placeholder="Project Name"
                    name={`projects.${index}.name`}
                    component={TextInput}
                    onChange={handleChange}
                  />
                  <TextArea
                    rows={2}
                    // label="Project Description"
                    placeholder="Add main highlights of project."
                    name={`projects.${index}.description`}
                    onChange={handleChange}
                  />
                </div>
                <RenderModifySection
                  item={item}
                  push={() => push({ name: '', description: '', initial: false, id: companyItem.id })}
                  remove={() => remove(index)}
                  index={index}
                />

                </div>)
              }
            })
          }
        </div>
      )}
    />
  </div>
  )

export default ProjectInfo;
