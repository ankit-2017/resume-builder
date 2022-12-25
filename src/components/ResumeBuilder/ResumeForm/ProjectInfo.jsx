import TextInput from 'components/common/Form/TextInput';
import TextArea from 'components/common/Form/TextArea';

const ProjectInfo = () => (
  <div>
    <TextInput
      type="text"
      label="Project Name"
      placeholder="Project Name"
      name="project_name"
    />
    <TextArea
      rows={3}
      label="Project Description"
      placeholder="Add brief description of project."
      name="project_description"
    />
  </div>
);

export default ProjectInfo;
