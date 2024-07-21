function parseDialogues(dialogueString) {
    const regex = /{(\d+)}(.*?)\{\/}/g;
    const dialogues = [];
    let match;

    while ((match = regex.exec(dialogueString)) !== null) {
        dialogues.push({
            characterId: parseInt(match[1], 10),
            dialogue: match[2].trim()
        });
    }

    return dialogues;
}

module.exports = { parseDialogues };