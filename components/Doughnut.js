import React from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

export default () => (
    <div>
        <h2>Doughnut Example</h2>
        <Doughnut
            data={data}
            max-width={100}
            max-height={100}
        />
    </div>
);