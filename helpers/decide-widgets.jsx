import {
  TableWidget, TableWidgetSettings,
  LineChartWidget, LineChartWidgetSettings,
  PieChartWidget, PieChartWidgetSettings,
  DonutChartWidget, DonutChartWidgetSettings,
  BarChartWidget, BarChartWidgetSettings,
  AreaChartWidget, AreaChartWidgetSettings,
  AutoCompleteWidget, AutoCompleteWidgetSettings,
  ButtonWidget, ButtonWidgetSettings,
  CheckboxWidget, CheckboxWidgetSettings,
  DateTimeWidget, DateTimeWidgetSettings,
  FileWidget, FileWidgetSettings,
  NumberWidget, NumberWidgetSettings,
  PasswordWidget, PasswordWidgetSettings,
  RadioWidget, RadioWidgetSettings,
  SelectWidget, SelectWidgetSettings,
  TextAreaWidget, TextAreaWidgetSettings,
  TextFieldWidget, TextFieldWidgetSettings,
  AccordionWidget, AccordionWidgetSettings,
  DataGridWidget, DataGridWidgetSettings,
  DivWidget, DivWidgetSettings,
  ImageWidget, ImageWidgetSettings,
  ListWidget, ListWidgetSettings,
  ParagraphWidget, ParagraphWidgetSettings,
  ProgressBarWidget, ProgressBarWidgetSettings,
  SpanWidget, SpanWidgetSettings,
  TabsWidget, TabsWidgetSettings,
  FormGroupWidget, FormGroupWidgetSettings
} from '../components/widgets'

const decideWidgetSettings = (addType, onWidgetAdd) => {
  switch (addType) {
    case 'Table':
      return <TableWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Line Chart':
      return <LineChartWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Bar Chart':
      return <BarChartWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Pie Chart':
      return <PieChartWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Donut Chart':
      return <DonutChartWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Area Chart':
      return <AreaChartWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Auto Complete':
      return <AutoCompleteWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Button':
      return <ButtonWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Checkbox':
      return <CheckboxWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Date Time':
      return <DateTimeWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'File':
      return <FileWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Number':
      return <NumberWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Password':
      return <PasswordWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Radio':
      return <RadioWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Select':
      return <SelectWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Text Area':
      return <TextAreaWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Text Field':
      return <TextFieldWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Accordion':
      return <AccordionWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Data Grid':
      return <DataGridWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Div':
      return <DivWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Image':
      return <ImageWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'List':
      return <ListWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Paragraph':
      return <ParagraphWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Progress Bar':
      return <ProgressBarWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Span':
      return <SpanWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Tabs':
      return <TabsWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    case 'Form Group':
      return <FormGroupWidgetSettings isAdding={true} onWidgetAdd={onWidgetAdd} />
    default:
      return <div></div>
  }
}

const decideWidget = (widget) => {
  switch (widget.type) {
    case 'Table':
      return <TableWidget widgetId={widget.id} />
    case 'Line Chart':
      return <LineChartWidget widgetId={widget.id} />
    case 'Bar Chart':
      return <BarChartWidget widgetId={widget.id} />
    case 'Pie Chart':
      return <PieChartWidget widgetId={widget.id} />
    case 'Donut Chart':
      return <DonutChartWidget widgetId={widget.id} />
    case 'Area Chart':
      return <AreaChartWidget widgetId={widget.id} />
    case 'TextField':
      return <TextFieldWidget widgetId={widget.id} />
    case 'Auto Complete':
      return <AutoCompleteWidget widgetId={widget.id} />
    case 'Button':
      return <ButtonWidget widgetId={widget.id} />
    case 'Checkbox':
      return <CheckboxWidget widgetId={widget.id} />
    case 'Date Time':
      return <DateTimeWidget widgetId={widget.id} />
    case 'File':
      return <FileWidget widgetId={widget.id} />
    case 'Number':
      return <NumberWidget widgetId={widget.id} />
    case 'Password':
      return <PasswordWidget widgetId={widget.id} />
    case 'Radio':
      return <RadioWidget widgetId={widget.id} />
    case 'Select':
      return <SelectWidget widgetId={widget.id} />
    case 'Text Area':
      return <TextAreaWidget widgetId={widget.id} />
    case 'Text Field':
      return <TextFieldWidget widgetId={widget.id} />
    case 'Accordion':
      return <AccordionWidget widgetId={widget.id} />
    case 'Data Grid':
      return <DataGridWidget widgetId={widget.id} />
    case 'Div':
      return <DivWidget widgetId={widget.id} />
    case 'Image':
      return <ImageWidget widgetId={widget.id} />
    case 'List':
      return <ListWidget widgetId={widget.id} />
    case 'Paragraph':
      return <ParagraphWidget widgetId={widget.id} />
    case 'Progress Bar':
      return <ProgressBarWidget widgetId={widget.id} />
    case 'Span':
      return <SpanWidget widgetId={widget.id} />
    case 'Tabs':
      return <TabsWidget widgetId={widget.id} />
    case 'Form Group':
      return <FormGroupWidget widgetId={widget.id} />
  }
}

export {
  decideWidgetSettings,
  decideWidget
}