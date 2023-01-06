/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable */
import { Form, Formik, Field } from 'formik';
import { Grid } from '@mui/material';
import TextInput from 'components/common/Form/TextInput';
import TextArea from 'components/common/Form/TextArea';
import ToggleSection from 'components/common/ToggleSection';
import HeadingGroup from 'components/common/HeadingGroup';
import Button from 'components/common/Button';
import EmployementHistory from './EmployementHistory/EmployementHostory';
import Styles from './ResumeForm.module.scss';
import Education from './Education';
import Skills from './Skills';
import Language from './Language/Index';
import { uniqueId } from 'utils';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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
      id: uniqueId(),
      companyName: '',
      jobTitle: '',
      duration: '',
      initial: true
    },
  ],
  projects: [],
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
  ],
  languages: [
    {
      name: '',
      level: '',
      initial: true
    }
  ]
}

const ResumeForm = ({ Template }) => {
  const generatePDF = () => {
    const input = document.getElementById('template')
    html2canvas(input)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF("p", "pt", "a4")
      pdf.addImage(imgData, 'PNG', 80, 50)
      pdf.save('new-resume.pdf')
    })
  }
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
                        <HeadingGroup
                          HeadingLevel="h3"
                          headingText="Personal Details"
                          subHeadingText="Add your demographic details."
                        />
                        <div className={Styles.contactDiv}>
                          <Field
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            component={TextInput}
                            onChange={handleChange}
                          />

                          <Field
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            component={TextInput}
                            onChange={handleChange}
                          />

                          <Field
                            type="email"
                            placeholder="Email"
                            name="email"
                            component={TextInput}
                            onChange={handleChange}
                          />

                          <Field
                            type="text"
                            placeholder="Contact Number"
                            name="contactNo"
                            component={TextInput}
                            onChange={handleChange}
                          />
                        </div>

                        <Field
                          type="text"
                          placeholder="Designation"
                          name="designation"
                          component={TextInput}
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
                                placeholder="Country"
                                name="country"
                                component={TextInput}
                                onChange={handleChange}
                              />
                              <Field
                                type="text"
                                placeholder="City"
                                name="city"
                                component={TextInput}
                                onChange={handleChange}
                              />
                            </div>
                            <TextArea
                              rows={2}
                              placeholder="Enter your current address"
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
                        {/** Languages */}
                        <div>
                          <HeadingGroup
                            HeadingLevel="h3"
                            headingText="Languages"
                            subHeadingText="Add languages that you know."
                          />
                          <Language values={values} handleChange={handleChange} />
                        </div>
                        <div>
                          <Button
                            variant="outlined"
                            type="submit"
                            text="Proceed"
                            onClickHandler={() => generatePDF(values)} 
                          />
                        </div>
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} md={6} lg={6}>
                    <div id='template'>
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
