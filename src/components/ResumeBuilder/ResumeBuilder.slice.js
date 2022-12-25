import { createSlice } from '@reduxjs/toolkit';
import { cloneElement } from 'utils';
// import EmployementHistory from './ResumeForm/EmployementHistory/EmployementHostory';

const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    employementHistoryData: [],
    projectsData: [],
    educationData: [],
    skillsData: [],
    languageData: [],
  },
  reducers: {
    addNode: ((state, { payload }) => {
      const {
        parentId, baseNode, children, companyId,
      } = payload;
      if (parentId === 'EH') {
        const removable = Boolean(state.employementHistoryData.length);
        const newElement = cloneElement(baseNode, { removable }, children);
        state.employementHistoryData = [...state.employementHistoryData, newElement];
      } else if (parentId === 'Education') {
        const removable = Boolean(state.educationData.length);
        const newElement = cloneElement(baseNode, { removable });
        state.educationData = [...state.educationData, newElement];
      } else if (parentId === 'skill') {
        const removable = Boolean(state.skillsData.length);
        const newElement = cloneElement(baseNode, { removable });
        state.skillsData = [...state.skillsData, newElement];
      } else if (parentId === 'project') {
        const removable = Boolean(state.projectsData.length);

        const companyData = state.projectsData.filter((item) => item.companyId === companyId);
        if (companyData.length !== 0) {
          const newElement = cloneElement(baseNode, { removable });
          state.projectsData.forEach((item) => {
            if (item.companyId === companyId) {
              item.projects.push(newElement);
            }
          });
        } else {
          const newElement1 = cloneElement(baseNode, { removable: false });
          state.projectsData.push({ companyId, projects: [newElement1] });
        }
      }
    }),
    removeNode: ((state, { payload }) => {
      const { parentId, id, companyId } = payload;
      const { educationData, skillsData, projectsData } = state;
      if (parentId === 'EH') {
        state.employementHistoryData.forEach((item, index) => {
          if (item.props.id === id) {
            state.employementHistoryData.splice(index, 1);
          }
        });
      } else if (parentId === 'Education') {
        educationData.forEach((item, index) => {
          if (item.props.id === id) {
            educationData.splice(index, 1);
          }
        });
      } else if (parentId === 'skill') {
        skillsData.forEach((item, index) => {
          if (item.props.id === id) {
            skillsData.splice(index, 1);
          }
        });
      } else if (parentId === 'project') {
        projectsData.forEach((item) => {
          if (item.companyId === companyId) {
            item.projects.forEach((project, index) => {
              if (project.props.id === id) {
                item.projects.splice(index, 1);
              }
            });
          }
        });
      }
    }),
  },
});

// Selector
export const getEmployementHistoryNodes = (state) => state.resume.employementHistoryData;

export const getEducationNodes = (state) => state.resume.educationData;

export const getSkillsNodes = (state) => state.resume.skillsData;

export const getProjectNodes = ({ resume }, id) => resume.projectsData
  .filter((item) => item.companyId === id)[0];

export const { addNode, removeNode } = resumeSlice.actions;

export default resumeSlice.reducer;
