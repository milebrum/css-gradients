import React from 'react';
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
  }, {
    id: 'direction',
    type: 'radio',
    title: 'Direction',
    optionsType: 'icon',
    options: ['arrow-up-left', 'arrow-up', 'arrow-up-right', 'arrow-left', 'circle_middle', 'arrow-right', 'arrow-down-left', 'arrow-down', 'arrow-down-right'],
  }, {
    id: 'colours',
    type: 'colour',
    title: 'Colors',
  }, {
    id: 'outputFormat',
    type: 'radio',
    title: 'Output format',
    optionsType: 'text',
    options: ['Hex', 'Rgba'],
  }, {
    id: 'name',
    type: 'input',
    title: 'Template Name',
  }, {
    id: 'author',
    type: 'input',
    title: 'Author',
  },
  ];

  const initialValues = {
    name: 'Name your template',
    author: 'Your name or nickname',
    style: 'linear',
    direction: 'arrow-up-left',
    color1: '',
    color2: '',
    outputFormat: 'hex',
  };

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
    return templateData;
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
      />
      <ColourSelector />
      <Footer />
    </div>
  );
};

export default Sidebar;
