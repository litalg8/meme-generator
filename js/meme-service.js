'use strict';
const MEME_KEY = 'memes';

var gMeme;
var gMemes = [];
var gColor = '#ffffff';
var gStrokeColor = '#000000';
// CR: define global variable of height that changes in every add line 
// gHeight  = 50/100
// getHeight()
var gImgs = createImages();

function getImages() {
    return gImgs;
}

function getImgByUrl() {
    return getImageById(gMeme.selectedImgId).url;
}

function getMeme() {
    return gMeme;
}

function setMemeId(memeId) {
    gMeme.selectedImgId = memeId;
}

function getImageById(imgId) {
    return gImgs.find((img) => img.id === imgId)
}

function getLineById() {
    return gMeme.lines[gMeme.length - 1]
}

function getLines() {
    return gMeme.lines;
}



function setLinePos(line, xPos, yPos) {
    line.x = xPos;
    line.y = yPos;
}

function addLine(txt = "This is a line", x, y = 50) {
    var line = {
        txt,
        size: 42,
        align: 'center',
        color: '#ffffff',
        strokeColor: '#000000',
        fontFamily: 'Impact',
        x,
        y,
        isDrag: false,
    }
    gMeme.lines.push(line)
    console.log('entered addLine', gMeme)
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    var currLine = gMeme.selectedLineIdx - 1;
    if (currLine < 0) currLine = 0;
    return currLine;
}

function setMemeTxt(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt;
}

function switchLines() {
    if (!getLines().length) return;
    gMeme.selectedLineIdx += 1;
    if (gMeme.selectedLineIdx >= gMeme.lines.length) {
        gMeme.selectedLineIdx = 0;
    }
    console.log('switched to line', gMeme.selectedLineIdx);
}

////CREATE functions 

function createMeme(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: []
    }
    // gHeight += 50
    addLine('Your text goes here', 250, 100);
    //     play with gHeight & maybe dont need this addline gHeight (=50)
}

function getLineIdx(x, y) {
    let lineIdx = gMeme.lines.findIndex(line => {
        return x >= line.x - line.width / 2 && x <= line.x + line.width / 2 && y >= line.y - line.size && y <= line.y
    })
    return lineIdx
}

function setLineIdx(idx) {
    gMeme.selectedLineIdx = idx;
}

function setLineChanges(val) {
    switch (val) {
        case '+':
            gMeme.lines[gMeme.selectedLineIdx].size += 2;
            break;
        case '-':
            gMeme.lines[gMeme.selectedLineIdx].size -= 2;
            break;
        case 'up':
            gMeme.lines[gMeme.selectedLineIdx].y -= 5;
            break;
        case 'down':
            gMeme.lines[gMeme.selectedLineIdx].y += 5;
            break;
        case 'left':
            gMeme.lines[gMeme.selectedLineIdx].x -= 5;
            break;
        case 'right':
            gMeme.lines[gMeme.selectedLineIdx].x += 5;
            break;
        case 'align-center':
            gMeme.lines[gMeme.selectedLineIdx].align = 'center';
            gMeme.lines[gMeme.selectedLineIdx].x = gCanvas.width / 2;
            break;
        case 'align-left':
            gMeme.lines[gMeme.selectedLineIdx].align = 'left';
            gMeme.lines[gMeme.selectedLineIdx].x = 10;
            break;
        case 'align-right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'right';
            gMeme.lines[gMeme.selectedLineIdx].x = gCanvas.width - 10;
            break;
    }
}

function createImages() {
    var gImgs = [];
    gImgs.push(
        _createImage(1, 'img/1.jpg', ['cute']),
        _createImage(2, 'img/2.jpg', ['cute']),
        _createImage(3, 'img/3.jpg', ['cat']),
        _createImage(4, 'img/4.jpg', ['funny']),
        _createImage(5, 'img/5.jpg', ['funny']),
        _createImage(6, 'img/6.jpg', ['funny']),
        _createImage(7, 'img/7.jpg', ['funny']),
        _createImage(8, 'img/8.jpg', ['funny']),
        _createImage(9, 'img/9.jpg', ['funny']),
        _createImage(10, 'img/10.jpg', ['funny']),
        _createImage(11, 'img/11.jpg', ['funny']),
        _createImage(12, 'img/12.jpg', ['happy']),
        _createImage(13, 'img/13.jpg', ['happy']),
        _createImage(14, 'img/14.jpg', ['happy']),
        _createImage(15, 'img/15.jpg', ['happy']),
        _createImage(16, 'img/16.jpg', ['happy']),
        _createImage(17, 'img/17.jpg', ['happy']),
        _createImage(18, 'img/18.jpg', ['happy']))
    return gImgs;

}
// gKeyWord.key.value +
function _createImage(id, url, keywords) {
    return {
        id,
        url,
        keywords
    };
}

function setFontColor(currColor) {
    currColor = gMeme.line.color;
    gMeme.lines.forEach((line) => {
        line.color = currColor;
    })
}

function setFontFamily(font) {
    gMeme.lines[gMeme.selectedLineIdx].fontFamily = font;
}

function setStrokeColor(stroke) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = stroke;
}

function setFontColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function saveMemesToStorage() {
    var memes = loadFromStorage(MEME_KEY);
    getMemeLines.push(memes);
    saveMemesToStorage(MEME_KEY, gMemes)
}