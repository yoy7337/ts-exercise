
const readline = require('readline')

const isBrowser: boolean = typeof window === 'object'

function showMessage(text: string): void {
    if (isBrowser) {
        alert(text)
    } else {
        console.log(text)
    }
}

function generateNumber(): number {
    return Math.floor((Math.random() * 100) + 1)
}

async function showMessageAndImputText(text: string): Promise<string> {
    showMessage("Please input a number")

    if (isBrowser) {
        return new Promise<string>(resolve => {
            const input = prompt(text);
            return input ? input : "nothing"
        });
    } else {
        const readline = require('readline')
        const rl = readline.createInterface({
            input: process.stdin,
        });

        const lineResolver: Promise<string> = new Promise<string>(resolve => {
            rl.on('line', (line: string) => resolve(line))
        });

        const line: string = await lineResolver
        rl.close()

        return line
    }
}

async function main() {
    const secertNum: number = generateNumber()
    console.log('test start')
    while (true) {
        const val: number = parseInt(await showMessageAndImputText("Please guess a number: "))
        if (isNaN(val)) {
            showMessage("Please input a correct  numberrrrrrr")
        } else if (val === secertNum) {
            showMessage('Good jobbbbbbb')
            return
        } else if (val > secertNum) {
            showMessage('Smaller is good~')
        } else {
            showMessage('Larger is good~')
        }
    }
}

main();
