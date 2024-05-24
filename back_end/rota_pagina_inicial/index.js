const express = require('express');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const app = express();
const PORT = process.env.PORT || 3000;

// Abre a conexão com o banco de dados SQLite e cria o banco e a tabela se ainda não existirem
open({
    filename: './database.db',
    driver: sqlite3.Database
}).then(async (db) => {
    // Cria a tabela 'roteiro' se ainda não existir
    await db.exec(`
        CREATE TABLE IF NOT EXISTS roteiro (
            id INTEGER PRIMARY KEY,
            titulo TEXT,
            feito_por TEXT,
            rank TEXT,
            praticas INTEGER,
            satisfacao INTEGER,
            resumo TEXT
        )
    `);

    // Rota para obter todos os roteiros
    app.get('/roteiros', async (req, res) => {
        try {
            const rows = await db.all('SELECT * FROM roteiro');
            res.json(rows);
        } catch (err) {
            console.error('Erro ao obter roteiros:', err);
            res.status(500).json({ error: 'Erro ao obter roteiros' });
        }
    });

    // Rota para criar um novo roteiro
    app.post('/roteiros', express.json(), async (req, res) => {
        const { titulo, feito_por, rank, praticas, satisfacao, resumo } = req.body;
        try {
            const result = await db.run('INSERT INTO roteiro (titulo, feito_por, rank, praticas, satisfacao, resumo) VALUES (?, ?, ?, ?, ?, ?)', [titulo, feito_por, rank, praticas, satisfacao, resumo]);
            const insertedRoteiro = await db.get('SELECT * FROM roteiro WHERE id = ?', [result.lastID]);
            res.status(201).json(insertedRoteiro);
        } catch (err) {
            console.error('Erro ao criar roteiro:', err);
            res.status(500).json({ error: 'Erro ao criar roteiro' });
        }
    });

    // Rota para excluir um roteiro
    app.delete('/roteiros/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const result = await db.run('DELETE FROM roteiro WHERE id = ?', [id]);
            if (result.changes === 0) {
                res.status(404).json({ error: 'Roteiro não encontrado' });
            } else {
                res.json({ message: 'Roteiro excluído com sucesso' });
            }
        } catch (err) {
            console.error('Erro ao excluir roteiro:', err);
            res.status(500).json({ error: 'Erro ao excluir roteiro' });
        }
    });

    // Rota para atualizar um roteiro existente
    app.put('/roteiros/:id', express.json(), async (req, res) => {
        const { id } = req.params;
        const { titulo, feito_por, rank, praticas, satisfacao, resumo } = req.body;
        try {
            const result = await db.run('UPDATE roteiro SET titulo = ?, feito_por = ?, rank = ?, praticas = ?, satisfacao = ?, resumo = ? WHERE id = ?', [titulo, feito_por, rank, praticas, satisfacao, resumo, id]);
            if (result.changes === 0) {
                res.status(404).json({ error: 'Roteiro não encontrado' });
            } else {
                const updatedRoteiro = await db.get('SELECT * FROM roteiro WHERE id = ?', [id]);
                res.json(updatedRoteiro);
            }
        } catch (err) {
            console.error('Erro ao atualizar roteiro:', err);
            res.status(500).json({ error: 'Erro ao atualizar roteiro' });
        }
    });

    // Rota para obter um roteiro específico por ID
    app.get('/roteiros/:id', async (req, res) => {
        const { id } = req.params;
        try {
            const row = await db.get('SELECT * FROM roteiro WHERE id = ?', [id]);
            if (!row) {
                res.status(404).json({ error: 'Roteiro não encontrado' });
            } else {
                res.json(row);
            }
        } catch (err) {
            console.error('Erro ao obter roteiro:', err);
            res.status(500).json({ error: 'Erro ao obter roteiro' });
        }
    });

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch(err => {
    console.error('Erro ao abrir o banco de dados:', err);
});