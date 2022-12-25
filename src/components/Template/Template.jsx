/* eslint-disable */
import { useHistory } from 'react-router-dom';
import { Grid, Divider } from '@mui/material';
import Navbar from 'components/common/Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import templateMock from '__mocks__/templates';
import Button from 'components/common/Button';
import { getTemplates } from './Template.slice';
import Styles from './Template.module.scss';

const AddTemplate = () => {
  const router = useHistory();
  const dispatch = useDispatch();
  const templatesData = useSelector((state) => state.templates.data);

  useEffect(() => {
    dispatch(getTemplates({ data: templateMock }));
  }, []);

  return (
    <div>
      <Navbar />
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <div className={Styles.leftSection}>
            <h1>
              Select a
              {' '}
              <span>template</span>
              {' '}
              from the list.
            </h1>
          </div>
        </Grid>
        <Grid item xs={0} md={6}>
          <div className={Styles.rightSection}>
            <Divider orientation="vertical" />
            <div className={Styles.imgContainer}>
              {
              templatesData?.map((item) => (
                <Button
                  variant="text"
                  key={item.id}
                  onClickHandler={() => router.push("/resume-builder/"+item.id)}
                >
                  <img src={item.template} alt="template" />
                </Button>
              ))
            }
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddTemplate;
