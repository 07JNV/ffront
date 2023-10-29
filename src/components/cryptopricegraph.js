import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { LineChart } from '@mui/x-charts/LineChart';


const CryptoPriceGraph = () => {
  const [data, setData] = useState({ labels: [], datasets: [] });
  const [labels,setLabel]=useState([])



  useEffect(() => {
    const fetchTrendingData = async () => {
      const url = "https://api.coingecko.com/api/v3/search/trending";

      try {
        const response = await fetch(url);
        const result = await response.json();

        const items = result.coins.map((coin) => ({
          name: coin.item.name,
          price_btc: coin.item.price_btc,
        }));

        const labels = items.map((item) => item.name);
        const prices = items.map((item) => item.price_btc);
        setLabel(prices);

        console.log(prices);
        setData({
          labels,
          datasets: [
            {
              label: 'Crypto Price (BTC)',
              data: prices,
              borderColor: 'blue',
              fill: false,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingData();

  }, []);

  console.log(labels);






  return (
    <div>
      <h2>Crypto Price Today</h2>
      <LineChart
  xAxis={[{ data:[1,2,3,4,5,6,7]}]}
  series={[
    {
      data: [1,2,3,4,5,6,7],
    },
  ]}
  width={500}
  height={300}
/>
    </div>
  );
};

export default CryptoPriceGraph;

