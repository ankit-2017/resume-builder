/* eslint-disable */
import { Field, FieldArray } from 'formik'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import TextInput from 'components/common/Form/TextInput';
import TextArea from 'components/common/Form/TextArea';
import Button from 'components/common/Button';
import Styles from './Index.module.scss';

const ProjectInfo = ({
  values, handleChange, companyData
}) => (
  <div>
    <FieldArray
      name="projects"
      render={({ remove, push }) => (
        <div>
          {
            values.projects.length > 0
            && values.projects.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={index} className={Styles.container}>
                <div>
                  <Field
                    type="text"
                    label="Project Name"
                    placeholder="Project Name"
                    name={`projects.${index}.name`}
                    component={TextInput}
                    onChange={handleChange}
                  />
                  <TextArea
                    rows={2}
                    label="Project Description"
                    placeholder="Add brief description of project."
                    name={`projects.${index}.description`}
                    onChange={handleChange}
                  />
                </div>
                {
                  item.initial ? (
                    <div>
                      <div
                        onClick={() => push({ name: '', description: '', initial: false })}
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
              text="Add Projects"
              onClickHandler={() => push({ name: '', description: '' })}
              variant="success"
            />
          </div> */}
        </div>
      )}
    />
  </div>
);

export default ProjectInfo;
