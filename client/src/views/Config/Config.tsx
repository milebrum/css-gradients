import React from 'react';
import * as Yup from 'yup';
import Sidebar from '../../components';
import { ColourSelector, CustomForm, PrimaryButton } from '../../components/common';
import { Footer, Header } from '../../components/Layout';

const Config: React.FC<{}> = () => {
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

  const sidebarElements = [
    <Header key="Header" />,
    <PrimaryButton
      key="PrimaryButton"
      label="Load from template"
    />,
    <CustomForm
      key="CustomForm"
      onComplete={(values: any) => {
        internalCreateTemplate(values);
      }}
      formFields={gradientOptions}
      submitLabel="Save as template"
      initialValues={initialValues}
      validationSchema={validationSchema}
    />,
    <ColourSelector key="ColourSelector" />,
    <Footer key="Footer" />,
  ];

  return (
    <Sidebar sidebarElements={sidebarElements} />
  );
};

export default Config;
