import { Grid, Divider } from '@mui/material';
import Navbar from 'components/common/Navbar';
import { useTemplate } from 'Hooks';
import ResumeForm from './ResumeForm';
import Styles from './ResumeBuilder.module.scss';

const ResumeBuilder = () => {
  const [Template, id] = useTemplate();
  return (
    <div>
      <Navbar />
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} lg={6}>
          <div className={Styles.leftSection}>
            <ResumeForm id={id} />
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <div className={Styles.rightSection}>
            <Divider orientation="vertical" />
            {Template && <Template />}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResumeBuilder;
