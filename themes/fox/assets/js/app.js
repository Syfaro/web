class Gridify {
    constructor(node, opts = {}) {
        this.node = node;
        this.opts = opts;
        this.node.style.position = 'relative';
        window.addEventListener('resize', this.render.bind(this));
        this.imagesLoaded().then(this.render.bind(this));
    }
    imagesLoaded() {
        return new Promise((resolve, reject) => {
            const images = this.node.querySelectorAll('img');
            let count = images.length;
            if (count === 0)
                resolve();
            let loaded = ev => {
                count--;
                if (count === 0)
                    resolve();
            };
            images.forEach(image => {
                const img = new Image();
                img.addEventListener('load', loaded);
                img.addEventListener('error', loaded);
                img.src = image.src;
            });
        });
    }
    render() {
        const items = Array.from(this.node.querySelectorAll(this.opts['srcNode'])).filter(item => !item.parentNode.classList.contains('nsfw'));
        const transition = (this.opts['transition'] || 'all 0.5s ease') + ', height 0s, width 0s';
        const width = this.node.clientWidth;
        const itemMargin = parseInt(this.opts['margin'], 10) || 0;
        const itemWidth = parseInt(this.opts['width'] || 200, 10);
        const columnCount = Math.max(Math.floor(width / (itemWidth + itemMargin)), 1);
        const left = columnCount === 1 ? itemMargin / 2 : (width % (itemWidth + itemMargin)) / 2;
        let columns = [];
        for (let i = 0; i < columnCount; i++) {
            columns.push(0);
        }
        items.forEach(item => {
            const idx = Gridify.indexOfSmallest(columns);
            const style = item.style;
            style.position = 'absolute';
            style.width = itemWidth + 'px';
            style.margin = (itemMargin / 2) + 'px';
            style.top = (columns[idx] + itemMargin / 2) + 'px';
            style.left = ((itemWidth + itemMargin) * idx + left) + 'px';
            style.transition = transition;
            columns[idx] += item.clientHeight + itemMargin;
        });
        this.node.style.height = Gridify.highestColumn(columns) + 'px';
        if (this.opts['onRender']) {
            this.opts['onRender']();
        }
    }
    static indexOfSmallest(a) {
        let lowest = 0;
        for (let i = 1, length = a.length; i < length; i++) {
            if (a[i] < a[lowest])
                lowest = i;
        }
        return lowest;
    }
    static highestColumn(cols) {
        let highest = 0;
        for (let i = 0, length = cols.length; i < length; i++) {
            if (cols[i] > highest)
                highest = cols[i];
        }
        return highest;
    }
}
;
const gridArt = document.querySelector('#art');
const show = document.querySelector('.reveal');
const hidden = document.querySelectorAll('.nsfw');
let screenWidth = 0;
const urlParams = window.location.hash.slice(1).toLowerCase().split(',');
const needsToScroll = urlParams.includes('art');
let hasScrolled = false;
function updateWidth() {
    const element = document.documentElement;
    screenWidth = Math.max(element.clientWidth, element.offsetWidth, element.scrollWidth);
    window.requestAnimationFrame(() => updateGrid());
}
updateWidth();
function getItemWidth(big) {
    return big ? 400 : 200;
}
function updateGrid() {
    if (screenWidth <= 450) {
        return;
    }
    new Gridify(gridArt, {
        srcNode: 'img',
        margin: '16px',
        width: getItemWidth(true).toString() + 'px',
        onRender: () => {
            if (needsToScroll && !hasScrolled) {
                gridArt.scrollIntoView();
                hasScrolled = true;
            }
        }
    });
    new Gridify(document.querySelector('#icons'), {
        srcNode: 'img',
        margin: '8px',
        width: getItemWidth(false).toString() + 'px'
    });
}
function revealNSFW(ev) {
    ev.preventDefault();
    hidden.forEach(item => item.classList.remove('nsfw'));
    updateGrid();
    show.classList.add('nsfw');
}
show.addEventListener('click', revealNSFW);
window.addEventListener('load', updateGrid);
window.addEventListener('resize', updateWidth);
if (urlParams.includes('nsfw')) {
    revealNSFW(null);
}
