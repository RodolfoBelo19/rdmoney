import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelancer Website',
          type: 'deposit',
          category: 'Dev',
          amount: 5000,
          createdAt: new Date("2022-02-12 10:00:00"),
        },
        {
          id: 2,
          title: 'Freelancer Backend',
          type: 'deposit',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date("2022-03-11 11:00:00"),
        },
        {
          id: 3,
          title: 'Compras',
          type: 'withdraw',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date("2022-04-12 15:00:00"),
        }
      ] 
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
