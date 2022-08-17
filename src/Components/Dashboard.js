import React ,{useEffect,useState} from "react";
import { Column } from '@ant-design/plots';
import { Area } from '@ant-design/plots';

const Dashboard=()=>{

    const [dataA, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };

     const data = [
        {
          type: 'Jan',
          sales: 0,
        },
        {
          type: 'Feb',
          sales: 8,
        },
        {
          type: 'March',
          sales: 16,
        },
        {
          type: 'Apr',
          sales: 24,
        },
        {
          type: 'May',
          sales: 32,
        },
        {
          type: 'Jun',
          sales: 40,
        },
        {
          type: 'Jul',
          sales: 48,
        },
        {
          type: 'Aug',
          sales: 45,
        },
         {
            type: 'Sep',
            sales: 16,
         },
         {
            type: 'Oct',
            sales: 2,
         },
         {
            type: 'Nov',
            sales: 80,
         },
         {
            type: 'Dec',
            sales: 88,
         },
         
         ];

      const config = {
        data,
        xField: 'type',
        yField: 'sales',
        label: {
          
          position: 'middle',
           style: {
            fill: '#12323F',
           opacity: 0,
          },
        },
        
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
        meta: {
          type: {
            alias: '类别',
          },
          sales: {
            alias: 'sale',
          },
        },
      };

      const configA = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
          range: [0, 1],
        },
      };
    
      return (<><Column {...config} />
      
      <Area {...configA} />
      </>
      );
}


export default Dashboard;



