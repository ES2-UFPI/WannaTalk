
export default function handler(req, res) {
    const data = [
      { id: 1, label: 'Português' },
      { id: 2, label: 'Ingles' },
      { id: 3, label: 'Francês' },
      { id: 4, label: 'Russo' },
      { id: 5, label: 'Espanhol' },
      { id: 6, label: 'Italiano' },
      { id: 7, label: 'Alemão' },
    ];
    res.status(200).json(data);
  }
  