import fs from 'fs'
import g from 'gm'
const gm = g.subClass({imageMagick: true})

const files = fs.readdirSync('.').filter(x => x.endsWith('jpg'))

function getSize(file) {
    return new Promise((resolve) => {
        gm(file).size((e, v) => {
            resolve(v)
        })
    })
}

async function work() {
    const res = {}
    for(let i = 0; i < files.length; i++) {
        const v = await getSize(files[i])
        res[files[i]] = v
    }
    return res
}

work().then(h => {
    console.log(h)
})