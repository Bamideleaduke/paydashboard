import React from 'react';
import './AddBusinessFormStyle.css';
import CustomButton from '../shared/customButton/CustomButton';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import SelectInput from '../shared/form/SelectInput';
import { useDispatch } from 'react-redux';
import { setNewBusiness , setShowLayout, setShowAddBusiness} from '../../../src/utils/redux/slices/businessSlice';
import InputField from '../shared/form/InputField';
import Ng from "../../Assets/icons/nigeria.svg"
import Globe from "../../Assets/icons/globe.svg"


const location = [
  { value: 'Nigerian', label: 'Nigeria', icon: Ng },
  { value: 'Other Countries', label: 'Other Countries', icon: Globe },
];
const industry = [
  { value: 'Financial technology', label: 'Financial technology' },
  { value: 'Ecommerce', label: 'Ecommerce' },
];
const companySize = [
  { value: '1-100', label: '1-100' },
  { value: '101-200', label: '101-200' },
];
const companyVolume = [
  { value: '$1,000 - $10,000', label: '$1,000 - $10,000' },
  { value: '$10,001 - $50,000', label: '$10,001 - $50,000' },
];

const validationSchema = Yup.object({
//   location: Yup.string().required('Required'),
//   industry: Yup.string().required('Required'),
//   businessName: Yup.string().required('Required'),
//   companySize: Yup.string().required('Required'),
//   companyVolume: Yup.string().required('Required'),
});
const initialValue = {
   location: "",
    industry: "",
    businessName:"",
    companySize: "",
   companyVolume: "",

  };

const AddBusinessForm = ({
  setShowForm,
}: {
  setShowForm: (show: boolean) => void;
}) => {
    const dispatch = useDispatch();
  return (
    <div className='form'>
      <h2 className="title">Provide some info about your business</h2>
      <hr/>

      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // dispatch(setNewBusiness(values));
          dispatch(setShowLayout(false));
          dispatch(setShowAddBusiness(false));

          localStorage.setItem('newBusiness', JSON.stringify(values));
          window.location.reload();
        }}
      >
        {(formik) => {
            return (
          <Form>
            <SelectInput
              label="Where is your business located"
              name="location"
              options={location}
              placeholder="Select location"
              required
              icon
            />
            <SelectInput
              label="Business industry"
              name="industry"
              options={industry}
              placeholder="Select industry"
              required
            />
            <InputField label={'What is your business name?'} name={'businessName'} placeholder='Business Name'    required/>
            <div className='grid-field'>
            <SelectInput
              label="Company size"
              name="companySize"
              options={companySize}
              placeholder="Select a size"
              required
            />
            <SelectInput
              label="Estimated annual volume"
              name="companyVolume"
              options={companyVolume}
              placeholder="Select an option"
              required
            />
            </div>

            <div className="submit-form">
              <CustomButton
                onClick={() => setShowForm(false)}
                text={<p>Back</p>}
                backgroundColor={'#fff'}
                color={'#343433'}
                border="2px solid #E2E3E5"
                borderRadius="16px"
              />
              <CustomButton
                disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}
                type='submit'
                text={'Create Business'}
                backgroundColor={ !formik.dirty || !formik.isValid || formik.isSubmitting ?"#B4B4B4": "#343433" }
                color={'#fff'}
                borderRadius="16px"
              />
            </div>
          </Form>
        )}}
      </Formik>
    </div>
  );
};

export default AddBusinessForm;
