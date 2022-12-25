/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import TextInput from 'components/common/Form/TextInput';
import TextArea from 'components/common/Form/TextArea';
import ToggleSection from 'components/common/ToggleSection';
import HeadingGroup from 'components/common/HeadingGroup';
import { uniqueId } from 'utils';
import { useEffect } from 'react';
import Button from 'components/common/Button';
import EmployementHistory from './EmployementHistory/EmployementHostory';
import RenderNodes from './RenderNodes';
import {
  addNode,
  removeNode,
  getEmployementHistoryNodes,
  getEducationNodes,
  getSkillsNodes,
} from '../ResumeBuilder.slice';
import Styles from './ResumeForm.module.scss';
import Education from './Education';
import Skills from './Skills';

// eslint-disable-next-line react/prop-types
const ResumeForm = ({ id }) => {
  console.log('id', id);
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      contact_no: '',
      designation: '',

    },
    onSubmit: (values) => {
      console.log('values', values);
    },
  });
  const {
    values,
    // touched,
    // errors,
    handleChange,
    handleSubmit,
  } = formik;
  const dispatch = useDispatch();
  const employementHistoryElement = (
    <EmployementHistory
      id={uniqueId()}
      key={uniqueId()}
    />
  );
  const educationElement = (
    <Education
      id={uniqueId()}
      key={uniqueId()}
    />
  );
  const skillsElement = (
    <Skills
      id={uniqueId()}
      key={uniqueId()}
    />
  );
  const employementHistoryNodes = useSelector(getEmployementHistoryNodes);
  const educationNodes = useSelector(getEducationNodes);
  const skillNodes = useSelector(getSkillsNodes);

  useEffect(() => {
    if (!employementHistoryNodes.length) {
      dispatch(addNode({ parentId: 'EH', baseNode: employementHistoryElement }));
    }
    if (!educationNodes.length) {
      dispatch(addNode({ parentId: 'Education', baseNode: educationElement }));
    }
    if (!skillNodes.length) {
      dispatch(addNode({ parentId: 'skill', baseNode: skillsElement }));
    }
  }, [employementHistoryNodes, educationNodes, skillNodes]);
  // const handleValues = () => {

  // };
  console.log('values', values);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={Styles.personalDetails}>
          <h2>Personal Details</h2>
          <div className={Styles.contactDiv}>
            <TextInput
              type="text"
              label="First Name"
              placeholder="First Name"
              name="first_name"
              value={values.first_name}
              onChange={handleChange}
            />

            <TextInput
              type="text"
              label="Last Name"
              placeholder="Last Name"
              name="last_name"
            />

            <TextInput
              type="email"
              label="Email"
              placeholder="Email"
              name="email"
            />

            <TextInput
              type="text"
              label="Contact Number"
              placeholder="Contact Number"
              name="contact_no"
            />
          </div>

          <TextInput
            type="text"
            label="Designation"
            placeholder="Designation"
            name="designation"
          />
          <div className={Styles.additionalDetails}>
            <ToggleSection
              buttonText="additional details"
              buttonVariant="text"
            >
              <div className={Styles.additionalForm}>
                <TextInput
                  type="text"
                  label="Country"
                  placeholder="Country"
                  name="country"
                />
                <TextInput
                  type="text"
                  label="City"
                  placeholder="City"
                  name="city"
                />
              </div>
              <TextArea
                rows={2}
                label="Address"
                placeholder="Enter address"
              />
            </ToggleSection>
          </div>
          {/** Professional summary */}
          <div>
            <HeadingGroup
              HeadingLevel="h2"
              headingText="Professional Summary"
              subHeadingText="Breif description of your professional carrier."
            />
            <TextArea
              rows={3}
              label="Professional Summary"
              placeholder="Add your professional summary"
            />
          </div>
          {/* <EmployementHistory /> */}
          <div>
            <HeadingGroup
              HeadingLevel="h2"
              headingText="Employement History"
              subHeadingText="Include your relevant experiance in maximum of last four companies and duration. Add most recent first and so on."
            />
            <RenderNodes
              nodeStack={employementHistoryNodes}
              addNodeHandler={addNode}
              removeNodeHandler={removeNode}
              parentId="EH"
              baseNode={employementHistoryElement}
            />
          </div>
          {/** Education */}
          <div>
            <HeadingGroup
              HeadingLevel="h2"
              headingText="Education"
              subHeadingText="Include your most relevant acedamic performance that would help to get right job."
            />
            <RenderNodes
              nodeStack={educationNodes}
              addNodeHandler={addNode}
              removeNodeHandler={removeNode}
              parentId="Education"
              baseNode={educationElement}
            />
          </div>
          {/** Skills */}
          <div>
            <HeadingGroup
              HeadingLevel="h2"
              headingText="Skills"
              subHeadingText="Add your skills from expert to low."
            />
            <RenderNodes
              nodeStack={skillNodes}
              addNodeHandler={addNode}
              removeNodeHandler={removeNode}
              parentId="skill"
              baseNode={skillsElement}
            />
          </div>
        </div>
        <div>
          <Button variant="outlined" type="submit" text="Proceed" />
        </div>
      </form>
    </div>
  );
};

export default ResumeForm;
