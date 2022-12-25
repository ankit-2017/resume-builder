/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextInput from 'components/common/Form/TextInput';
import { uniqueId } from 'utils';
import ToggleSection from 'components/common/ToggleSection';
import ProjectInfo from '../ProjectInfo';
import RenderNodes from '../RenderNodes';
import Styles from './EmployementHistory.module.scss';
import { addNode, removeNode, getProjectNodes } from '../../ResumeBuilder.slice';

const EmployementHistory = ({ id }) => {
  const dispatch = useDispatch();
  const projectElement = (
    <ProjectInfo
      id={uniqueId()}
      key={uniqueId()}
    />
  );
  let projectNodes = useSelector((state) => getProjectNodes(state, id));
  projectNodes = projectNodes?.projects || [];
  useEffect(() => {
    if (!projectNodes.length) {
      dispatch(addNode({ parentId: 'project', baseNode: projectElement, companyId: id }));
    }
  }, [projectNodes]);

  return (
    <div>
      <TextInput
        type="text"
        label="Company"
        placeholder="Company Name"
        name="company1"
      />
      <div className={Styles.inlineDiv}>
        <TextInput
          type="text"
          label="Job Title"
          placeholder="Job Title"
          name="job_title"
        />
        <TextInput
          type="text"
          label="Duration"
          placeholder="ex: aug 2004 - june 2006"
          name="duration"
        />
      </div>
      <div>
        <ToggleSection
          buttonText="projects"
          buttonVariant="text"
        >
          <RenderNodes
            nodeStack={projectNodes}
            addNodeHandler={addNode}
            removeNodeHandler={removeNode}
            baseNode={projectElement}
            parentId="project"
            companyId={id}
          />
        </ToggleSection>
      </div>
    </div>
  );
};

export default EmployementHistory;
