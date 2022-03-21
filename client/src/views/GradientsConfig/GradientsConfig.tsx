import React from 'react';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import Sidebar from '../../components';
import { CustomForm, PrimaryButton } from '../../components/common';
import { Footer, Header } from '../../components/Layout';
import { CopyToClipboardType } from '../../components/common/template/types';
import CopyToClipboard from '../../components/common/template/CopyToClipboard';
import RoutePaths from '../../config/constants/route-paths';

const Config: React.FC<{}> = () => {
  const [templateData, setTemplateData] = React.useState<any>();
  const [copiedToClipboard, setCopiedToClipboard] = React.useState({ copied: false, type: '' });

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

  const createTemplate = async (values: Record<string, any>) => {
    setTemplateData({
      name: values.name,
      author: values.author,
      style: values.style,
      direction: values.direction,
      colours: values.colours,
      outputFormat: values.outputFormat,
    });
  };

  React.useEffect(() => {
    fetch('/saveTemplate', {
      method: 'POST',
      body: JSON.stringify(templateData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
  }, [templateData]);

  const copyToClipboard = (type: CopyToClipboardType, toCopy: any) => {
    CopyToClipboard(type, toCopy);
    setCopiedToClipboard({ copied: true, type });
    setTimeout(() => {
      setCopiedToClipboard({ copied: false, type });
    }, 2000);
  };

  const sidebarElements = [
    <Header key="textLogo" />,
    <PrimaryButton
      key="loadTemplate"
      label="Load from template"
      onClick={() => window.location.assign(RoutePaths.templates)}
    />,
    <CustomForm
      key="configForm"
      onComplete={(values: any) => {
        createTemplate(values);
      }}
      formFields={gradientOptions}
      submitLabel="Save as template"
      initialValues={initialValues}
      validationSchema={validationSchema}
    />,
    <PrimaryButton
      key="getCSS"
      label={copiedToClipboard.copied && copiedToClipboard.type === CopyToClipboardType.CSS ? 'Yay! Copied to clipboard!' : 'Get CSS'}
      onClick={() => copyToClipboard(CopyToClipboardType.CSS, gradient)}
    />,
    <PrimaryButton
      key="getShareLink"
      label={copiedToClipboard.copied && copiedToClipboard.type === CopyToClipboardType.SHARE_LINK ? 'Yay! Copied to clipboard!' : 'Get share link'}
      onClick={() => copyToClipboard(CopyToClipboardType.SHARE_LINK, gradient)}
    />,
    <Footer key="signature" />,
  ];

  return (
    <Sidebar sidebarElements={sidebarElements} />
  );
};

export default Config;
