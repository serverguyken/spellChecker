interface Dictionary {
    word: string;
    definition: string;
    example: string;
}

const words: Array<Dictionary> = [
    {
        word: 'hello',
        definition: 'greeting',
        example: 'hello world'
    },
    {
        word: 'world',
        definition: 'planet',
        example: 'hello world'
    },
    {
        word: 'javascript',
        definition: 'programming language',
        example: 'hello javascript'
    },
    {
        word: 'typescript',
        definition: 'programming language',
        example: 'hello typescript'
    },
    {
        word: 'node',
        definition: 'programming language',
        example: 'hello node'
    },
    {
        word: "happy",
        definition: "feeling of contentment or satisfaction",
        example: "I am happy to see you"
    },
    {
        word: "sad",
        definition: "feeling of unhappiness or sorrow",
        example: "I am sad to see you"
    },
    {
        word: "angry",
        definition: "feeling of strong feeling of anger",
        example: "I am angry to see you"
    },
    {
        word: "bad",
        definition: "of poor quality or a low standard",
        example: "a bad diet"
    }
]


function isWord(word: string): boolean {
    if (words.find(w => w.word === word.toLowerCase())) {
        return true
    } else {
        return false
    }
}

function addWord(word: string, definition: string, example: string): string {
    if (words.find(w => w.word === word)) {
        return `${word} already exists in the dictionary`
    } else {
        words.push({
            word,
            definition,
            example
        })
        return `${word} has been added to the dictionary`
    }
}

function removeWord(word: string): string {
    if (words.find(w => w.word === word)) {
        words.splice(words.indexOf(words.find(w => w.word === word)), 1)
        return `${word} has been removed from the dictionary`
    } else {
        return `${word} does not exist in the dictionary`
    }
}

function getWord(word: string): any {
    if (words.find(w => w.word === word)) {
        return words.find(w => w.word === word.toLowerCase())
    } else {
        return `${word} does not exist in the dictionary`
    }
}

function getAllWords(): {} {
    return words
}

function getExample(word: string): string {
    if (words.find(w => w.word === word)) {
        return `Example for ${word}: ${words.find(w => w.word === word).example}`
    } else {
        return `Cannot find an example for ${word}, ${word} does not exist in the dictionary`
    }
}

function getAllExamples(): any {
    return words.map(w => {
        return `Word: ${w.word}, Example: ${w.example}`
    })
}

function getDefinition(word: string): string {
    if (words.find(w => w.word === word)) {
        return `Definition for ${word}: ${words.find(w => w.word === word).definition}`
    } else {
        return `Cannot find a definition for ${word}, ${word} does not exist in the dictionary`
    }
}

function getAllDefinitions(): any {
    return words.map(w => {
        return `Word: ${w.word}, Definition: ${w.definition}`
    })
}

export { words, isWord,  addWord, removeWord, getWord, getAllWords, getExample, getAllExamples, getDefinition, getAllDefinitions};
