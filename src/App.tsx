import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import dataset from './data/dataset.json';
import { aggregateData } from "./utils/dataProcessing";
import CropTable from "./components/Table";
import BarChart from "./components/BarChart";

export default function App() {
  const { tableData, chartData } = aggregateData(dataset.map(item => ({
    year: parseInt(item.Year.match(/\d+/)?.[0] || '0'),
    crop: item["Crop Name"],
    production: Number(item["Crop Production (UOM:t(Tonnes))"]) || 0,
    yield: Number(item["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"]) || 0
  })));

  return (
    <MantineProvider theme={theme}>
      <h1 style={{ padding: '10px' }}>Indian Agriculture Data Visualization</h1>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1, marginRight: '20px' }}>
          <section>
            <h2>Crop Production Table</h2>
            <CropTable data={tableData} />
          </section>
        </div>
        <div style={{ flex: 2 }}>
          <h2>Crop Yield Bar Chart</h2>
          <BarChart data={chartData} />
        </div>
      </div>
    </MantineProvider>
  );
}