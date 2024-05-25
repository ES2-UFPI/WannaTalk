
export default function handler(req, res) {
    const data = [
      { id: 1, label: 'Aeroporto' },
      { id: 2, label: 'Metrô' },
      { id: 3, label: 'Restaurante' },
      { id: 4, label: 'Café da manhã' },
      { id: 5, label: 'Natal' },
      { id: 6, label: 'Universidade' },
      { id: 7, label: 'Hospital' },
      { id: 8, label: 'Banco' },
      { id: 9, label: 'Farmácia' },
    ];
    res.status(200).json(data);
  }
  