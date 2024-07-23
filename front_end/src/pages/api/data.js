
export default function handler(req, res) {
    const data = [
      { id: 1, label: 'Option 1' },
      { id: 2, label: 'Option 2' },
      { id: 3, label: 'Option 3' },
      { id: 4, label: 'Option 4' },
      { id: 5, label: 'Option 5' },
      { id: 6, label: 'Option 6' },
      { id: 7, label: 'Option 7' },
      { id: 8, label: 'Option 8' },
      { id: 9, label: 'Option 9' },
    ];
    res.status(200).json(data);
  }
  