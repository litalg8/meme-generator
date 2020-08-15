'use strict';
const MEME_KEY = 'memes';

var gMeme;
var gMemes = [];
var gFontfamily = 'impact';
var gColor = '#ffffff';
var gStrokeColor = '#000000';


var gKeyWords;
var gFilter;
var gGallery;
var gImgs = createImages();

////GET functions

function getImages() {
    // console.log(gImgs)
    return gImgs;
}

function getImgByUrl() {
    return getImageById(gMeme.selectedImgId).url;
}

function setMemeId(memeId) {
    gMeme.selectedImgId = memeId;
}

function getImageById(imgId) {
    // console.log(imgId)
    return gImgs.find((img) => img.id === imgId)
}

function getLineById() {
    return gMeme.lines[gMeme.length - 1]
}

// function getLines() {
//     return gMeme.lines;
// }


function setLineIdx(idx) {
    gMeme.selectedLineIdx = idx;
}


function getMeme() {
    // console.log('gMeme', gMeme)
    return gMeme;
}

function addLine(txt = "This is a line", x, y) {
    var line = {
        txt,
        size: 42,
        align: 'center',
        color: '#ffffff',
        strokeColor: '#000000',
        fontFamily: 'Impact',
        x,
        y,
    }
    gMeme.lines.push(line)
        // console.log(gMeme)
}

function removeLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    var currLine = gMeme.selectedLineIdx - 1
    if (currLine < 0) currLine = 0;
    return currLine;
}


function setMemeTxt(txt) {
    // console.log(txt)
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


////CREATE functions 


function createMeme(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        lines: []
    }
    addLine('Text', 200, 70)
}


// function markLine(){
//     let lineIdx = gCurr
// }

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
            break;
        case 'align-left':
            gMeme.lines[gMeme.selectedLineIdx].align = 'left';
            break;
        case 'align-right':
            gMeme.lines[gMeme.selectedLineIdx].align = 'right';
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
        // console.log(gImgs)
    return gImgs;

}

function _createImage(id, url, keywords) {
    return {
        id,
        url,
        keywords
    };
}


//  Font 

function setFontColor(currColor) {
    currColor = gMeme.line.color;
    gMeme.lines.forEach((line) => {
        line.color = currColor;
    })
}

function getFont() {
    return gFontFamily;
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

// function getLineCoords(xcoord, ycoord, width, align, size) {
//     let x;
//     switch (align) {
//         case 'center':
//             x = xcoord - (width / 2);
//             break;
//         case 'left':
//             x = xcoord;
//             break;
//         case 'right':
//             x = (xcoord - width);
//     }
//     let y = ycoord - size;
//     return { xcoord: x, ycoord: y, xcoord2: (x + width), ycoord2: (y + size) }
// }

// function setGalleryFilter(str) {
//     if (!str) gFilter = undefined;
//     else gFilter = str;
// }


// function getKeyWords() {
//     gKeyWords = {};
//     const imgs = getFilteredImgs();
//     imgs.forEach(img => {
//         img.keywords.forEach(keyword => {
//             gKeyWords[keyword] = gKeyWords[keyword] ? ++gKeyWords[keyword] : 1;
//         })
//     })
// }

// function getFilteredImgs(imgId) {
//     if (imgId) {
//         let idx = getImageById(imgId);
//         return gGallery[idx];
//     }
//     if (!gFilter) return gGallery;
//     else {
//         var filteredImgs = gGallery.filter(img => {
//             return img.keywords.filter(keyword => {
//                 return keyword.includes(gFilter)
//             })
//         })
//         return filteredImgs;

//     }
// function markLine() {
//     var meme = getMeme();
//     var markedLine = meme.selectedLineIdx;
//     gCurrLine = meme.lines[markedLine];
//     var lineWidth = gCtx.measureText(gCurrLine.txt).width;
//     var lineHeight = gCurrLine.size;
//     let x;
//     switch (gCurrLine.align) {
//         case 'center':
//             x = gCurrLine.x - (lineWidth / 2);
//             break;
//         case 'left':
//             x = gCurrLine.x;
//             break;
//         case 'right':
//             x = gCurrLine.x - lineWidth;
//             break;
//     }
//     let y = gCurrLine.y - (0.9 * lineHeight)
//     drawRect(x, y, lineWidth, lineHeight)

// }

// function _saveBooks() {
//     saveToStorage('books', gBooks)
// }   saveToStorage('books', gBooks)
// }