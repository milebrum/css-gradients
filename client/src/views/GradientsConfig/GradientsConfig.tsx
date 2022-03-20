import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import Sidebar from '../../components';
import { CustomForm, PrimaryButton } from '../../components/common';
import { Footer, Header } from '../../components/Layout';
import { CopyToClipboardType } from '../../components/common/template/types';
import CopyToClipboard from '../../components/common/template/CopyToClipboard';

const Config: React.FC<{}> = () => {
  const gradientOptions = [{
    id: 'style',
    type: 'radio',
    title: 'Style',
    options: ['linear-gradient', 'radial-gradient'],
    display: true,
  }, {
    id: 'direction',
    type: 'radio',
    title: 'Direction',
    options: ['to left top', 'to top', 'to right top', 'to left', 'at center center', 'to right', 'to left bottom', 'to bottom', 'to right bottom'],
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
    options: ['hex', 'rgba'],
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

  const gradient = useSelector((state: any) => state.gradient);

  const initialValues = {
    name: '',
    author: '',
    style: gradient.gradient.style,
    direction: gradient.gradient.direction,
    colours: gradient.gradient.colours,
    outputFormat: gradient.gradient.outputFormat,
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
      onClick={() => console.log('hi')}
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
      onClick={() => CopyToClipboard(CopyToClipboardType.CSS, gradient)}
    />,
    <PrimaryButton
      key="getShareLink"
      label="Get share link"
      onClick={() => CopyToClipboard(CopyToClipboardType.SHARE_LINK, gradient)}
    />,
    <Footer key="signature" />,
  ];

  return (
    <Sidebar sidebarElements={sidebarElements} />
  );
};

export default Config;
