const getFlagValue = require('./flags')


console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)

// estagio.ti@Mac-EstagioTI NodeJs %  node greetings --name "Leonardo Chagas" --greeting "Tudo bem com voce?" 