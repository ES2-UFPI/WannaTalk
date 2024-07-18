
export default function handler(req, res) {
    const data = [
      { id: 1, label: 'Agente 1' },
      { id: 2, label: 'Agente 2' },
      { id: 3, label: 'Agente 3' },
      { id: 4, label: 'Agente 4' },
      
    ];
    res.status(200).json(data);
  }
  