# Indian Agriculture Data Visualization

This project provides a comprehensive visualization of Indian agricultural data, focusing on crop production and yield from a dataset spanning 1950 to 2020. The application features a responsive bar chart and a data table to make the data accessible and insightful.

## Features

- **Bar Chart:** Visualizes the average yield of crops (Kg/Ha).
- **Data Table:** Highlights the crop with maximum and minimum production for each year.
- **Responsive Design:** Optimized for readability and usability on various screen sizes.

## Screenshots

### Bar Chart
![Bar Chart Screenshot](https://res.cloudinary.com/dvyf3uzxp/image/upload/v1735898744/barchart_vy4cml.png)


### Data Table
![Data Table Screenshot](https://res.cloudinary.com/dvyf3uzxp/image/upload/v1735898744/dataTable_d0jri3.png)

## Tech Stack

- **Frontend:** React, Mantine UI, ECharts
- **Backend:** Data processing using TypeScript utilities
- **Build Tool:** Vite

## File Structure

- **`App.tsx`:** Main application component rendering the table and chart.
- **`components/Table.tsx`:** Renders the crop production table.
- **`components/BarChart.tsx`:** Renders the bar chart for average crop yield.
- **`utils/dataProcessing.ts`:** Contains data aggregation and sanitization logic.
- **`style/global.css`:** Styles for the table and layout.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies using Yarn:
   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

4. Open the application in your browser at `http://localhost:3000`.

5. Build for production:
   ```bash
   yarn build
   ```

6. Preview the production build:
   ```bash
   yarn preview
   ```

## How It Works

1. **Data Aggregation:**
   - The utility `dataProcessing.ts` processes the dataset to extract insights:
     - Maximum and minimum crop production for each year.
     - Average crop yield for visualization.

2. **Components:**
   - `BarChart.tsx` utilizes ECharts to create an interactive bar chart.
   - `Table.tsx` leverages Mantine UI to render a styled table.

3. **Styling:**
   - The `global.css` file defines table and background styles for a polished appearance.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a feature branch.
3. Submit a pull request with detailed information about your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Package.json

```json
{
  "name": "vite-min-template",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mantine/core": "^7.15.2",
    "@mantine/ds": "^6.0.22",
    "@mantine/hooks": "^7.15.2",
    "echarts": "^5.6.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "postcss": "^8.4.49",
    "postcss-preset-mantine": "1.17.0",
    "postcss-simple-vars": "^7.0.1",
    "typescript": "^5.7.2",
    "vite": "^6.0.1"
  },
  "packageManager": "yarn@4.5.3"
}
```

---

