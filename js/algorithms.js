

Sorting = {

    qsort: null,
    bsort: async function bsort(tiles){
        tiles.slider.moveToEnd();

        for(let i =0; i< tiles.tiles.length - 1; i++){
            let [t1, t2] = tiles.slider.give();
            await tiles.swapPos(t1, t2.index);
            tiles.slider.shiftLeft();
        }
    },
    isort:async function isort(arr) {
        let key, j;
        let copy = [...arr];
        for (let i = 1; i < copy.length; i++){
            key = copy[i]
            j = i - 1
            while ((j >= 0) && (key < copy[j])){
                copy[j + 1] = copy[j];
                j  = j - 1;
            }
        copy[j + 1] = key;
        }
        return copy;
    },
    lsort: null,
    
}