import React from 'react';
import * as Yup from 'yup';
import Sidebar from '../../components';
import { CustomForm, PrimaryButton } from '../../components/common';
import { Footer, Header } from '../../components/Layout';
import randomColour from '../../helpers/utils';

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
    popover: { isOpen: false },
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
    colours: [`#${randomColour()}`, `#${randomColour()}`],
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
      colours: values.colours,
      outputFormat: values.outputFormat,
    };
    console.log(templateData);
    // createTemplate(templateData);
  };

  const sidebarElements = [
    <Header key="textLogo" />,
    <PrimaryButton
      key="loadTemplate"
      label="Load from template"
    />,
    <CustomForm
      key="configForm"
      onComplete={(values: any) => {
        internalCreateTemplate(values);
      }}
      formFields={gradientOptions}
      submitLabel="Save as template"
      initialValues={initialValues}
      validationSchema={validationSchema}
    />,
    <PrimaryButton
      key="getCSS"
      label="Get CSS"
    />,
    <PrimaryButton
      key="getShareLink"
      label="Get share link"
    />,
    <Footer key="signature" />,
  ];

  return (
    <Sidebar sidebarElements={sidebarElements} />
  );
};

export default Config;
