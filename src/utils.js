export function recursive_func(i) {
    if (i<0) {
        return;
    }

    console.log(`${i}`);
    recursive_func(i-1);
}

export function nested_func(a,b) {
    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}