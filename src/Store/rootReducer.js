import { combineReducers } from '@reduxjs/toolkit';
import HomeReducer from 'components/Home/Home.slice';
import Resume from 'components/ResumeBuilder/ResumeBuilder.slice';
import TemplateSlice from 'components/Template/Template.slice';

export default combineReducers({
  home: HomeReducer,
  resume: Resume,
  templates: TemplateSlice,
});
