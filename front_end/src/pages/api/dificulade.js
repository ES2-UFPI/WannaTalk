
export default function handler(req, res) {
    const data = [
      { id: 1, label: 'Fácil' },
      { id: 2, label: 'Médio ' },
      { id: 3, label: 'Dificil ' },
      
    ];
    res.status(200).json(data);
  }
  