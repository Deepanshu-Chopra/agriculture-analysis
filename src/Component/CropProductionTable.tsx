import  { useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import IndiaAgroDataset from '../data/IndiaAgroDataset.json';

/* The  interface is defining a type structure for an object that represents crop
data. */

interface CropData {
  Year: string;
  CropName: string;
  CropProduction: number;
}

// Utility function to parse the data and find max/min production for each year
const parseCropProductionData = () => {
  const yearMap: { [key: string]: { max: CropData; min: CropData } } = {};

  /* it is iterating over
each entry in the `IndiaAgroDataset` and extracting the
`Year`, `Crop Production`, and `Crop Name` data from each
entry. */
  IndiaAgroDataset.forEach((entry: any
  ) => {
    const year = entry.Year;
    const cropProduction = entry["Crop Production (UOM:t(Tonnes))"] || 0;
    const cropName = entry["Crop Name"];

/* it is responsible for
processing the data from the `IndiaAgroDataset` and finding the maximum and minimum crop production
for each year. */

    if (!yearMap[year]) {
      yearMap[year] = {
        max: { Year: year, CropName: cropName, CropProduction: cropProduction },
        min: { Year: year, CropName: cropName, CropProduction: cropProduction },
      };
    } else {
      if (cropProduction > yearMap[year].max.CropProduction) {
        yearMap[year].max = { Year: year, CropName: cropName, CropProduction: cropProduction };
      }
      if (cropProduction < yearMap[year].min.CropProduction) {
        yearMap[year].min = { Year: year, CropName: cropName, CropProduction: cropProduction };
      }
    }
  });

  return Object.values(yearMap).map(({ max, min }) => ({
    year: max.Year,
    maxCrop: max.CropName,
    minCrop: min.CropName,
  }));
};

export const CropProductionTable = () => {
  const [data, setData] = useState<{ year: string; maxCrop: string; minCrop: string }[]>([]);

  useEffect(() => {
    setData(parseCropProductionData());
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
      <h2>Crop Production Analysis</h2>
      <Table style={{
          borderCollapse: 'collapse',
          width: '80%',
        }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>Year</th>
            <th style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>Crop with Maximum Production</th>
            <th style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.year}>
              <td style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>{item.year}</td>
              <td style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>{item.maxCrop}</td>
              <td style={{ border: '1px solid black', padding: '8px' , textAlign: 'center' }}>{item.minCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
