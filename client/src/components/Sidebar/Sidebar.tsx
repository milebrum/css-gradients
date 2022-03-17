import React from 'react';
import * as Yup from 'yup';
import { ColourSelector, CustomForm, PrimaryButton } from '../common';
import { Footer, Header } from '../Layout';
import styles from './Sidebar.module.css';

const Sidebar: React.FC<{}> = () => {
  const gradientOptions = [{
    id: 'style',
    type: 'radio',
    title: 'Style',
    optionsType: 'text',
    options: ['Linear', 'Radial'],
    display: true,
  }, {
    id: 'direction',
    type: 'radio',
    title: 'Direction',
    optionsType: 'icon',
    options: ['arrow-up-left', 'arrow-up', 'arrow-up-right', 'arrow-left', 'circle_middle', 'arrow-right', 'arrow-down-left', 'arrow-down', 'arrow-down-right'],
    display: true,
  }, {
    id: 'colours',
    type: 'colour',
    title: 'Colors',
    display: true,
  }, {
    id: 'outputFormat',
    type: 'radio',
    title: 'Output format',
    optionsType: 'text',
    options: ['Hex', 'Rgba'],
    display: true,
  }, {
    id: 'name',
    type: 'input',
    title: 'Template Name',
    label: 'Name your template',
    display: false,
  }, {
    id: 'author',
    type: 'input',
    title: 'Author',
    label: 'Your name or nickname',
    display: false,
  },
  ];

  const initialValues = {
    name: '',
    author: '',
    style: 'Linear',
    direction: 'arrow-up-left',
    color1: '',
    color2: '',
    outputFormat: 'Hex',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('This field is required'),
    author: Yup.string().required('This field is required'),
  });

  const internalCreateTemplate = async (values: Record<string, any>) => {
    const templateData = {
      name: values.name,
      author: values.author,
      style: values.style,
      direction: values.direction,
      color1: values.color1,
      color2: values.color2,
      outputFormat: values.outputFormat,
    };
    console.log(templateData);
    // createTemplate(templateData);
  };

  return (
    <div className={styles.root}>
      <Header />
      <PrimaryButton
        label="Load from template"
      />
      <CustomForm
        onComplete={(values) => {
          internalCreateTemplate(values);
        }}
        formFields={gradientOptions}
        submitLabel="Save as template"
        initialValues={initialValues}
        validationSchema={validationSchema}
      />
      <ColourSelector />
      <Footer />
    </div>
  );
};

export default Sidebar;
