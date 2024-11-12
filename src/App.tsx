import { CropProductionTable } from './Component/CropProductionTable';
import { CropAverageTable } from './Component/CropAverageTable'
import {  MantineProvider } from '@mantine/core';


function App() {
  return (
    <div>
      <h1>Indian Agriculture Data Analysis</h1>
      <MantineProvider >
        <CropProductionTable />
        <CropAverageTable />
      </MantineProvider>
    </div>
  );
}

export default App;