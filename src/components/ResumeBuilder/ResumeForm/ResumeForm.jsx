/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */
import { Form, FieldArray, Formik, Field } from 'formik';
import { Grid, Divider } from '@mui/material';
import TextInput from 'components/common/Form/TextInput';
import TextArea from 'components/common/Form/TextArea';
import ToggleSection from 'components/common/ToggleSection';
import HeadingGroup from 'components/common/HeadingGroup';
// import { uniqueId } from 'utils';
// import { useEffect, useState } from 'react';
import Button from 'components/common/Button';
import EmployementHistory from './EmployementHistory/EmployementHostory';
import Styles from './ResumeForm.module.scss';
import Education from './Education';
import Skills from './Skills';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contactNo: '',
  designation: '',
  country: '',
  city: '',
  address: '',
  professionalSummary: '',
  employementHistory: [
    {
      companyName: '',
      jobTitle: '',
      duration: '',
      initial: true
    },
  ],
  projects: [
    {
      name: '',
      description: '',
      initial: true
    }
  ],
  education: [
    {
      name: '',
      degree: '',
      duration: '',
      initial: true
    }
  ],
  skills: [
    {
      name: '',
      level: '',
      initial: true
    }
  ]
}

// eslint-disable-next-line react/prop-types
const ResumeForm = ({ Template }) => {
  return (
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              console.log('values', values);
            }}
            render={({ values, handleChange }) => {
              {console.log('values', values)}
              return(<Form>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={6} lg={6}>
                    <div className={Styles.formSection}>
                      <div className={Styles.innerFormSection}>
                        <h3>Personal Details</h3>
                        <div className={Styles.contactDiv}>
                          <Field
                            type="text"
                            label="First Name"
                            placeholder="First Name"
                            name="firstName"
                            component={TextInput}
                            // value={values.firstName}
                            onChange={handleChange}
                          />

                          <Field
                            type="text"
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            component={TextInput}
                            // value={values.lastName}
                            onChange={handleChange}
                          />

                          <Field
                            type="email"
                            label="Email"
                            placeholder="Email"
                            name="email"
                            component={TextInput}
                            // value={values.email}
                            onChange={handleChange}
                          />

                          <Field
                            type="text"
                            label="Contact Number"
                            placeholder="Contact Number"
                            name="contactNo"
                            component={TextInput}
                            // value={values.contactNo}
                            onChange={handleChange}
                          />
                        </div>

                        <Field
                          type="text"
                          label="Designation"
                          placeholder="Designation"
                          name="designation"
                          component={TextInput}
                          // value={values.designation}
                          onChange={handleChange}
                        />
                        <div className={Styles.additionalDetails}>
                          <ToggleSection
                            buttonText="additional details"
                            buttonVariant="text"
                          >
                            <div className={Styles.additionalForm}>
                              <Field
                                type="text"
                                label="Country"
                                placeholder="Country"
                                name="country"
                                component={TextInput}
                                onChange={handleChange}
                              />
                              <Field
                                type="text"
                                label="City"
                                placeholder="City"
                                name="city"
                                component={TextInput}
                                onChange={handleChange}
                              />
                            </div>
                            <TextArea
                              rows={2}
                              label="Address"
                              placeholder="Enter address"
                              name="address"
                              value={values.address}
                              onChange={handleChange}
                            />
                          </ToggleSection>
                        </div>
                        {/** Professional summary */}
                        <div>
                          <HeadingGroup
                            HeadingLevel="h3"
                            headingText="Professional Summary"
                            subHeadingText="Breif description of your professional carrier."
                          />
                          <TextArea
                            rows={2}
                            label="Professional Summary"
                            placeholder="Add your professional summary"
                            name="professionalSummary"
                            value={values.professionalSummary}
                            onChange={handleChange}
                          />
                        </div>
                        {/* <EmployementHistory /> */}
                        <div>
                          <HeadingGroup
                            HeadingLevel="h3"
                            headingText="Employement History"
                            subHeadingText="Include your relevant experiance in maximum of last four companies and duration. Add most recent first and so on."
                          />
                          <EmployementHistory values={values} handleChange={handleChange} />
                        </div>
                        {/** Education */}
                        <div>
                          <HeadingGroup
                            HeadingLevel="h3"
                            headingText="Education"
                            subHeadingText="Include your most relevant acedamic performance that would help to get right job."
                          />
                          <Education values={values} handleChange={handleChange} />
                        </div>
                        {/** Skills */}
                        <div>
                          <HeadingGroup
                            HeadingLevel="h3"
                            headingText="Skills"
                            subHeadingText="Add your skills from expert to low."
                          />
                          <Skills values={values} handleChange={handleChange} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button variant="outlined" type="submit" text="Proceed" />
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <div>
                      <Divider orientation="vertical" />
                      {Template && <Template props={values} />}
                    </div>
                  </Grid>
                </Grid>
              </Form>
  )}}
          />
        </div>
  );
};

export default ResumeForm;
